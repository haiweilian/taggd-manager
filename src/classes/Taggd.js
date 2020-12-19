import Tag from './Tag'
import TaggdEffect from './TaggdEffect'
import EventEmitter from '../util/event-emitter'
import TypeErrorMessage from '../util/type-error-message'
import { ofInstance, isObject, isFunction, assign, addClass, removeClass } from '../util/utilities'

class Taggd extends EventEmitter {
  /**
   * Create a new taggd instance
   * @param {HTMLElement} image - The image to wrap
   * @param {Object} [options = {}] - The options
   * @param {Array} [data = []] - The tags
   */
  constructor(image, options = {}, data = []) {
    if (!image instanceof Element) {
      throw new TypeError(TypeErrorMessage.getMessage(image, Element))
    }

    super()

    this.wrapper = document.createElement('div')
    this.wrapper.className = 'taggd'

    image.classList.add('taggd__image')
    image.parentNode.insertBefore(this.wrapper, image)

    this.wrapper.appendChild(image)

    this.image = image
    this.options = {}
    this.imageData = {}
    this.initialImageData = {}
    this.tags = []
    this.pointer = {}
    this.action = false

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
  on(eventName, handler) {
    return super.on(eventName, handler)
  }

  /**
   * Unsubscribe from an event.
   * @param {String} eventName - The event to unsubscribe from.
   * @param {Function} handler - The handler that was used to subscribe.
   * @return {Taggd} Current Taggd instance
   */
  off(eventName, handler) {
    return super.off(eventName, handler)
  }

  /**
   * Subscribe to an event and unsubscribe once triggered.
   * @param {String} eventName - The event to subscribe to.
   * @param {Function} handler - The handler to execute.
   * @return {Taggd} Current Taggd instance
   */
  once(eventName, handler) {
    return super.once(eventName, handler)
  }

  /**
   * Set taggd options
   * @param {Object} options - The options to set
   * @return {Taggd} Current Taggd instance
   */
  setOptions(options) {
    if (!isObject(options)) {
      throw new TypeError(TypeErrorMessage.getObjectMessage(options))
    }

    this.options = assign(this.options, Taggd.DEFAULT_OPTIONS, options)

    return this
  }

  /**
   * Add a single tag
   * @param {Taggd.Tag} tag - The tag to add
   * @return {Taggd} Current Taggd instance
   */
  addTag(tag) {
    if (!ofInstance(tag, Tag)) {
      throw new TypeError(TypeErrorMessage.getTagMessage(tag))
    }

    const isCanceled = !this.emit('taggd.tag.add', this, tag)
    let hideTimeout

    /**
     * Test whether the event’s target is the button Element
     * @param {Event} e - The event object
     * @return {Boolean} Whether the event’s target is the button element
     */
    const isTargetButton = (e) => e.target === tag.buttonElement
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
      tag.onAnything((eventName, ...args) => {
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
  getTag(index) {
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
  deleteTag(index) {
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
  setTags(tags) {
    this.deleteTags()
    this.addTags(tags)
    return this
  }

  /**
   * Add multiple tags
   * @param {Taggd.Tag[]} tags - An array of tags
   * @return {Taggd} Current Taggd instance
   */
  addTags(tags) {
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
  map(callback) {
    if (!isFunction(callback)) {
      throw new TypeError(TypeErrorMessage.getFunctionMessage(callback))
    }

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

      this.image.removeEventListener(this.options.addEvent, this.imageClickHandler)
      this.image.removeEventListener('wheel', this.imageZoomHander)
      this.image.removeEventListener('mousedown', this.imageDownHander)
      document.removeEventListener('mousemove', this.imageMoveHander)
      document.removeEventListener('mouseup', this.imageUpHander)

      this.image.classList.remove('taggd__image')
      this.image.style.cssText = this.imageData.naturalStyle

      this.wrapper.parentNode.insertBefore(this.image, this.wrapper)
      this.wrapper.parentNode.removeChild(this.wrapper)
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

      this.image.addEventListener(this.options.addEvent, (this.imageClickHandler = this.imageClickHandler.bind(this)))
      this.image.addEventListener('wheel', (this.imageZoomHander = this.imageZoomHander.bind(this)))
      this.image.addEventListener('mousedown', (this.imageDownHander = this.imageDownHander.bind(this)))
      document.addEventListener('mousemove', (this.imageMoveHander = this.imageMoveHander.bind(this)))
      document.addEventListener('mouseup', (this.imageUpHander = this.imageUpHander.bind(this)))
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

      this.image.removeEventListener(this.options.addEvent, this.imageClickHandler)
      this.image.removeEventListener('wheel', this.imageZoomHander)
      this.image.removeEventListener('mousedown', this.imageDownHander)
      document.removeEventListener('mousemove', this.imageMoveHander)
      document.removeEventListener('mouseup', this.imageUpHander)
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
  hideDelay: 500,
}

export default Taggd
