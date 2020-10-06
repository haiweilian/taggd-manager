const EVENT_WILDCARD = '*';

class EventEmitter {
  constructor() {
    this.handlers = {};
  }

  onAnything(handler) {
    this.on(EVENT_WILDCARD, handler);
  }

  on(eventName, handler) {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = [];
    }

    this.handlers[eventName].push(handler);
  }

  off(eventName, handler) {
    if (!this.handlers[eventName]) return

    const handlerIndex = this.handlers[eventName].indexOf(handler);

    if (handlerIndex >= 0) {
      this.handlers[eventName].splice(handlerIndex, 1);
    }
  }

  once(eventName, handler) {
    this.on(eventName, (...args) => {
      handler(...args);
      this.off(eventName, handler);
    });
  }

  emit(eventName, ...args) {
    let isCanceled = false;

    if (this.handlers[EVENT_WILDCARD]) {
      this.handlers[EVENT_WILDCARD].forEach((eventHandler) => {
        const returnValue = eventHandler(eventName, ...args);
        isCanceled = (returnValue !== undefined && !returnValue) || isCanceled;
      });
    }

    if (this.handlers[eventName]) {
      this.handlers[eventName].forEach((eventHandler) => {
        const returnValue = eventHandler(...args);
        isCanceled = (returnValue !== undefined && !returnValue) || isCanceled;
      });
    }

    return !isCanceled
  }
}

const TypeErrorMessage = {
  /**
   * Get the TypeError message
   * @param {Object} object - The tested object
   * @param {String} expectedType - A string describing the expected type
   * @return {String} The error message
   */
  getMessage: (object, expectedType) => `${object} should be ${expectedType}`,

  /**
   * Get the TypeError Array message
   * @param {Object} object - The tested object
   * @param {String} expectedType - The expected type of all array items
   * @return {String} The error message
   */
  getArrayMessage: (object, expectedType) => {
    if (expectedType) {
      return TypeErrorMessage.getTypeErrorMessage(object, `an array of ${expectedType}`)
    }
    return TypeErrorMessage.getTypeErrorMessage(object, 'an array')
  },

  /**
   * Get the TypeError Function message
   * @param {Object} object - The tested object
   * @return {String} The error message
   */
  getFunctionMessage: (object) => TypeErrorMessage.getTypeErrorMessage(object, 'a function'),

  /**
   * Get the TypeError Integer message
   * @param {Object} object - The tested object
   * @return {String} The error message
   */
  getIntegerMessage: (object) => TypeErrorMessage.getTypeErrorMessage(object, 'an integer'),

  /**
   * Get the TypeError Float message
   * @param {Object} object - The tested object
   * @return {String} The error message
   */
  getFloatMessage: (object) => TypeErrorMessage.getTypeErrorMessage(object, 'a floating number'),

  /**
   * Get the TypeError Object message
   * @param {Object} object - The tested object
   * @return {String} The error message
   */
  getObjectMessage: (object) => TypeErrorMessage.getTypeErrorMessage(object, 'an object'),

  /**
   * Get the TypeError Taggd.Tag message
   * @param {Object} object - The tested object
   * @return {String} The error message
   */
  getTagMessage: (object) => TypeErrorMessage.getTypeErrorMessage(object, 'a tag'),

  /**
   * Get TypeError message
   * @param {Object} object - The tested object
   * @param {String} message - The type message
   * @return {String} The error message
   */
  getTypeErrorMessage: (object, message) => `${object} is not a ${message}`,
};

/**
 * Check wheter an object is an instance of type
 * @param {Object} object - The object to test
 * @param {Object} type - The class to test
 * @return {Boolean}
 */
function ofInstance(object, type) {
  return object instanceof type
}

/**
 * Check if the given value is a string.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a string, else `false`.
 */
function isString(value) {
  return typeof value === 'string'
}

/**
 * Check if the given value is a number.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a number, else `false`.
 */
function isNumber(value) {
  return typeof value === 'number' && !Number.isNaN(value)
}

/**
 * Check if the given value is an object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an object, else `false`.
 */
function isObject(value) {
  return typeof value === 'object' && value !== null
}

/**
 * Check if the given value is a function.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a function, else `false`.
 */
function isFunction(value) {
  return typeof value === 'function'
}

