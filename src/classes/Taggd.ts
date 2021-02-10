import Tag from './Tag'
import TaggdEffect from './TaggdEffect'
import EventEmitter from '../utils/event-emitter'
import TypeErrorMessage from '../utils/type-error-message'
import { ofInstance, isObject, isFunction, assign, addClass, removeClass } from '../utils/utilities'
import { IPointer, IDefaultOptions, ImageData } from '../types/index'

class Taggd extends EventEmitter {
  static DEFAULT_OPTIONS: IDefaultOptions
  static Tag = Tag

  public loadImage: any
  public taggdChangeRender: any
  public taggdClickHandler: any
  public taggdZoomHander: any
  public taggdDownHander: any
  public taggdMoveHander: any
  public taggdUpHander: any

  wrapper: HTMLElement
  image: HTMLImageElement
  options: IDefaultOptions
  imageData: ImageData
  initialImageData: ImageData
  tags: Tag[]
  pointer: IPointer
  action: string
  wheeling: boolean

  /**
   * Create a new taggd instance
   * @param {HTMLElement} image - The image to wrap
   * @param {Object} [options = {}] - The options
   * @param {Array} [data = []] - The tags
   */
  constructor(image: HTMLImageElement, options: Partial<IDefaultOptions> = {}, data: Tag[] = []) {
    if (!(image instanceof Element)) {
      throw new TypeError(TypeErrorMessage.getMessage(image, Element))
    }

    super()

    this.wrapper = document.createElement('div')
    this.wrapper.className = 'taggd'

    image.classList.add('taggd__image')
    image.parentNode?.insertBefore(this.wrapper, image)

    this.wrapper.appendChild(image)

    this.image = image
    this.options = {} as IDefaultOptions
    this.imageData = {} as ImageData
    this.initialImageData = {} as ImageData
    this.tags = []
    this.pointer = {} as IPointer
    this.action = ''
    this.wheeling = false

    this.setOptions(options)

    // TODO: Subscriptions do not fire after instantiation 'taggd.editor.load'
    setTimeout(() => {
      this.loadImage(data)
    })
  }

  /**
   * Subscribe to an event.
   * @param {String} eventName - The event to subscribe to.
   * @param {Function} handler - The handler to execute.
   * @return {Taggd} Current Taggd instance
   */
  on(eventName: string, handler: Function) {
    return super.on(eventName, handler)
  }

  /**
   * Unsubscribe from an event.
   * @param {String} eventName - The event to unsubscribe from.
   * @param {Function} handler - The handler that was used to subscribe.
   * @return {Taggd} Current Taggd instance
   */
  off(eventName: string, handler: Function) {
    return super.off(eventName, handler)
  }

  /**
   * Subscribe to an event and unsubscribe once triggered.
   * @param {String} eventName - The event to subscribe to.
   * @param {Function} handler - The handler to execute.
   * @return {Taggd} Current Taggd instance
   */
  once(eventName: string, handler: Function) {
    return super.once(eventName, handler)
  }

  /**
   * Set taggd options
   * @param {Object} options - The options to set
   * @return {Taggd} Current Taggd instance
   */
  setOptions(options: Partial<IDefaultOptions>) {
    if (!isObject(options)) {
      throw new TypeError(TypeErrorMessage.getObjectMessage(options))
    }

    this.options = assign(this.options, Taggd.DEFAULT_OPTIONS, options) as IDefaultOptions

    return this
  }

  /**
   * Add a single tag
   * @param {Taggd.Tag} tag - The tag to add
   * @return {Taggd} Current Taggd instance
   */
  addTag(tag: Tag) {
    if (!ofInstance(tag, Tag)) {
      throw new TypeError(TypeErrorMessage.getTagMessage(tag))
    }

    const isCanceled = !this.emit('taggd.tag.add', this, tag)
    let hideTimeout: number | undefined

    /**
     * Test whether the event’s target is the button Element
     * @param {Event} e - The event object
     * @return {Boolean} Whether the event’s target is the button element
     */
    const isTargetButton = (e: Event) => e.target === tag.buttonElement
    const clearTimeout = () => {
      if (hideTimeout) {
        window.clearTimeout(hideTimeout)
        hideTimeout = undefined
      }
    }

    if (!isCanceled) {
      // Add events to show/hide tags
      // If show and hide event are identical, set show/hide mode to toggle
      if (this.options.show === this.options.hide) {
        tag.buttonElement.addEventListener(this.options.show, (e) => {
          if (!isTargetButton(e)) return

          clearTimeout()

          if (tag.isHidden()) {
            tag.show()
          } else {
            tag.hide()
          }
        })
      } else {
        tag.buttonElement.addEventListener(this.options.show, (e) => {
          if (!isTargetButton(e)) return

          clearTimeout()
          tag.show()
        })
        tag.buttonElement.addEventListener(this.options.hide, (e) => {
          if (!isTargetButton(e)) return

          clearTimeout()

          // If the use moves the mouse between the button and popup, a delay should give some time
          // to do just that. This only applies to the mouseleave event.
          if (this.options.hide === 'mouseleave') {
            hideTimeout = window.setTimeout(() => tag.hide(), this.options.hideDelay)
          } else {
            tag.hide()
          }
        })

        // Force visibility if user interacts with the popup element
        if (this.options.hide === 'mouseleave') {
          tag.popupElement.addEventListener('mouseover', () => clearTimeout())
          tag.popupElement.addEventListener('mouseleave', () => tag.hide())
        }
      }

      // Route all tag events through taggd instance
      tag.onAnything((eventName: string, ...args: any) => {
        this.emit(eventName, this, ...args)
      })

      // Establish contact with Taggd
      tag.Taggd = this
      tag.setPosition()

      this.tags.push(tag)
      this.wrapper.appendChild(tag.wrapperElement)

      this.emit('taggd.tag.added', this, tag)
    }

    return this
  }

