import EventEmitter from '../utils/event-emitter'
import TypeErrorMessage from '../utils/type-error-message'
import type { IOptions, IPointer, IImageData, ITaggdEvent } from '../utils/typings'
import { ofInstance, isObject, isFunction, assign, addClass, removeClass, setStyle, getWheelRatio, getOffset, getPointer } from '../utils/utilities'
import Tag from './Tag'

class Taggd extends EventEmitter {
  static DEFAULT_OPTIONS: IOptions
  static Tag = Tag

  wrapper: HTMLElement
  image: HTMLImageElement
  tags: Tag[]
  options: IOptions
  imageData: IImageData
  pointer: IPointer
  isMoved: boolean
  isMoveing: boolean
  isWheeling: boolean

  /**
   * Create a new taggd instance
   * @param {HTMLElement} image - The image to wrap
   * @param {Object} [options = {}] - The options
   * @param {Array} [data = []] - The tags
   */
  constructor(image: HTMLImageElement, options: Partial<IOptions> = {}, data: Tag[] = []) {
    if (!(image instanceof Element)) {
      throw new TypeError(TypeErrorMessage.getMessage(image, Element))
    }

    super()

    this.wrapper = document.createElement('div')
    this.wrapper.className = 'taggd'

    this.image = image
    image.classList.add('taggd__image')
    image.parentNode?.insertBefore(this.wrapper, image)

    this.wrapper.appendChild(image)

    this.tags = []
    this.options = {} as IOptions
    this.imageData = {} as IImageData
    this.pointer = {} as IPointer

    this.setOptions(options)

    // Subscriptions do not fire after instantiation 'taggd.editor.load'
    Promise.resolve().then(() => this.loadImage(data))
  }

  /**
   * Subscribe to an event.
   * @param {String} eventName - The event to subscribe to.
   * @param {Function} handler - The handler to execute.
   * @return {Taggd} Current Taggd instance
   */
  on<T extends keyof ITaggdEvent>(eventName: T, handler: ITaggdEvent[T]) {
    return super.on(eventName, handler)
  }

  /**
   * Unsubscribe from an event.
   * @param {String} eventName - The event to unsubscribe from.
   * @param {Function} handler - The handler that was used to subscribe.
   * @return {Taggd} Current Taggd instance
   */
  off<T extends keyof ITaggdEvent>(eventName: T, handler: ITaggdEvent[T]) {
    return super.off(eventName, handler)
  }

  /**
   * Subscribe to an event and unsubscribe once triggered.
   * @param {String} eventName - The event to subscribe to.
   * @param {Function} handler - The handler to execute.
   * @return {Taggd} Current Taggd instance
   */
  once<T extends keyof ITaggdEvent>(eventName: T, handler: ITaggdEvent[T]) {
    return super.once(eventName, handler)
  }

  /**
   * Publish to an event.
   * @param {String} eventName - The event to Publish to.
   * @param {Function} handler - The handler to execute.
   * @return {Boolean} The is canceled.
   */
  emit<T extends keyof ITaggdEvent>(eventName: T, ...args: Parameters<ITaggdEvent[T]>) {
    return super.emit(eventName, ...args)
  }

  /**
   * Set taggd options
   * @param {Object} options - The options to set
   * @return {Taggd} Current Taggd instance
   */
  setOptions(options: Partial<IOptions>) {
    if (!isObject(options)) {
      throw new TypeError(TypeErrorMessage.getObjectMessage(options))
    }

    this.options = assign(this.options, Taggd.DEFAULT_OPTIONS, options) as IOptions

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

      // Add events to click tags
      // If a move occurs, click will not be triggered
      tag.buttonElement.addEventListener('click', (e) => {
        if (!isTargetButton(e)) return

        if (!tag.isMoved) {
          tag.click()
        }
      })

      // Route all tag events through taggd instance
      tag.onAnything((eventName: any, ...args: any) => {
        this.emit(eventName, this, ...args)
      })

      // Establish contact with Taggd
      tag.taggd = this
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
  map(callback: (value: Tag, index: number, array: Tag[]) => any) {
    if (!isFunction(callback)) {
      throw new TypeError(TypeErrorMessage.getFunctionMessage(callback))
    }

    this.tags = this.tags.map(callback)

    return this
  }

  /**
   * Get all tags json
   * @return {Array} A array for JSON
   */
  toJSON() {
    return this.tags.map((tag) => tag.toJSON())
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
      this.wrapper.classList.add('taggd--pointer')

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
      this.wrapper.classList.remove('taggd--pointer')

      this.image.removeEventListener(this.options.addEvent, this.taggdClickHandler)
      this.image.removeEventListener('wheel', this.taggdZoomHander)
      this.image.removeEventListener('mousedown', this.taggdDownHander)
      document.removeEventListener('mousemove', this.taggdMoveHander)
      document.removeEventListener('mouseup', this.taggdUpHander)
    }

    return this
  }

