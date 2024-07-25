(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Taggd = factory());
})(this, (function () { 'use strict';

    const EVENT_WILDCARD = '*';
    class EventEmitter {
        handlers = {};
        constructor() {
            this.handlers = {};
        }
        /**
         * Subscribe to all event.
         * @param {Function} handler - The handler to execute.
         */
        onAnything(handler) {
            this.on(EVENT_WILDCARD, handler);
        }
        /**
         * Subscribe to an event.
         * @param {String} eventName - The event to subscribe to.
         * @param {Function} handler - The handler to execute.
         */
        on(eventName, handler) {
            if (!this.handlers[eventName]) {
                this.handlers[eventName] = [];
            }
            this.handlers[eventName].push(handler);
        }
        /**
         * Unsubscribe from an event.
         * @param {String} eventName - The event to unsubscribe from.
         * @param {Function} handler - The handler that was used to subscribe.
         */
        off(eventName, handler) {
            if (!this.handlers[eventName])
                return;
            const handlerIndex = this.handlers[eventName].indexOf(handler);
            if (handlerIndex >= 0) {
                this.handlers[eventName].splice(handlerIndex, 1);
            }
        }
        /**
         * Subscribe to an event and unsubscribe once triggered.
         * @param {String} eventName - The event to subscribe to.
         * @param {Function} handler - The handler to execute.
         */
        once(eventName, handler) {
            this.on(eventName, (...args) => {
                handler(...args);
                this.off(eventName, handler);
            });
        }
        /**
         * Publish to an event.
         * @param {String} eventName - The event to Publish to.
         * @param {Function} handler - The handler to execute.
         * @return {Boolean} The is canceled.
         */
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
            return !isCanceled;
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
                return TypeErrorMessage.getTypeErrorMessage(object, `an array of ${expectedType}`);
            }
            return TypeErrorMessage.getTypeErrorMessage(object, 'an array');
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

    const REGEXP_SUFFIX = /^(?:width|height|left|top|marginLeft|marginTop)$/;
    /**
     * Check wheter an object is an instance of type
     * @param {Object} object - The object to test
     * @param {Object} type - The class to test
     * @return {Boolean} Returns `true` if the given value is an instance of type, else `false`.
     */
    function ofInstance(object, type) {
        return object instanceof type;
    }
    /**
     * Check if the given value is a string.
     * @param {*} value - The value to check.
     * @return {Boolean} Returns `true` if the given value is a string, else `false`.
     */
    function isString(value) {
        return typeof value === 'string';
    }
    /**
     * Check if the given value is a number.
     * @param {*} value - The value to check.
     * @return {Boolean} Returns `true` if the given value is a number, else `false`.
     */
    function isNumber(value) {
        return typeof value === 'number' && !Number.isNaN(value);
    }
    /**
     * Check if the given value is an object.
     * @param {*} value - The value to check.
     * @return {Boolean} Returns `true` if the given value is an object, else `false`.
     */
    function isObject(value) {
        return typeof value === 'object' && value !== null;
    }
    /**
     * Check if the given value is a function.
     * @param {*} value - The value to check.
     * @return {Boolean} Returns `true` if the given value is a function, else `false`.
     */
    function isFunction(value) {
        return typeof value === 'function';
    }
    /**
     * Iterate the given data.
     * @param {*} data - The data to iterate.
     * @param {Function} callback - The process function for each element.
     * @return {*} The original data.
     */
    function forEach(data, callback) {
        if (data && isFunction(callback)) {
            if (Array.isArray(data) || isNumber(data.length) /* array-like */) {
                const { length } = data;
                let i;
                for (i = 0; i < length; i += 1) {
                    if (callback.call(data, data[i], i, data) === false) {
                        break;
                    }
                }
            }
            else if (isObject(data)) {
                Object.keys(data).forEach((key) => {
                    callback.call(data, data[key], key, data);
                });
            }
        }
        return data;
    }
    /**
     * Extend the given object.
     * @param {*} obj - The object to be extended.
     * @param {*} args - The rest objects which will be merged to the first object.
     * @return {Object} The extended object.
     */
    function assign(obj, ...args) {
        if (isObject(obj) && args.length > 0) {
            args.forEach((arg) => {
                if (isObject(arg)) {
                    Object.keys(arg).forEach((key) => {
                        obj[key] = arg[key];
                    });
                }
            });
        }
        return obj;
    }
    /**
     * Apply styles to the given element.
     * @param {HTMLElement} element - The target element.
     * @param {CSSStyleDeclaration} styles - The styles for applying.
     */
    function setStyle(element, styles) {
        forEach(styles, (value, property) => {
            if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
                value += 'px';
            }
            element.style[property] = value;
        });
    }
    /**
     * Add classes to the given element.
     * @param {HTMLElement} element - The target element.
     * @param {String} value - The classes to be added.
     */
    function addClass(element, value) {
        if (!element || !value) {
            return;
        }
        if (element.classList) {
            element.classList.add(value);
            return;
        }
        const className = element.className.trim();
        if (!className) {
            element.className = value;
        }
        else if (className.indexOf(value) < 0) {
            element.className = `${className} ${value}`;
        }
    }
    /**
     * Remove classes from the given element.
     * @param {HTMLElement} element - The target element.
     * @param {String} value - The classes to be removed.
     */
    function removeClass(element, value) {
        if (!element || !value) {
            return;
        }
        if (element.classList) {
            element.classList.remove(value);
            return;
        }
        if (element.className.indexOf(value) >= 0) {
            element.className = element.className.replace(value, '');
        }
    }
    /**
     * Get the offset base on the document.
     * @param {HTMLElement} element - The target element.
     * @return {Object} The offset data.
     */
    function getOffset(element) {
        const box = element.getBoundingClientRect();
        return {
            top: box.top + (window.scrollY - document.documentElement.clientTop),
            left: box.left + (window.scrollX - document.documentElement.clientLeft),
        };
    }
    /**
     * Get a pointer from an event object.
     * @param {MouseEvent} event - The target event object.
     * @return {Object} The result pointer contains start and/or end point coordinates.
     */
    function getPointer(event) {
        return {
            elX: event.pageX,
            elY: event.pageY,
            endX: event.pageX,
            endY: event.pageY,
            startX: event.pageX,
            startY: event.pageY,
        };
    }
    /**
     * Get the rolling ratio.
     * @param {WheelEvent} event - The target event object.
     * @param {Number} zoomRatio - The zoom ratio.
     * @return {Number} The result ratio.
     */
    function getWheelRatio(event, zoomRatio) {
        let delta = 1;
        let ratio = zoomRatio;
        if (event.deltaY) {
            delta = event.deltaY > 0 ? 1 : -1;
        }
        else if (event.detail) {
            delta = event.detail > 0 ? 1 : -1;
        }
        ratio *= -delta;
        if (ratio < 0) {
            ratio = 1 / (1 - ratio);
        }
        else {
            ratio = 1 + ratio;
        }
        return ratio;
    }

    class Tag extends EventEmitter {
        taggd;
        wrapperElement;
        popupElement;
        buttonElement;
        text;
        position;
        pointer;
        isMoved;
        isMoveing;
        /**
         * Create a new Tag instance
         * @param {{ x: Number, y: Number }} position - The tag’s coordinates
         * @param {String|Function} text - The tag’s content
         * @param {Object} [buttonAttributes = {}] - The button’s attributes
         * @param {Object} [popupAttributes = {}] - The popup’s attributes
         */
        constructor(position, text = '', buttonAttributes = {}, popupAttributes = {}) {
            if (!isObject(position)) {
                throw new TypeError(TypeErrorMessage.getObjectMessage(position));
            }
            else if (!('x' in position) || !('y' in position)) {
                throw new Error(`${position} should have x and y property`);
            }
            super();
            this.wrapperElement = document.createElement('div');
            this.wrapperElement.classList.add('taggd__wrapper');
            this.buttonElement = document.createElement('span');
            this.buttonElement.classList.add('taggd__button');
            this.popupElement = document.createElement('span');
            this.popupElement.classList.add('taggd__popup');
            this.wrapperElement.appendChild(this.buttonElement);
            this.wrapperElement.appendChild(this.popupElement);
            this.text = '';
            this.position = position;
            this.pointer = {};
            this.setButtonAttributes(buttonAttributes);
            this.setPopupAttributes(popupAttributes);
            this.setText(text);
            this.hide();
        }
        /**
         * Subscribe to an event.
         * @param {String} eventName - The event to subscribe to.
         * @param {Function} handler - The handler to execute.
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        on(eventName, handler) {
            return super.on(eventName, handler);
        }
        /**
         * Unsubscribe from an event.
         * @param {String} eventName - The event to unsubscribe from.
         * @param {Function} handler - The handler that was used to subscribe.
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        off(eventName, handler) {
            return super.off(eventName, handler);
        }
        /**
         * Subscribe to an event and unsubscribe once triggered.
         * @param {String} eventName - The event to subscribe to.
         * @param {Function} handler - The handler to execute.
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        once(eventName, handler) {
            return super.once(eventName, handler);
        }
        /**
         * Publish to an event.
         * @param {String} eventName - The event to Publish to.
         * @param {Function} handler - The handler to execute.
         * @return {Boolean} The is canceled.
         */
        emit(eventName, ...args) {
            return super.emit(eventName, ...args);
        }
        /**
         * Test whether the tag is hidden or not
         * @return {Boolean} A boolean indicating the tag’s state
         */
        isHidden() {
            return this.popupElement.style.display === 'none';
        }
        /**
         * Show the tag
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        show() {
            const isCanceled = !this.emit('taggd.tag.show', this);
            if (!isCanceled) {
                this.popupElement.style.display = '';
                this.emit('taggd.tag.shown', this);
            }
            return this;
        }
        /**
         * Hide the tag
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        hide() {
            const isCanceled = !this.emit('taggd.tag.hide', this);
            if (!isCanceled) {
                this.popupElement.style.display = 'none';
                this.emit('taggd.tag.hidden', this);
            }
            return this;
        }
        /**
         * Click the tag
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        click() {
            this.emit('taggd.tag.click', this);
            return this;
        }
        /**
         * Set the tag’s text
         * @param {String|Function} text - The tag’s content
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        setText(text) {
            if (!isString(text) && !isFunction(text)) {
                throw new TypeError(TypeErrorMessage.getMessage(text, 'a string or a function'));
            }
            const isCanceled = !this.emit('taggd.tag.change', this);
            if (!isCanceled) {
                if (isFunction(text)) {
                    this.text = text(this);
                }
                else {
                    this.text = text;
                }
                this.popupElement.innerHTML = this.text;
                this.emit('taggd.tag.changed', this);
            }
            return this;
        }
        /**
         * Set the tag’s position
         * @param {Number} x - The tag’s x-coordinate
         * @param {Number} y - The tag’s y-coordinate
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        setPosition(x = this.position.x, y = this.position.y) {
            if (!isNumber(x)) {
                throw new TypeError(TypeErrorMessage.getFloatMessage(x));
            }
            if (!isNumber(y)) {
                throw new TypeError(TypeErrorMessage.getFloatMessage(y));
            }
            const isCanceled = !this.emit('taggd.tag.change', this);
            if (!isCanceled) {
                const { taggd, position, wrapperElement } = this;
                const { left, top, ratio } = taggd.imageData;
                position.left = ratio * position.x + left;
                position.top = ratio * position.y + top;
                setStyle(wrapperElement, {
                    left: position.left,
                    top: position.top,
                });
                this.emit('taggd.tag.changed', this);
            }
            return this;
        }
        /**
         * Set the tag button’s attributes
         * @param {Object} atttributes = {} - The attributes to set
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        setButtonAttributes(attributes = {}) {
            if (!isObject(attributes)) {
                throw new TypeError(TypeErrorMessage.getObjectMessage(attributes));
            }
            const isCanceled = !this.emit('taggd.tag.change', this);
            if (!isCanceled) {
                Tag.setElementAttributes(this.buttonElement, attributes);
                this.emit('taggd.tag.changed', this);
            }
            return this;
        }
        /**
         * Set the tag popup’s attributes
         * @param {Object} atttributes = {} - The attributes to set
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        setPopupAttributes(attributes = {}) {
            if (!isObject(attributes)) {
                throw new TypeError(TypeErrorMessage.getObjectMessage(attributes));
            }
            const isCanceled = !this.emit('taggd.tag.change', this);
            if (!isCanceled) {
                Tag.setElementAttributes(this.popupElement, attributes);
                this.emit('taggd.tag.changed', this);
            }
            return this;
        }
        /**
         * Enable editor mode
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        enableEditorMode() {
            const isCanceled = !this.emit('taggd.tag.editor.enable', this);
            if (!isCanceled) {
                this.buttonElement.classList.add('taggd--grab');
                this.buttonElement.addEventListener('mousedown', (this.tagDownHander = this.tagDownHander.bind(this)));
                document.addEventListener('mousemove', (this.tagMoveHander = this.tagMoveHander.bind(this)));
                document.addEventListener('mouseup', (this.tagUpHander = this.tagUpHander.bind(this)));
            }
            return this;
        }
        /**
         * Disable editor mode
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        disableEditorMode() {
            const isCanceled = !this.emit('taggd.tag.editor.disable', this);
            if (!isCanceled) {
                this.buttonElement.classList.remove('taggd--grab');
                this.buttonElement.removeEventListener('mousedown', this.tagDownHander);
                document.removeEventListener('mousemove', this.tagMoveHander);
                document.removeEventListener('mouseup', this.tagUpHander);
            }
            return this;
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
                        return;
                    }
                    attributes[attribute.name] = attribute.value;
                });
                return attributes;
            }
            return {
                position: this.position,
                text: this.text,
                buttonAttributes: getAttributes(this.buttonElement.attributes),
                popupAttributes: getAttributes(this.popupElement.attributes),
            };
        }
        /**
         * Set element attributes
         * @param {DomNode} element - The element the attributes should be set to
         * @param {Object} [attributes = {}] - A map of attributes to set
         * @return {DomNode} The original element
         */
        static setElementAttributes(element, attributes = {}) {
            if (!isObject(attributes)) {
                throw new TypeError(TypeErrorMessage.getObjectMessage(attributes));
            }
            Object.entries(attributes).forEach((attribute) => {
                const [attributeName, attributeValue] = attribute;
                if (attributeName === 'class' && element.getAttribute(attributeName)) {
                    const classValue = `${element.getAttribute(attributeName)} ${attributeValue}`;
                    element.setAttribute(attributeName, classValue);
                    return;
                }
                element.setAttribute(attributeName, attributeValue);
            });
            return element;
        }
        /**
         * Create a tag from object
         * @param {Object} object - The object containing all information
         * @return {Tag} The created Tag instance
         */
        static createFromObject(object) {
            return new Tag(
            // constructor
            object.position, object.text, object.buttonAttributes, object.popupAttributes);
        }
        /**
         * tag mousedown hander
         * @param {MouseEvent} event
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        tagDownHander(event) {
            event.preventDefault();
            addClass(this.buttonElement, 'taggd--grabbing');
            this.isMoved = false;
            this.isMoveing = true;
            this.pointer = {
                ...getPointer(event),
                elX: this.position.left,
                elY: this.position.top,
            };
            this.emit('taggd.tag.editor.movedown', this);
            return this;
        }
        /**
         * tag mousemove hander
         * @param {MouseEvent} event
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        tagMoveHander(event) {
            if (!this.isMoveing) {
                return;
            }
            event.preventDefault();
            const { taggd, position, pointer } = this;
            const { left, top, ratio, naturalWidth, naturalHeight } = taggd.imageData;
            const { endX, endY } = getPointer(event);
            // update tag x & y
            const x = (pointer.elX + (endX - pointer.startX) - left) / ratio;
            const y = (pointer.elY + (endY - pointer.startY) - top) / ratio;
            position.x = Math.min(Math.max(0, x), naturalWidth);
            position.y = Math.min(Math.max(0, y), naturalHeight);
            this.isMoved = true;
            this.setPosition();
            this.emit('taggd.tag.editor.move', this);
            return this;
        }
        /**
         * tag mouseup hander
         * @param {MouseEvent} event
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        tagUpHander(event) {
            if (!this.isMoveing) {
                return;
            }
            event.preventDefault();
            removeClass(this.buttonElement, 'taggd--grabbing');
            this.isMoveing = false;
            if (this.isMoved) {
                this.emit('taggd.tag.editor.moveup', this);
            }
            return this;
        }
    }

    class Taggd extends EventEmitter {
        static DEFAULT_OPTIONS;
        static Tag = Tag;
        wrapper;
        image;
        tags;
        options;
        imageData;
        pointer;
        isMoved;
        isMoveing;
        isWheeling;
        /**
         * Create a new taggd instance
         * @param {HTMLElement} image - The image to wrap
         * @param {Object} [options = {}] - The options
         * @param {Array} [data = []] - The tags
         */
        constructor(image, options = {}, data = []) {
            if (!(image instanceof Element)) {
                throw new TypeError(TypeErrorMessage.getMessage(image, Element));
            }
            super();
            this.wrapper = document.createElement('div');
            this.wrapper.className = 'taggd';
            this.image = image;
            image.classList.add('taggd__image');
            image.parentNode?.insertBefore(this.wrapper, image);
            this.wrapper.appendChild(image);
            this.tags = [];
            this.options = {};
            this.imageData = {};
            this.pointer = {};
            this.setOptions(options);
            // Subscriptions do not fire after instantiation 'taggd.editor.load'
            Promise.resolve().then(() => this.loadImage(data));
        }
        /**
         * Subscribe to an event.
         * @param {String} eventName - The event to subscribe to.
         * @param {Function} handler - The handler to execute.
         * @return {Taggd} Current Taggd instance
         */
        on(eventName, handler) {
            return super.on(eventName, handler);
        }
        /**
         * Unsubscribe from an event.
         * @param {String} eventName - The event to unsubscribe from.
         * @param {Function} handler - The handler that was used to subscribe.
         * @return {Taggd} Current Taggd instance
         */
        off(eventName, handler) {
            return super.off(eventName, handler);
        }
        /**
         * Subscribe to an event and unsubscribe once triggered.
         * @param {String} eventName - The event to subscribe to.
         * @param {Function} handler - The handler to execute.
         * @return {Taggd} Current Taggd instance
         */
        once(eventName, handler) {
            return super.once(eventName, handler);
        }
        /**
         * Publish to an event.
         * @param {String} eventName - The event to Publish to.
         * @param {Function} handler - The handler to execute.
         * @return {Boolean} The is canceled.
         */
        emit(eventName, ...args) {
            return super.emit(eventName, ...args);
        }
        /**
         * Set taggd options
         * @param {Object} options - The options to set
         * @return {Taggd} Current Taggd instance
         */
        setOptions(options) {
            if (!isObject(options)) {
                throw new TypeError(TypeErrorMessage.getObjectMessage(options));
            }
            this.options = assign(this.options, Taggd.DEFAULT_OPTIONS, options);
            return this;
        }
        /**
         * Add a single tag
         * @param {Taggd.Tag} tag - The tag to add
         * @return {Taggd} Current Taggd instance
         */
        addTag(tag) {
            if (!ofInstance(tag, Tag)) {
                throw new TypeError(TypeErrorMessage.getTagMessage(tag));
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
                        if (!isTargetButton(e))
                            return;
                        clearTimeout();
                        if (tag.isHidden()) {
                            tag.show();
                        }
                        else {
                            tag.hide();
                        }
                    });
                }
                else {
                    tag.buttonElement.addEventListener(this.options.show, (e) => {
                        if (!isTargetButton(e))
                            return;
                        clearTimeout();
                        tag.show();
                    });
                    tag.buttonElement.addEventListener(this.options.hide, (e) => {
                        if (!isTargetButton(e))
                            return;
                        clearTimeout();
                        // If the use moves the mouse between the button and popup, a delay should give some time
                        // to do just that. This only applies to the mouseleave event.
                        if (this.options.hide === 'mouseleave') {
                            hideTimeout = window.setTimeout(() => tag.hide(), this.options.hideDelay);
                        }
                        else {
                            tag.hide();
                        }
                    });
                    // Force visibility if user interacts with the popup element
                    if (this.options.hide === 'mouseleave') {
                        tag.popupElement.addEventListener('mouseover', () => clearTimeout());
                        tag.popupElement.addEventListener('mouseleave', () => tag.hide());
                    }
                }
                // Add events to click tags
                // If a move occurs, click will not be triggered
                tag.buttonElement.addEventListener('click', (e) => {
                    if (!isTargetButton(e))
                        return;
                    if (!tag.isMoved) {
                        tag.click();
                    }
                });
                // Route all tag events through taggd instance
                tag.onAnything((eventName, ...args) => {
                    this.emit(eventName, this, ...args);
                });
                // Establish contact with Taggd
                tag.taggd = this;
                tag.setPosition();
                this.tags.push(tag);
                this.wrapper.appendChild(tag.wrapperElement);
                this.emit('taggd.tag.added', this, tag);
            }
            return this;
        }
        /**
         * Get a single tag by index
         * @param  {Number} index - The index of the desired tag
         * @return {Taggd.Tag} The tag to get
         */
        getTag(index) {
            if (!Number.isInteger(index)) {
                throw new TypeError(TypeErrorMessage.getIntegerMessage(index));
            }
            return this.tags[index];
        }
        /**
         * Delete a single tag by index
         * @param {Number} index - The index of the desired tag
         * @return {Taggd} Current Taggd instance
         */
        deleteTag(index) {
            if (!Number.isInteger(index)) {
                throw new TypeError(TypeErrorMessage.getIntegerMessage(index));
            }
            if (!this.tags[index]) {
                throw new Error(`Tag at index ${index} does not exist.`);
            }
            const tag = this.tags[index];
            const isCanceled = !this.emit('taggd.tag.delete', this, tag);
            if (!isCanceled) {
                this.wrapper.removeChild(tag.wrapperElement);
                this.tags.splice(index, 1);
                this.emit('taggd.tag.deleted', this, tag);
            }
            return this;
        }
        /**
         * Set all tags
         * @param {Taggd.Tag[]} tags An array of tags
         * @return {Taggd} Current Taggd instance
         */
        setTags(tags) {
            this.deleteTags();
            this.addTags(tags);
            return this;
        }
        /**
         * Add multiple tags
         * @param {Taggd.Tag[]} tags - An array of tags
         * @return {Taggd} Current Taggd instance
         */
        addTags(tags) {
            if (!Array.isArray(tags)) {
                throw new TypeError(TypeErrorMessage.getArrayMessage(tags, 'Taggd.Tag'));
            }
            tags.forEach((tag) => this.addTag(tag));
            return this;
        }
        /**
         * Get all tags
         * @return {Taggd.Tag[]} All tags of this Taggd instance
         */
        getTags() {
            return this.tags;
        }
        /**
         * Remove all tags
         * @return {Taggd} Current Taggd instance
         */
        deleteTags() {
            while (this.tags.length > 0) {
                this.deleteTag(0);
            }
            return this;
        }
        /**
         * Iterate and replace all tags
         * @param {Function} callback - The callback to execute for all tags
         * @return {Taggd} Current Taggd instance
         */
        map(callback) {
            if (!isFunction(callback)) {
                throw new TypeError(TypeErrorMessage.getFunctionMessage(callback));
            }
            this.tags = this.tags.map(callback);
            return this;
        }
        /**
         * Get all tags json
         * @return {Array} A array for JSON
         */
        toJSON() {
            return this.tags.map((tag) => tag.toJSON());
        }
        /**
         * Clean up memory
         * @return {Taggd} Current Taggd instance
         */
        destroy() {
            const isCanceled = !this.emit('taggd.destroy', this);
            if (!isCanceled) {
                this.deleteTags();
                this.image.removeEventListener(this.options.addEvent, this.taggdClickHandler);
                this.image.removeEventListener('wheel', this.taggdZoomHander);
                this.image.removeEventListener('mousedown', this.taggdDownHander);
                document.removeEventListener('mousemove', this.taggdMoveHander);
                document.removeEventListener('mouseup', this.taggdUpHander);
                this.image.classList.remove('taggd__image');
                this.image.style.cssText = this.imageData.naturalStyle;
                this.wrapper.parentNode?.insertBefore(this.image, this.wrapper);
                this.wrapper.parentNode?.removeChild(this.wrapper);
            }
            return this;
        }
        /**
         * Enable editor mode
         * @return {Taggd} Current Taggd instance
         */
        enableEditorMode() {
            const isCanceled = !this.emit('taggd.editor.enable', this);
            if (!isCanceled) {
                this.wrapper.classList.add('taggd--pointer');
                this.image.addEventListener(this.options.addEvent, (this.taggdClickHandler = this.taggdClickHandler.bind(this)));
                this.image.addEventListener('wheel', (this.taggdZoomHander = this.taggdZoomHander.bind(this)));
                this.image.addEventListener('mousedown', (this.taggdDownHander = this.taggdDownHander.bind(this)));
                document.addEventListener('mousemove', (this.taggdMoveHander = this.taggdMoveHander.bind(this)));
                document.addEventListener('mouseup', (this.taggdUpHander = this.taggdUpHander.bind(this)));
            }
            return this;
        }
        /**
         * Disable editor mode
         * @return {Taggd} Current Taggd instance
         */
        disableEditorMode() {
            const isCanceled = !this.emit('taggd.editor.disable', this);
            if (!isCanceled) {
                this.wrapper.classList.remove('taggd--pointer');
                this.image.removeEventListener(this.options.addEvent, this.taggdClickHandler);
                this.image.removeEventListener('wheel', this.taggdZoomHander);
                this.image.removeEventListener('mousedown', this.taggdDownHander);
                document.removeEventListener('mousemove', this.taggdMoveHander);
                document.removeEventListener('mouseup', this.taggdUpHander);
            }
            return this;
        }
        /**
         * Load image and reset image
         * @param {Taggd.Tag[]} tags - An array of tags
         * @return {Taggd} Current Taggd instance
         */
        loadImage(tags) {
            this.emit('taggd.editor.load', this);
            const { image, wrapper, imageData } = this;
            const parentWidth = wrapper.offsetWidth;
            const parentHeight = wrapper.offsetHeight;
            const newImage = document.createElement('img');
            addClass(wrapper, 'taggd--loading');
            newImage.onload = () => {
                removeClass(wrapper, 'taggd--loading');
                // Original aspect ratio
                const { naturalWidth, naturalHeight } = image;
                const aspectRatio = naturalWidth / naturalHeight;
                // Full center in default
                let width = parentWidth;
                let height = parentHeight;
                if (parentHeight * aspectRatio > parentWidth) {
                    height = parentWidth / aspectRatio;
                }
                else {
                    width = parentHeight * aspectRatio;
                }
                // Init image style
                imageData.width = width;
                imageData.height = height;
                imageData.naturalWidth = naturalWidth;
                imageData.naturalHeight = naturalHeight;
                imageData.naturalStyle = image.style.cssText;
                imageData.ratio = width / naturalWidth;
                imageData.left = (parentWidth - width) / 2;
                imageData.top = (parentHeight - height) / 2;
                // Init tags
                this.setTags(tags);
                this.taggdChangeRender();
                this.emit('taggd.editor.loaded', this);
            };
            newImage.onerror = () => {
                this.emit('taggd.editor.loaderror', this);
            };
            newImage.src = image.src;
            return this;
        }
        /**
         * Change image reset style
         * @return {Taggd} Current Taggd instance
         */
        taggdChangeRender() {
            const { image, imageData } = this;
            setStyle(image, {
                width: imageData.width,
                height: imageData.height,
                marginLeft: imageData.left,
                marginTop: imageData.top,
            });
            // update tags position
            this.tags.forEach((tag) => tag.setPosition());
            return this;
        }
        /**
         * Taggd click/dblclick hander
         * @param {MouseEvent} event
         * @return {Taggd} Current Taggd instance
         */
        taggdClickHandler(event) {
            if (this.isMoved) {
                if (this.options.addEvent === 'click') {
                    return this;
                }
            }
            const { imageData } = this;
            const offset = getOffset(this.image);
            const position = {
                x: (event.pageX - offset.left) / imageData.ratio,
                y: (event.pageY - offset.top) / imageData.ratio,
            };
            this.emit('taggd.editor.add', this, position);
            return this;
        }
        /**
         * Taggd wheel hander
         * @param {WheelEvent} event
         * @return {Taggd} Current Taggd instance
         */
        taggdZoomHander(event) {
            event.preventDefault();
            if (this.isWheeling) {
                return;
            }
            this.isWheeling = true;
            setTimeout(() => {
                this.isWheeling = false;
            }, 50);
            const { options, image, imageData } = this;
            const { width, height, naturalWidth, naturalHeight } = imageData;
            let ratio = getWheelRatio(event, options.zoomRatio);
            const zoomRatioMin = Math.max(0.01, options.zoomRatioMin);
            const zoomRatioMax = Math.min(100, options.zoomRatioMax);
            ratio = (width * ratio) / naturalWidth;
            ratio = Math.min(Math.max(ratio, zoomRatioMin), zoomRatioMax);
            const offset = getOffset(image);
            const newWidth = naturalWidth * ratio;
            const newHeight = naturalHeight * ratio;
            const offsetWidth = newWidth - width;
            const offsetHeight = newHeight - height;
            imageData.ratio = ratio;
            imageData.width = newWidth;
            imageData.height = newHeight;
            imageData.left -= offsetWidth * ((event.pageX - offset.left) / width);
            imageData.top -= offsetHeight * ((event.pageY - offset.top) / height);
            this.taggdChangeRender();
            this.emit('taggd.editor.zoom', this);
            return this;
        }
        /**
         * Taggd mousedown hander
         * @param {MouseEvent} event
         * @return {Taggd} Current Taggd instance
         */
        taggdDownHander(event) {
            event.preventDefault();
            addClass(this.wrapper, 'taggd--grabbing');
            this.isMoved = false;
            this.isMoveing = true;
            this.pointer = {
                ...getPointer(event),
                elX: this.imageData.left,
                elY: this.imageData.top,
            };
            this.emit('taggd.editor.movedown', this);
            return this;
        }
        /**
         * Taggd mousemove hander
         * @param {MouseEvent} event
         * @return {Taggd} Current Taggd instance
         */
        taggdMoveHander(event) {
            if (!this.isMoveing) {
                return;
            }
            event.preventDefault();
            const { imageData, pointer } = this;
            const { endX, endY } = getPointer(event);
            imageData.left = pointer.elX + (endX - pointer.startX);
            imageData.top = pointer.elY + (endY - pointer.startY);
            this.isMoved = true;
            this.taggdChangeRender();
            this.emit('taggd.editor.move', this);
            return this;
        }
        /**
         * Taggd mouseup hander
         * @param {MouseEvent} event
         * @return {Taggd} Current Taggd instance
         */
        taggdUpHander(event) {
            if (!this.isMoveing) {
                return;
            }
            event.preventDefault();
            // If it is not visible, restore to the last starting position.
            const { imageData, wrapper, pointer } = this;
            const l = Math.abs(imageData.left) >= (imageData.left >= 0 ? wrapper.offsetWidth : imageData.width);
            const t = Math.abs(imageData.top) >= (imageData.top >= 0 ? wrapper.offsetHeight : imageData.height);
            if (l || t) {
                imageData.left = pointer.elX;
                imageData.top = pointer.elY;
                this.taggdChangeRender();
            }
            removeClass(this.wrapper, 'taggd--grabbing');
            this.isMoveing = false;
            if (this.isMoved) {
                this.emit('taggd.editor.moveup', this);
            }
            return this;
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
    };

    Taggd.Tag = Tag;

    return Taggd;

}));
