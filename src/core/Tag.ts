import EventEmitter from '../utils/event-emitter'
import TypeErrorMessage from '../utils/type-error-message'
import type { IPosition, IPointer, ITagEvent } from '../utils/typings'
import { isObject, isString, isFunction, isNumber, setStyle, getPointer, addClass, removeClass } from '../utils/utilities'
import type Taggd from './Taggd'

class Tag extends EventEmitter {
  taggd: Taggd
  wrapperElement: HTMLElement
  popupElement: HTMLElement
  buttonElement: HTMLElement
  text: string
  position: IPosition
  pointer: IPointer
  isMoved: boolean
  isMoveing: boolean

  /**
   * Create a new Tag instance
   * @param {{ x: Number, y: Number }} position - The tag’s coordinates
   * @param {String|Function} text - The tag’s content
   * @param {Object} [buttonAttributes = {}] - The button’s attributes
   * @param {Object} [popupAttributes = {}] - The popup’s attributes
   */
  constructor(
    position: Pick<IPosition, 'x' | 'y'>,
    text: string | Function = '',
    buttonAttributes: Record<string, string> = {},
    popupAttributes: Record<string, string> = {}
  ) {
    if (!isObject(position)) {
      throw new TypeError(TypeErrorMessage.getObjectMessage(position))
    } else if (!('x' in position) || !('y' in position)) {
      throw new Error(`${position} should have x and y property`)
    }

    super()

    this.wrapperElement = document.createElement('div')
    this.wrapperElement.classList.add('taggd__wrapper')

    this.buttonElement = document.createElement('span')
    this.buttonElement.classList.add('taggd__button')

    this.popupElement = document.createElement('span')
    this.popupElement.classList.add('taggd__popup')

    this.wrapperElement.appendChild(this.buttonElement)
    this.wrapperElement.appendChild(this.popupElement)

    this.text = ''
    this.position = position as IPosition
    this.pointer = {} as IPointer

    this.setButtonAttributes(buttonAttributes)
    this.setPopupAttributes(popupAttributes)
    this.setText(text)
    this.hide()
  }

  /**
   * Subscribe to an event.
   * @param {String} eventName - The event to subscribe to.
   * @param {Function} handler - The handler to execute.
   * @return {Taggd.Tag} Current Taggd.Tag instance
   */
  on<T extends keyof ITagEvent>(eventName: T, handler: ITagEvent[T]) {
    return super.on(eventName, handler)
  }

  /**
   * Unsubscribe from an event.
   * @param {String} eventName - The event to unsubscribe from.
   * @param {Function} handler - The handler that was used to subscribe.
   * @return {Taggd.Tag} Current Taggd.Tag instance
   */
  off<T extends keyof ITagEvent>(eventName: T, handler: ITagEvent[T]) {
    return super.off(eventName, handler)
  }

  /**
   * Subscribe to an event and unsubscribe once triggered.
   * @param {String} eventName - The event to subscribe to.
   * @param {Function} handler - The handler to execute.
   * @return {Taggd.Tag} Current Taggd.Tag instance
   */
  once<T extends keyof ITagEvent>(eventName: T, handler: ITagEvent[T]) {
    return super.once(eventName, handler)
  }

  /**
   * Publish to an event.
   * @param {String} eventName - The event to Publish to.
   * @param {Function} handler - The handler to execute.
   * @return {Boolean} The is canceled.
   */
  emit<T extends keyof ITagEvent>(eventName: T, ...args: Parameters<ITagEvent[T]>) {
    return super.emit(eventName, ...args)
  }

  /**
   * Test whether the tag is hidden or not
   * @return {Boolean} A boolean indicating the tag’s state
   */
  isHidden() {
    return this.popupElement.style.display === 'none'
  }

  /**
   * Show the tag
   * @return {Taggd.Tag} Current Taggd.Tag instance
   */
  show() {
    const isCanceled = !this.emit('taggd.tag.show', this)

    if (!isCanceled) {
      this.popupElement.style.display = ''
      this.emit('taggd.tag.shown', this)
    }

    return this
  }