  /**
   * Load image and reset image
   * @param {Taggd.Tag[]} tags - An array of tags
   * @return {Taggd} Current Taggd instance
   */
  private loadImage(tags: Tag[]) {
    this.emit('taggd.editor.load', this)

    const { image, wrapper, imageData } = this
    const parentWidth = wrapper.offsetWidth
    const parentHeight = wrapper.offsetHeight
    const newImage = document.createElement('img')

    addClass(wrapper, 'taggd--loading')

    newImage.onload = () => {
      removeClass(wrapper, 'taggd--loading')

      // Original aspect ratio
      const { naturalWidth, naturalHeight } = image
      const aspectRatio = naturalWidth / naturalHeight

      // Full center in default
      let width = parentWidth
      let height = parentHeight
      if (parentHeight * aspectRatio > parentWidth) {
        height = parentWidth / aspectRatio
      } else {
        width = parentHeight * aspectRatio
      }

      // Init image style
      imageData.width = width
      imageData.height = height
      imageData.naturalWidth = naturalWidth
      imageData.naturalHeight = naturalHeight
      imageData.naturalStyle = image.style.cssText
      imageData.ratio = width / naturalWidth
      imageData.left = (parentWidth - width) / 2
      imageData.top = (parentHeight - height) / 2

      // Init tags
      this.setTags(tags)
      this.taggdChangeRender()

      this.emit('taggd.editor.loaded', this)
    }

    newImage.onerror = () => {
      this.emit('taggd.editor.loaderror', this)
    }

    newImage.src = image.src

    return this
  }

  /**
   * Change image reset style
   * @return {Taggd} Current Taggd instance
   */
  private taggdChangeRender() {
    const { image, imageData } = this

    setStyle(image, {
      width: imageData.width,
      height: imageData.height,
      marginLeft: imageData.left,
      marginTop: imageData.top,
    })

    // update tags position
    this.tags.forEach((tag) => tag.setPosition())

    return this
  }

  /**
   * Taggd click/dblclick hander
   * @param {MouseEvent} event
   * @return {Taggd} Current Taggd instance
   */
  private taggdClickHandler(event: MouseEvent) {
    if (this.isMoved) {
      if (this.options.addEvent === 'click') {
        return this
      }
    }

    const { imageData } = this
    const offset = getOffset(this.image)

    const position = {
      x: (event.pageX - offset.left) / imageData.ratio,
      y: (event.pageY - offset.top) / imageData.ratio,
    }

    this.emit('taggd.editor.add', this, position)

    return this
  }

  /**
   * Taggd wheel hander
   * @param {WheelEvent} event
   * @return {Taggd} Current Taggd instance
   */
  taggdZoomHander(event: WheelEvent) {
    event.preventDefault()

    if (this.isWheeling) {
      return
    }

    this.isWheeling = true

    setTimeout(() => {
      this.isWheeling = false
    }, 50)

    const { options, image, imageData } = this
    const { width, height, naturalWidth, naturalHeight } = imageData

    let ratio = getWheelRatio(event, options.zoomRatio)

    const zoomRatioMin = Math.max(0.01, options.zoomRatioMin)
    const zoomRatioMax = Math.min(100, options.zoomRatioMax)

    ratio = (width * ratio) / naturalWidth
    ratio = Math.min(Math.max(ratio, zoomRatioMin), zoomRatioMax)

    const offset = getOffset(image)
    const newWidth = naturalWidth * ratio
    const newHeight = naturalHeight * ratio
    const offsetWidth = newWidth - width
    const offsetHeight = newHeight - height

    imageData.ratio = ratio
    imageData.width = newWidth
    imageData.height = newHeight
    imageData.left -= offsetWidth * ((event.pageX - offset.left) / width)
    imageData.top -= offsetHeight * ((event.pageY - offset.top) / height)

    this.taggdChangeRender()

    this.emit('taggd.editor.zoom', this)

    return this
  }

  /**
   * Taggd mousedown hander
   * @param {MouseEvent} event
   * @return {Taggd} Current Taggd instance
   */
  taggdDownHander(event: MouseEvent) {
    event.preventDefault()

    addClass(this.wrapper, 'taggd--grabbing')

    this.isMoved = false
    this.isMoveing = true
    this.pointer = {
      ...getPointer(event),
      elX: this.imageData.left,
      elY: this.imageData.top,
    }

    this.emit('taggd.editor.movedown', this)

    return this
  }

  /**
   * Taggd mousemove hander
   * @param {MouseEvent} event
   * @return {Taggd} Current Taggd instance
   */
  taggdMoveHander(event: MouseEvent) {
    if (!this.isMoveing) {
      return
    }

    event.preventDefault()

    const { imageData, pointer } = this
    const { endX, endY } = getPointer(event)

    imageData.left = pointer.elX + (endX - pointer.startX)
    imageData.top = pointer.elY + (endY - pointer.startY)

    this.isMoved = true
    this.taggdChangeRender()
    this.emit('taggd.editor.move', this)

    return this
  }

  /**
   * Taggd mouseup hander
   * @param {MouseEvent} event
   * @return {Taggd} Current Taggd instance
   */
  taggdUpHander(event: MouseEvent) {
    if (!this.isMoveing) {
      return
    }

    event.preventDefault()

    // If it is not visible, restore to the last starting position.
    const { imageData, wrapper, pointer } = this
    const l = Math.abs(imageData.left) >= (imageData.left >= 0 ? wrapper.offsetWidth : imageData.width)
    const t = Math.abs(imageData.top) >= (imageData.top >= 0 ? wrapper.offsetHeight : imageData.height)

    if (l || t) {
      imageData.left = pointer.elX
      imageData.top = pointer.elY
      this.taggdChangeRender()
    }

    removeClass(this.wrapper, 'taggd--grabbing')

    this.isMoveing = false
    if (this.isMoved) {
      this.emit('taggd.editor.moveup', this)
    }

    return this
  }
}

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