/**
 * Get the offset base on the document.
 * @param {Element} element - The target element.
 * @returns {Object} The offset data.
 */
function getOffset(element) {
  const box = element.getBoundingClientRect();

  return {
    left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: box.top + (window.pageYOffset - document.documentElement.clientTop),
  }
}

class Tag extends EventEmitter {
  /**
   * Create a new Tag instance
   * @param {{ x: Number, y: Number }} position - The tag’s coordinates
   * @param {String|Function} text - The tag’s content
   * @param {Object} [buttonAttributes = {}] - The button’s attributes
   * @param {Object} [popupAttributes = {}] - The popup’s attributes
   */
  constructor(position, text, buttonAttributes = {}, popupAttributes = {}) {
    if (!isObject(position) || Array.isArray(position)) {
      throw new TypeError(TypeErrorMessage.getObjectMessage(position))
    } else if (!('x' in position) || !('y' in position)) {
      throw new Error(`${position} should have x and y property`)
    }

    super();

    this.wrapperElement = document.createElement('div');
    this.wrapperElement.classList.add('taggd__wrapper');

    this.buttonElement = document.createElement('button');
    this.buttonElement.classList.add('taggd__button');

    this.popupElement = document.createElement('span');
    this.popupElement.classList.add('taggd__popup');

    this.wrapperElement.appendChild(this.buttonElement);
    this.wrapperElement.appendChild(this.popupElement);

    this.text = undefined;
    this.isControlsEnabled = false;

    this.setButtonAttributes(buttonAttributes);
    this.setPopupAttributes(popupAttributes);
    this.setPosition(position.x, position.y);
    this.setText(text);

    this.hide();
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
   * Test whether the tag is hidden or not
   * @return {Boolean} A boolean indicating the tag’s state
   */
  isHidden() {
    return this.popupElement.style.display === 'none'
  }

  /**
   * Show the tag
   * @return {Taggd.Tag} Current Tag
   */
  show() {
    const isCanceled = !this.emit('taggd.tag.show', this);

    if (!isCanceled) {
      this.popupElement.style.display = '';
      this.emit('taggd.tag.shown', this);
    }

    return this
  }

  /**
   * Hide the tag
   * @return {Taggd.Tag} Current Tag
   */
  hide() {
    const isCanceled = !this.emit('taggd.tag.hide', this);

    if (!isCanceled) {
      this.popupElement.style.display = 'none';
      this.emit('taggd.tag.hidden', this);
    }

    return this
  }

  /**
   * Set the tag’s text
   * @param {String|Function} text - The tag’s content
   * @return {Taggd.Tag} Current Tag
   */
  setText(text) {
    if (!isString(text) && !isFunction(text)) {
      throw new TypeError(TypeErrorMessage.getMessage(text, 'a string or a function'))
    }

    const isCanceled = !this.emit('taggd.tag.change', this);

    if (!isCanceled) {
      if (isFunction(text)) {
        this.text = text(this);
      } else {
        this.text = text;
      }

      if (!this.isControlsEnabled) {
        this.popupElement.innerHTML = this.text;
      } else {
        this.popupElement.innerHTML = this.text;
      }

      this.emit('taggd.tag.changed', this);
    }

    return this
  }

  /**
   * Set the tag’s position
   * @param {Number} x - The tag’s x-coordinate
   * @param {Number} y - The tag’s y-coordinate
   * @return {Taggd.Tag} Current Tag
   */
  setPosition(x, y) {
    if (!isNumber(x)) {
      throw new TypeError(TypeErrorMessage.getFloatMessage(x))
    }
    if (!isNumber(y)) {
      throw new TypeError(TypeErrorMessage.getFloatMessage(y))
    }

    const isCanceled = !this.emit('taggd.tag.change', this);

    if (!isCanceled) {
      const positionStyle = Tag.getPositionStyle(x, y);

      this.wrapperElement.style.left = positionStyle.left;
      this.wrapperElement.style.top = positionStyle.top;

      this.emit('taggd.tag.changed', this);
    }

    return this
  }

  /**
   * Set the tag button’s attributes
   * @param {Object} atttributes = {} - The attributes to set
   * @return {Taggd.Tag} Current tag
   */
  setButtonAttributes(attributes = {}) {
    if (!isObject(attributes) || Array.isArray(attributes)) {
      throw new TypeError(TypeErrorMessage.getObjectMessage(attributes))
    }

    const isCanceled = !this.emit('taggd.tag.change', this);

    if (!isCanceled) {
      Tag.setElementAttributes(this.buttonElement, attributes);
      this.emit('taggd.tag.changed', this);
    }

    return this
  }

  /**
   * Set the tag popup’s attributes
   * @param {Object} atttributes = {} - The attributes to set
   * @return {Taggd.Tag} Current tag
   */
  setPopupAttributes(attributes = {}) {
    if (!isObject(attributes) || Array.isArray(attributes)) {
      throw new TypeError(TypeErrorMessage.getObjectMessage(attributes))
    }

    const isCanceled = !this.emit('taggd.tag.change', this);

    if (!isCanceled) {
      Tag.setElementAttributes(this.popupElement, attributes);
      this.emit('taggd.tag.changed', this);
    }

    return this
  }

  /**
   * Enables the tag controls
   * @return {Taggd.Tag} Current tag
   */
  enableControls() {
    this.isControlsEnabled = true;
    this.setText(this.text);
    return this
  }

  /**
   * Disabled the tag controls
   * @return {Taggd.Tag} Current tag
   */
  disableControls() {
    this.isControlsEnabled = false;
    this.setText(this.text);
    return this
  }

  /**
   * Get a Taggd.createFromObject-compatible object
   * @return {Object} A object for JSON
   */
  toJSON() {
    function getAttributes(rawAttributes) {
      const attributes = {};

      Array.prototype.forEach.call(rawAttributes, (attribute) => {
        if (attribute.name === 'class' || attribute.name === 'style') {
          return
        }

        attributes[attribute.name] = attribute.value;
      });

      return attributes
    }

    return {
      position: {
        x: parseFloat(this.wrapperElement.style.left) / 100,
        y: parseFloat(this.wrapperElement.style.top) / 100,
      },
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
  static setElementAttributes(element, attributes = {}) {
    if (!isObject(attributes) || Array.isArray(attributes)) {
      throw new TypeError(TypeErrorMessage.getObjectMessage(attributes))
    }

    Object.entries(attributes).forEach((attribute) => {
      const [attributeName, attributeValue] = attribute;

      if (attributeName === 'class' && element.getAttribute(attributeName)) {
        const classValue = `${element.getAttribute(attributeName)} ${attributeValue}`;
        element.setAttribute(attributeName, classValue);
        return
      }

      element.setAttribute(attributeName, attributeValue);
    });

    return element
  }

  /**
   * Get the position style
   * @param {Number} x - The tag’s x-coordinate
   * @param {Number} y - The tag’s y-coordinate
   * @return {Object} The style
   */
  static getPositionStyle(x, y) {
    if (!isNumber(x)) {
      throw new TypeError(TypeErrorMessage.getFloatMessage(x))
    }
    if (!isNumber(y)) {
      throw new TypeError(TypeErrorMessage.getFloatMessage(y))
    }

    return {
      left: `${x * 100}%`,
      top: `${y * 100}%`,
    }
  }

  /**
   * Create a tag from object
   * @param {Object} object - The object containing all information
   * @return {Tag} The created Tag instance
   */
  static createFromObject(object) {
    return new Tag(object.position, object.text, object.buttonAttributes, object.popupAttributes)
  }
}

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

    super();

    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('taggd');

    image.classList.add('taggd__image');
    image.parentElement.insertBefore(this.wrapper, image);
    image.parentElement.removeChild(image);

    this.wrapper.appendChild(image);

    this.image = image;
    this.options = {};
    this.tags = [];

    this.imageClickHandler = this.imageClickHandler.bind(this);

    this.setOptions(options);
    this.setTags(data);
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
    if (!isObject(options) || Array.isArray(options)) {
      throw new TypeError(TypeErrorMessage.getObjectMessage(options))
    }

    this.options = Object.assign(this.options, Taggd.DEFAULT_OPTIONS, options);
    return this
  }

  /**
   * Set taggd options
   * @param {Object} options - The options to set
   * @return {Taggd} Current Taggd instance
   */
  imageClickHandler(e) {
    const offset = getOffset(this.image);
    const position = {
      x: (e.pageX - offset.left) / this.image.width,
      y: (e.pageY - offset.top) / this.image.height,
    };
    this.emit('taggd.image.click', this, position);
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

    const isCanceled = !this.emit('taggd.tag.add', this, tag);
    let hideTimeout;

    /**
     * Test whether the event’s target is the button Element
     * @param {Event} e - The event object
     * @return {Boolean} Whether the event’s target is the button element
     */
    const isTargetButton = (e) => e.target === tag.buttonElement;
    const clearTimeout = () => {
      if (hideTimeout) {
        window.clearTimeout(hideTimeout);
        hideTimeout = undefined;
      }
    };

    if (!isCanceled) {
      // Add events to show/hide tags
      // If show and hide event are identical, set show/hide mode to toggle
      if (this.options.show === this.options.hide) {
        tag.buttonElement.addEventListener(this.options.show, (e) => {
          if (!isTargetButton(e)) return

          clearTimeout();

          if (tag.isHidden()) {
            tag.show();
          } else {
            tag.hide();
          }
        });
      } else {
        tag.buttonElement.addEventListener(this.options.show, (e) => {
          if (!isTargetButton(e)) return

          clearTimeout();
          tag.show();
        });
        tag.buttonElement.addEventListener(this.options.hide, (e) => {
          if (!isTargetButton(e)) return

          clearTimeout();

          // If the use moves the mouse between the button and popup, a delay should give some time
          // to do just that. This only applies to the mouseleave event.
          if (this.options.hide === 'mouseleave') {
            hideTimeout = window.setTimeout(() => tag.hide(), this.options.hideDelay);
          } else {
            tag.hide();
          }
        });

        // Force visibility if user interacts with the popup element
        if (this.options.hide === 'mouseleave') {
          tag.popupElement.addEventListener('mouseover', () => clearTimeout());
          tag.popupElement.addEventListener('mouseleave', () => tag.hide());
        }
      }

      tag.once('taggd.tag.delete', () => {
        const tagIndex = this.tags.indexOf(tag);

        if (tagIndex >= 0) {
          this.deleteTag(tagIndex);
        }
      });

      // Route all tag events through taggd instance
      tag.onAnything((eventName, ...args) => {
        this.emit(eventName, this, ...args);
      });

      this.tags.push(tag);
      this.wrapper.appendChild(tag.wrapperElement);

      this.emit('taggd.tag.added', this, tag);
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

    const tag = this.tags[index];
    const isCanceled = !this.emit('taggd.tag.delete', this, tag);

    if (!isCanceled) {
      this.wrapper.removeChild(tag.wrapperElement);
      this.tags.splice(index, 1);

      this.emit('taggd.tag.deleted', this, tag);
    }

    return this
  }

  /**
   * Set all tags
   * @param {Taggd.Tag[]} tags An array of tags
   * @return {Taggd} Current Taggd instance
   */
  setTags(tags) {
    this.deleteTags();
    this.addTags(tags);
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

    tags.forEach((tag) => this.addTag(tag));
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
      this.deleteTag(0);
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

    this.tags = this.tags.map(callback);
    return this
  }

  /**
   * Clean up memory
   * @return {Taggd} Current Taggd instance
   */
  destroy() {
    const isCanceled = !this.emit('taggd.destroy', this);

    if (!isCanceled) {
      this.deleteTags();
    }

    return this
  }

  /**
   * Enable editor mode
   * @return {Taggd} Current Taggd instance
   */
  enableEditorMode() {
    const isCanceled = !this.emit('taggd.editor.enable', this);

    if (!isCanceled) {
      this.image.addEventListener(this.options.click, this.imageClickHandler);
      this.getTags().forEach((tag) => tag.enableControls());
    }

    return this
  }

  /**
   * Disable editor mode
   * @return {Taggd} Current Taggd instance
   */
  disableEditorMode() {
    const isCanceled = !this.emit('taggd.editor.disable', this);

    if (!isCanceled) {
      this.image.removeEventListener(this.options.click, this.imageClickHandler);
      this.getTags().forEach((tag) => tag.disableControls());
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
  click: 'dblclick',
  hideDelay: 500,
};

export { Tag, Taggd };