  /**
   * Hide the tag
   * @return {Taggd.Tag} Current Taggd.Tag instance
   */
  hide() {
    const isCanceled = !this.emit('taggd.tag.hide', this)

    if (!isCanceled) {
      this.popupElement.style.display = 'none'
      this.emit('taggd.tag.hidden', this)
    }

    return this
  }

  /**
   * Click the tag
   * @return {Taggd.Tag} Current Taggd.Tag instance
   */
  click() {
    this.emit('taggd.tag.click', this)

    return this
  }

  /**
   * Set the tag’s text
   * @param {String|Function} text - The tag’s content
   * @return {Taggd.Tag} Current Taggd.Tag instance
   */
  setText(text: string | Function) {
    if (!isString(text) && !isFunction(text)) {
      throw new TypeError(TypeErrorMessage.getMessage(text, 'a string or a function'))
    }

    const isCanceled = !this.emit('taggd.tag.change', this)

    if (!isCanceled) {
      if (isFunction(text)) {
        this.text = text(this)
      } else {
        this.text = text
      }

      this.popupElement.innerHTML = this.text

      this.emit('taggd.tag.changed', this)
    }

    return this
  }

  /**
   * Set the tag’s position
   * @param {Number} x - The tag’s x-coordinate
   * @param {Number} y - The tag’s y-coordinate
   * @return {Taggd.Tag} Current Taggd.Tag instance
   */
  setPosition(x = this.position.x, y = this.position.y) {
    if (!isNumber(x)) {
      throw new TypeError(TypeErrorMessage.getFloatMessage(x))
    }
    if (!isNumber(y)) {
      throw new TypeError(TypeErrorMessage.getFloatMessage(y))
    }

    const isCanceled = !this.emit('taggd.tag.change', this)

    if (!isCanceled) {
      const { taggd, position, wrapperElement } = this
      const { left, top, ratio } = taggd.imageData

      position.left = ratio * position.x + left
      position.top = ratio * position.y + top

      setStyle(wrapperElement, {
        left: position.left,
        top: position.top,
      })

      this.emit('taggd.tag.changed', this)
    }

    return this
  }

  /**
   * Set the tag button’s attributes
   * @param {Object} atttributes = {} - The attributes to set
   * @return {Taggd.Tag} Current Taggd.Tag instance
   */
  setButtonAttributes(attributes: Record<string, string> = {}) {
    if (!isObject(attributes)) {
      throw new TypeError(TypeErrorMessage.getObjectMessage(attributes))
    }

    const isCanceled = !this.emit('taggd.tag.change', this)

    if (!isCanceled) {
      Tag.setElementAttributes(this.buttonElement, attributes)
      this.emit('taggd.tag.changed', this)
    }

    return this
  }

  /**
   * Set the tag popup’s attributes
   * @param {Object} atttributes = {} - The attributes to set
   * @return {Taggd.Tag} Current Taggd.Tag instance
   */
  setPopupAttributes(attributes: Record<string, string> = {}) {
    if (!isObject(attributes)) {
      throw new TypeError(TypeErrorMessage.getObjectMessage(attributes))
    }

    const isCanceled = !this.emit('taggd.tag.change', this)

    if (!isCanceled) {
      Tag.setElementAttributes(this.popupElement, attributes)
      this.emit('taggd.tag.changed', this)
    }

    return this
  }

  /**
   * Enable editor mode
   * @return {Taggd.Tag} Current Taggd.Tag instance
   */
  enableEditorMode() {
    const isCanceled = !this.emit('taggd.tag.editor.enable', this)

    if (!isCanceled) {
      this.buttonElement.classList.add('taggd--grab')

      this.buttonElement.addEventListener('mousedown', (this.tagDownHander = this.tagDownHander.bind(this)))
      document.addEventListener('mousemove', (this.tagMoveHander = this.tagMoveHander.bind(this)))
      document.addEventListener('mouseup', (this.tagUpHander = this.tagUpHander.bind(this)))
    }

    return this
  }