  /**
   * Get a single tag by index
   * @param  {Number} index - The index of the desired tag
   * @return {Taggd.Tag} The tag to get
   */
  getTag(index: number) {
    if (!Number.isInteger(index)) {
      throw new TypeError(TypeErrorMessage.getIntegerMessage(index))
    }

    return this.tags[index]
  }

  /**
   * Delete a single tag by index
   * @param {Number} index - The index of the desired tag
   * @return {Taggd} Current Taggd instance
   */
  deleteTag(index: number) {
    if (!Number.isInteger(index)) {
      throw new TypeError(TypeErrorMessage.getIntegerMessage(index))
    }

    if (!this.tags[index]) {
      throw new Error(`Tag at index ${index} does not exist.`)
    }

    const tag = this.tags[index]
    const isCanceled = !this.emit('taggd.tag.delete', this, tag)

    if (!isCanceled) {
      this.wrapper.removeChild(tag.wrapperElement)
      this.tags.splice(index, 1)

      this.emit('taggd.tag.deleted', this, tag)
    }

    return this
  }

  /**
   * Set all tags
   * @param {Taggd.Tag[]} tags An array of tags
   * @return {Taggd} Current Taggd instance
   */
  setTags(tags: Tag[]) {
    this.deleteTags()
    this.addTags(tags)

    return this
  }

  /**
   * Add multiple tags
   * @param {Taggd.Tag[]} tags - An array of tags
   * @return {Taggd} Current Taggd instance
   */
  addTags(tags: Tag[]) {
    if (!Array.isArray(tags)) {
      throw new TypeError(TypeErrorMessage.getArrayMessage(tags, 'Taggd.Tag'))
    }

    tags.forEach((tag) => this.addTag(tag))

    return this
  }

  /**
   * Get all tags
   * @return {Taggd.Tag[]} All tags of this Taggd instance
   */
  getTags() {
    return this.tags
  }

  /**
   * Remove all tags
   * @return {Taggd} Current Taggd instance
   */
  deleteTags() {
    while (this.tags.length > 0) {
      this.deleteTag(0)
    }

    return this
  }

  /**
   * Iterate and replace all tags
   * @param {Function} callback - The callback to execute for all tags
   * @return {Taggd} Current Taggd instance
   */
  map(callback: Function) {
    if (!isFunction(callback)) {
      throw new TypeError(TypeErrorMessage.getFunctionMessage(callback))
    }

    // @ts-ignore
    this.tags = this.tags.map(callback)

    return this
  }

  /**
   * Clean up memory
   * @return {Taggd} Current Taggd instance
   */
  destroy() {
    const isCanceled = !this.emit('taggd.destroy', this)

    if (!isCanceled) {
      this.deleteTags()

      this.image.removeEventListener(this.options.addEvent, this.taggdClickHandler)
      this.image.removeEventListener('wheel', this.taggdZoomHander)
      this.image.removeEventListener('mousedown', this.taggdDownHander)
      document.removeEventListener('mousemove', this.taggdMoveHander)
      document.removeEventListener('mouseup', this.taggdUpHander)

      this.image.classList.remove('taggd__image')
      this.image.style.cssText = this.imageData.naturalStyle

      this.wrapper.parentNode?.insertBefore(this.image, this.wrapper)
      this.wrapper.parentNode?.removeChild(this.wrapper)
    }

    return this
  }

  /**
   * Enable editor mode
   * @return {Taggd} Current Taggd instance
   */
  enableEditorMode() {
    const isCanceled = !this.emit('taggd.editor.enable', this)

    if (!isCanceled) {
      addClass(this.wrapper, 'taggd--pointer')

      this.image.addEventListener(this.options.addEvent, (this.taggdClickHandler = this.taggdClickHandler.bind(this)))
      this.image.addEventListener('wheel', (this.taggdZoomHander = this.taggdZoomHander.bind(this)))
      this.image.addEventListener('mousedown', (this.taggdDownHander = this.taggdDownHander.bind(this)))
      document.addEventListener('mousemove', (this.taggdMoveHander = this.taggdMoveHander.bind(this)))
      document.addEventListener('mouseup', (this.taggdUpHander = this.taggdUpHander.bind(this)))
    }

    return this
  }

  /**
   * Disable editor mode
   * @return {Taggd} Current Taggd instance
   */
  disableEditorMode() {
    const isCanceled = !this.emit('taggd.editor.disable', this)

    if (!isCanceled) {
      removeClass(this.wrapper, 'taggd--pointer')

      this.image.removeEventListener(this.options.addEvent, this.taggdClickHandler)
      this.image.removeEventListener('wheel', this.taggdZoomHander)
      this.image.removeEventListener('mousedown', this.taggdDownHander)
      document.removeEventListener('mousemove', this.taggdMoveHander)
      document.removeEventListener('mouseup', this.taggdUpHander)
    }

    return this
  }
}

assign(Taggd.prototype, TaggdEffect)

/**
 * Default options for all Taggd instances
 * @const
 * @type {Object}
 * @ignore
 */
Taggd.DEFAULT_OPTIONS = {
  show: 'mouseenter',
  hide: 'mouseleave',
  addEvent: 'dblclick',
  zoomRatio: 0.1,
  zoomRatioMin: 0.01,
  zoomRatioMax: 100,
  hideDelay: 1,
}

export default Taggd