  /**
   * Disable editor mode
   * @return {Taggd.Tag} Current Taggd.Tag instance
   */
  disableEditorMode() {
    const isCanceled = !this.emit('taggd.tag.editor.disable', this)

    if (!isCanceled) {
      this.buttonElement.classList.remove('taggd--grab')

      this.buttonElement.removeEventListener('mousedown', this.tagDownHander)
      document.removeEventListener('mousemove', this.tagMoveHander)
      document.removeEventListener('mouseup', this.tagUpHander)
    }

    return this
  }

  /**
   * Get a Taggd.createFromObject-compatible object
   * @return {Object} A object for JSON
   */
  toJSON() {
    function getAttributes(rawAttributes: any) {
      const attributes = {}

      Array.prototype.forEach.call(rawAttributes, (attribute) => {
        if (attribute.name === 'class' || attribute.name === 'style') {
          return
        }
        attributes[attribute.name] = attribute.value
      })

      return attributes
    }

    return {
      position: this.position,
      text: this.text,
      buttonAttributes: getAttributes(this.buttonElement.attributes),
      popupAttributes: getAttributes(this.popupElement.attributes),
    }
  }

  /**
   * Set element attributes
   * @param {DomNode} element - The element the attributes should be set to
   * @param {Object} [attributes = {}] - A map of attributes to set
   * @return {DomNode} The original element
   */
  static setElementAttributes(element: Element, attributes: Record<string, string> = {}) {
    if (!isObject(attributes)) {
      throw new TypeError(TypeErrorMessage.getObjectMessage(attributes))
    }

    Object.entries(attributes).forEach((attribute) => {
      const [attributeName, attributeValue] = attribute

      if (attributeName === 'class' && element.getAttribute(attributeName)) {
        const classValue = `${element.getAttribute(attributeName)} ${attributeValue}`
        element.setAttribute(attributeName, classValue)
        return
      }

      element.setAttribute(attributeName, attributeValue)
    })

    return element
  }

  /**
   * Create a tag from object
   * @param {Object} object - The object containing all information
   * @return {Tag} The created Tag instance
   */
  static createFromObject(object: {
    position: Pick<IPosition, 'x' | 'y'>
    text?: string | Function
    buttonAttributes?: Record<string, string>
    popupAttributes?: Record<string, string>
  }) {
    return new Tag(
      // constructor
      object.position,
      object.text,
      object.buttonAttributes,
      object.popupAttributes
    )
  }

  /**
   * tag mousedown hander
   * @param {MouseEvent} event
   * @return {Taggd.Tag} Current Taggd.Tag instance
   */
  private tagDownHander(event: MouseEvent) {
    event.preventDefault()

    addClass(this.buttonElement, 'taggd--grabbing')

    this.isMoved = false
    this.isMoveing = true
    this.pointer = {
      ...getPointer(event),
      elX: this.position.left,
      elY: this.position.top,
    }

    this.emit('taggd.tag.editor.movedown', this)

    return this
  }

  /**
   * tag mousemove hander
   * @param {MouseEvent} event
   * @return {Taggd.Tag} Current Taggd.Tag instance
   */
  private tagMoveHander(event: MouseEvent) {
    if (!this.isMoveing) {
      return
    }

    event.preventDefault()

    const { taggd, position, pointer } = this
    const { left, top, ratio, naturalWidth, naturalHeight } = taggd.imageData
    const { endX, endY } = getPointer(event)

    // update tag x & y
    const x = (pointer.elX + (endX - pointer.startX) - left) / ratio
    const y = (pointer.elY + (endY - pointer.startY) - top) / ratio

    position.x = Math.min(Math.max(0, x), naturalWidth)
    position.y = Math.min(Math.max(0, y), naturalHeight)

    this.isMoved = true
    this.setPosition()
    this.emit('taggd.tag.editor.move', this)

    return this
  }

  /**
   * tag mouseup hander
   * @param {MouseEvent} event
   * @return {Taggd.Tag} Current Taggd.Tag instance
   */
  private tagUpHander(event: MouseEvent) {
    if (!this.isMoveing) {
      return
    }

    event.preventDefault()

    removeClass(this.buttonElement, 'taggd--grabbing')

    this.isMoveing = false
    if (this.isMoved) {
      this.emit('taggd.tag.editor.moveup', this)
    }

    return this
  }
}

export default Tag
