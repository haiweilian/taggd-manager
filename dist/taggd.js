/*!
 * taggd-manager v0.0.6
 * https://github.com/haiweilian/taggd-manager#readme
 *
 * Copyright 2021 haiweilian@foxmail.com
 * Released under the MIT license
 *
 * Date: 2021-02-09T12:56:04.903Z
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Taggd = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    var REGEXP_SUFFIX = /^(?:width|height|left|top|marginLeft|marginTop)$/;
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
                var length_1 = data.length;
                var i = void 0;
                for (i = 0; i < length_1; i += 1) {
                    if (callback.call(data, data[i], i, data) === false) {
                        break;
                    }
                }
            }
            else if (isObject(data)) {
                Object.keys(data).forEach(function (key) {
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
    function assign(obj) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (isObject(obj) && args.length > 0) {
            args.forEach(function (arg) {
                if (isObject(arg)) {
                    Object.keys(arg).forEach(function (key) {
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
        forEach(styles, function (value, property) {
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
        // if (isNumber(element.length)) {
        //   forEach(element, (elem) => {
        //     addClass(elem, value)
        //   })
        //   return
        // }
        if (element.classList) {
            element.classList.add(value);
            return;
        }
        var className = element.className.trim();
        if (!className) {
            element.className = value;
        }
        else if (className.indexOf(value) < 0) {
            element.className = className + " " + value;
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
        // if (isNumber(element.length)) {
        //   forEach(element, (elem) => {
        //     removeClass(elem, value)
        //   })
        //   return
        // }
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
        var box = element.getBoundingClientRect();
        return {
            top: box.top + (window.pageYOffset - document.documentElement.clientTop),
            left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
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
        var delta = 1;
        var ratio = zoomRatio;
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

    var TagEffect = {
        /**
         * tag mousedown hander
         * @param {MouseEvent} event
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        tagDownHander: function (event) {
            event.preventDefault();
            addClass(this.buttonElement, 'taggd--grabbing');
            this.action = 'move';
            this.pointer = _assign(_assign({}, getPointer(event)), { elX: this.position.left, elY: this.position.top });
            this.emit('taggd.tag.editor.movedown', this);
            return this;
        },
        /**
         * tag mousemove hander
         * @param {MouseEvent} event
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        tagMoveHander: function (event) {
            if (!this.action) {
                return;
            }
            event.preventDefault();
            var _a = this, position = _a.position, pointer = _a.pointer, Taggd = _a.Taggd;
            var _b = Taggd.imageData, left = _b.left, top = _b.top, ratio = _b.ratio, naturalWidth = _b.naturalWidth, naturalHeight = _b.naturalHeight;
            var _c = getPointer(event), endX = _c.endX, endY = _c.endY;
            // update tag x & y
            var x = (pointer.elX + (endX - pointer.startX) - left) / ratio;
            var y = (pointer.elY + (endY - pointer.startY) - top) / ratio;
            position.x = Math.min(Math.max(0, x), naturalWidth);
            position.y = Math.min(Math.max(0, y), naturalHeight);
            this.setPosition();
            this.emit('taggd.tag.editor.move', this);
            return this;
        },
        /**
         * tag mouseup hander
         * @param {MouseEvent} event
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        tagUpHander: function (event) {
            if (!this.action) {
                return;
            }
            event.preventDefault();
            removeClass(this.buttonElement, 'taggd--grabbing');
            this.action = '';
            this.emit('taggd.tag.editor.moveup', this);
            return this;
        },
    };

    var EVENT_WILDCARD = '*';
    var EventEmitter = /** @class */ (function () {
        function EventEmitter() {
            this.handlers = {};
            this.handlers = {};
        }
        /**
         * Subscribe to all event.
         * @param {Function} handler - The handler to execute.
         */
        EventEmitter.prototype.onAnything = function (handler) {
            this.on(EVENT_WILDCARD, handler);
        };
        /**
         * Subscribe to an event.
         * @param {String} eventName - The event to subscribe to.
         * @param {Function} handler - The handler to execute.
         */
        EventEmitter.prototype.on = function (eventName, handler) {
            if (!this.handlers[eventName]) {
                this.handlers[eventName] = [];
            }
            this.handlers[eventName].push(handler);
        };
        /**
         * Unsubscribe from an event.
         * @param {String} eventName - The event to unsubscribe from.
         * @param {Function} handler - The handler that was used to subscribe.
         */
        EventEmitter.prototype.off = function (eventName, handler) {
            if (!this.handlers[eventName])
                return;
            var handlerIndex = this.handlers[eventName].indexOf(handler);
            if (handlerIndex >= 0) {
                this.handlers[eventName].splice(handlerIndex, 1);
            }
        };
        /**
         * Subscribe to an event and unsubscribe once triggered.
         * @param {String} eventName - The event to subscribe to.
         * @param {Function} handler - The handler to execute.
         */
        EventEmitter.prototype.once = function (eventName, handler) {
            var _this = this;
            this.on(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                handler.apply(void 0, args);
                _this.off(eventName, handler);
            });
        };
        /**
         * Publish to an event.
         * @param {String} eventName - The event to Publish to.
         * @param {Function} handler - The handler to execute.
         * @return {Boolean} The is canceled.
         */
        EventEmitter.prototype.emit = function (eventName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var isCanceled = false;
            if (this.handlers[EVENT_WILDCARD]) {
                this.handlers[EVENT_WILDCARD].forEach(function (eventHandler) {
                    var returnValue = eventHandler.apply(void 0, __spreadArrays([eventName], args));
                    isCanceled = (returnValue !== undefined && !returnValue) || isCanceled;
                });
            }
            if (this.handlers[eventName]) {
                this.handlers[eventName].forEach(function (eventHandler) {
                    var returnValue = eventHandler.apply(void 0, args);
                    isCanceled = (returnValue !== undefined && !returnValue) || isCanceled;
                });
            }
            return !isCanceled;
        };
        return EventEmitter;
    }());

    var TypeErrorMessage = {
        /**
         * Get the TypeError message
         * @param {Object} object - The tested object
         * @param {String} expectedType - A string describing the expected type
         * @return {String} The error message
         */
        getMessage: function (object, expectedType) { return object + " should be " + expectedType; },
        /**
         * Get the TypeError Array message
         * @param {Object} object - The tested object
         * @param {String} expectedType - The expected type of all array items
         * @return {String} The error message
         */
        getArrayMessage: function (object, expectedType) {
            if (expectedType) {
                return TypeErrorMessage.getTypeErrorMessage(object, "an array of " + expectedType);
            }
            return TypeErrorMessage.getTypeErrorMessage(object, 'an array');
        },
        /**
         * Get the TypeError Function message
         * @param {Object} object - The tested object
         * @return {String} The error message
         */
        getFunctionMessage: function (object) { return TypeErrorMessage.getTypeErrorMessage(object, 'a function'); },
        /**
         * Get the TypeError Integer message
         * @param {Object} object - The tested object
         * @return {String} The error message
         */
        getIntegerMessage: function (object) { return TypeErrorMessage.getTypeErrorMessage(object, 'an integer'); },
        /**
         * Get the TypeError Float message
         * @param {Object} object - The tested object
         * @return {String} The error message
         */
        getFloatMessage: function (object) { return TypeErrorMessage.getTypeErrorMessage(object, 'a floating number'); },
        /**
         * Get the TypeError Object message
         * @param {Object} object - The tested object
         * @return {String} The error message
         */
        getObjectMessage: function (object) { return TypeErrorMessage.getTypeErrorMessage(object, 'an object'); },
        /**
         * Get the TypeError Taggd.Tag message
         * @param {Object} object - The tested object
         * @return {String} The error message
         */
        getTagMessage: function (object) { return TypeErrorMessage.getTypeErrorMessage(object, 'a tag'); },
        /**
         * Get TypeError message
         * @param {Object} object - The tested object
         * @param {String} message - The type message
         * @return {String} The error message
         */
        getTypeErrorMessage: function (object, message) { return object + " is not a " + message; },
    };

    var Tag = /** @class */ (function (_super) {
        __extends(Tag, _super);
        /**
         * Create a new Tag instance
         * @param {{ x: Number, y: Number }} position - The tag’s coordinates
         * @param {String|Function} text - The tag’s content
         * @param {Object} [buttonAttributes = {}] - The button’s attributes
         * @param {Object} [popupAttributes = {}] - The popup’s attributes
         */
        function Tag(position, text, buttonAttributes, popupAttributes) {
            if (text === void 0) { text = ''; }
            if (buttonAttributes === void 0) { buttonAttributes = {}; }
            if (popupAttributes === void 0) { popupAttributes = {}; }
            var _this = this;
            if (!isObject(position)) {
                throw new TypeError(TypeErrorMessage.getObjectMessage(position));
            }
            else if (!('x' in position) || !('y' in position)) {
                throw new Error(position + " should have x and y property");
            }
            _this = _super.call(this) || this;
            _this.wrapperElement = document.createElement('div');
            _this.wrapperElement.classList.add('taggd__wrapper');
            _this.buttonElement = document.createElement('button');
            _this.buttonElement.classList.add('taggd__button');
            _this.popupElement = document.createElement('span');
            _this.popupElement.classList.add('taggd__popup');
            _this.wrapperElement.appendChild(_this.buttonElement);
            _this.wrapperElement.appendChild(_this.popupElement);
            _this.text = '';
            _this.position = position;
            _this.pointer = {};
            _this.action = '';
            _this.setButtonAttributes(buttonAttributes);
            _this.setPopupAttributes(popupAttributes);
            _this.setText(text);
            _this.hide();
            return _this;
        }
        /**
         * Subscribe to an event.
         * @param {String} eventName - The event to subscribe to.
         * @param {Function} handler - The handler to execute.
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        Tag.prototype.on = function (eventName, handler) {
            return _super.prototype.on.call(this, eventName, handler);
        };
        /**
         * Unsubscribe from an event.
         * @param {String} eventName - The event to unsubscribe from.
         * @param {Function} handler - The handler that was used to subscribe.
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        Tag.prototype.off = function (eventName, handler) {
            return _super.prototype.off.call(this, eventName, handler);
        };
        /**
         * Subscribe to an event and unsubscribe once triggered.
         * @param {String} eventName - The event to subscribe to.
         * @param {Function} handler - The handler to execute.
         * @return {Taggd.Tag} Current Taggd.Tag instance
         */
        Tag.prototype.once = function (eventName, handler) {
            return _super.prototype.once.call(this, eventName, handler);
        };
        /**
         * Test whether the tag is hidden or not
         * @return {Boolean} A boolean indicating the tag’s state
         */
        Tag.prototype.isHidden = function () {
            return this.popupElement.style.display === 'none';
        };
        /**
         * Show the tag
         * @return {Taggd.Tag} Current Tag
         */
        Tag.prototype.show = function () {
            var isCanceled = !this.emit('taggd.tag.show', this);
            if (!isCanceled) {
                this.popupElement.style.display = '';
                this.emit('taggd.tag.shown', this);
            }
            return this;
        };
        /**
         * Hide the tag
         * @return {Taggd.Tag} Current Tag
         */
        Tag.prototype.hide = function () {
            var isCanceled = !this.emit('taggd.tag.hide', this);
            if (!isCanceled) {
                this.popupElement.style.display = 'none';
                this.emit('taggd.tag.hidden', this);
            }
            return this;
        };
        /**
         * Set the tag’s text
         * @param {String|Function} text - The tag’s content
         * @return {Taggd.Tag} Current Tag
         */
        Tag.prototype.setText = function (text) {
            if (!isString(text) && !isFunction(text)) {
                throw new TypeError(TypeErrorMessage.getMessage(text, 'a string or a function'));
            }
            var isCanceled = !this.emit('taggd.tag.change', this);
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
        };
        /**
         * Set the tag’s position
         * @param {Number} x - The tag’s x-coordinate
         * @param {Number} y - The tag’s y-coordinate
         * @return {Taggd.Tag} Current Tag
         */
        Tag.prototype.setPosition = function (x, y) {
            if (x === void 0) { x = this.position.x; }
            if (y === void 0) { y = this.position.y; }
            if (!isNumber(x)) {
                throw new TypeError(TypeErrorMessage.getFloatMessage(x));
            }
            if (!isNumber(y)) {
                throw new TypeError(TypeErrorMessage.getFloatMessage(y));
            }
            var isCanceled = !this.emit('taggd.tag.change', this);
            if (!isCanceled) {
                var _a = this, wrapperElement = _a.wrapperElement, position = _a.position, Taggd = _a.Taggd;
                var _b = Taggd.imageData, left = _b.left, top_1 = _b.top, ratio = _b.ratio;
                position.left = ratio * position.x + left;
                position.top = ratio * position.y + top_1;
                setStyle(wrapperElement, {
                    left: position.left,
                    top: position.top,
                });
                this.emit('taggd.tag.changed', this);
            }
            return this;
        };
        /**
         * Set the tag button’s attributes
         * @param {Object} atttributes = {} - The attributes to set
         * @return {Taggd.Tag} Current tag
         */
        Tag.prototype.setButtonAttributes = function (attributes) {
            if (attributes === void 0) { attributes = {}; }
            if (!isObject(attributes)) {
                throw new TypeError(TypeErrorMessage.getObjectMessage(attributes));
            }
            var isCanceled = !this.emit('taggd.tag.change', this);
            if (!isCanceled) {
                Tag.setElementAttributes(this.buttonElement, attributes);
                this.emit('taggd.tag.changed', this);
            }
            return this;
        };
        /**
         * Set the tag popup’s attributes
         * @param {Object} atttributes = {} - The attributes to set
         * @return {Taggd.Tag} Current tag
         */
        Tag.prototype.setPopupAttributes = function (attributes) {
            if (attributes === void 0) { attributes = {}; }
            if (!isObject(attributes)) {
                throw new TypeError(TypeErrorMessage.getObjectMessage(attributes));
            }
            var isCanceled = !this.emit('taggd.tag.change', this);
            if (!isCanceled) {
                Tag.setElementAttributes(this.popupElement, attributes);
                this.emit('taggd.tag.changed', this);
            }
            return this;
        };
        /**
         * Enable editor mode
         * @return {Taggd.Tag} Current tag
         */
        Tag.prototype.enableEditorMode = function () {
            var isCanceled = !this.emit('taggd.tag.editor.enable', this);
            if (!isCanceled) {
                addClass(this.buttonElement, 'taggd--grab');
                this.buttonElement.addEventListener('mousedown', (this.tagDownHander = this.tagDownHander.bind(this)));
                document.addEventListener('mousemove', (this.tagMoveHander = this.tagMoveHander.bind(this)));
                document.addEventListener('mouseup', (this.tagUpHander = this.tagUpHander.bind(this)));
            }
            return this;
        };
        /**
         * Disable editor mode
         * @return {Taggd.Tag} Current tag
         */
        Tag.prototype.disableEditorMode = function () {
            var isCanceled = !this.emit('taggd.tag.editor.disable', this);
            if (!isCanceled) {
                removeClass(this.buttonElement, 'taggd--grab');
                this.buttonElement.removeEventListener('mousedown', this.tagDownHander);
                document.removeEventListener('mousemove', this.tagMoveHander);
                document.removeEventListener('mouseup', this.tagUpHander);
            }
            return this;
        };
        /**
         * Get a Taggd.createFromObject-compatible object
         * @return {Object} A object for JSON
         */
        Tag.prototype.toJSON = function () {
            function getAttributes(rawAttributes) {
                var attributes = {};
                Array.prototype.forEach.call(rawAttributes, function (attribute) {
                    if (attribute.name === 'class' || attribute.name === 'style') {
                        return;
                    }
                    // @ts-ignore
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
        };
        /**
         * Set element attributes
         * @param {DomNode} element - The element the attributes should be set to
         * @param {Object} [attributes = {}] - A map of attributes to set
         * @return {DomNode} The original element
         */
        Tag.setElementAttributes = function (element, attributes) {
            if (attributes === void 0) { attributes = {}; }
            if (!isObject(attributes)) {
                throw new TypeError(TypeErrorMessage.getObjectMessage(attributes));
            }
            Object.entries(attributes).forEach(function (attribute) {
                var attributeName = attribute[0], attributeValue = attribute[1];
                if (attributeName === 'class' && element.getAttribute(attributeName)) {
                    var classValue = element.getAttribute(attributeName) + " " + attributeValue;
                    element.setAttribute(attributeName, classValue);
                    return;
                }
                // @ts-ignore
                element.setAttribute(attributeName, attributeValue);
            });
            return element;
        };
        /**
         * Get the position style
         * @param {Number} x - The tag’s x-coordinate
         * @param {Number} y - The tag’s y-coordinate
         * @return {Object} The style
         */
        Tag.getPositionStyle = function (x, y) {
            if (!isNumber(x)) {
                throw new TypeError(TypeErrorMessage.getFloatMessage(x));
            }
            if (!isNumber(y)) {
                throw new TypeError(TypeErrorMessage.getFloatMessage(y));
            }
            return {
                left: x + "px",
                top: y + "px",
            };
        };
        /**
         * Create a tag from object
         * @param {Object} object - The object containing all information
         * @return {Tag} The created Tag instance
         */
        Tag.createFromObject = function (object) {
            return new Tag(object.position, object.text, object.buttonAttributes, object.popupAttributes);
        };
        return Tag;
    }(EventEmitter));
    assign(Tag.prototype, TagEffect);

    var TaggdEffect = {
        /**
         * Load image and reset image
         * @param {Taggd.Tag[]} tags - An array of tags
         * @return {Taggd} Current Taggd instance
         */
        loadImage: function (tags) {
            var _this = this;
            this.emit('taggd.editor.load', this);
            var _a = this, image = _a.image, wrapper = _a.wrapper, imageData = _a.imageData;
            var parentWidth = wrapper.offsetWidth;
            var parentHeight = wrapper.offsetHeight;
            var newImage = document.createElement('img');
            addClass(wrapper, 'taggd--loading');
            newImage.onload = function () {
                removeClass(wrapper, 'taggd--loading');
                // Original aspect ratio
                var naturalWidth = image.naturalWidth, naturalHeight = image.naturalHeight;
                var aspectRatio = naturalWidth / naturalHeight;
                // Full center in default
                var width = parentWidth;
                var height = parentHeight;
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
                _this.setTags(tags);
                _this.taggdChangeRender();
                _this.emit('taggd.editor.loaded', _this);
            };
            newImage.onerror = function () {
                _this.emit('taggd.editor.loaderror', _this);
            };
            newImage.src = image.src;
            return this;
        },
        /**
         * Change image reset style
         * @return {Taggd} Current Taggd instance
         */
        taggdChangeRender: function () {
            var _a = this, image = _a.image, imageData = _a.imageData;
            setStyle(image, {
                width: imageData.width,
                height: imageData.height,
                marginLeft: imageData.left,
                marginTop: imageData.top,
            });
            // update tags position
            this.tags.forEach(function (tag) { return tag.setPosition(); });
            return this;
        },
        /**
         * Taggd click/dblclick hander
         * @param {MouseEvent} event
         * @return {Taggd} Current Taggd instance
         */
        taggdClickHandler: function (event) {
            var imageData = this.imageData;
            var offset = getOffset(this.image);
            var position = {
                x: ((event.pageX - offset.left) / imageData.width) * imageData.naturalWidth,
                y: ((event.pageY - offset.top) / imageData.height) * imageData.naturalHeight,
            };
            this.emit('taggd.editor.add', this, position);
            return this;
        },
        /**
         * Taggd wheel hander
         * @param {WheelEvent} event
         * @return {Taggd} Current Taggd instance
         */
        taggdZoomHander: function (event) {
            var _this = this;
            if (this.wheeling) {
                return;
            }
            this.wheeling = true;
            setTimeout(function () {
                _this.wheeling = false;
            }, 50);
            event.preventDefault();
            var _a = this, options = _a.options, image = _a.image, imageData = _a.imageData;
            var width = imageData.width, height = imageData.height, naturalWidth = imageData.naturalWidth, naturalHeight = imageData.naturalHeight;
            var ratio = getWheelRatio(event, options.zoomRatio);
            var zoomRatioMin = Math.max(0.01, options.zoomRatioMin);
            var zoomRatioMax = Math.min(100, options.zoomRatioMax);
            ratio = (width * ratio) / naturalWidth;
            ratio = Math.min(Math.max(ratio, zoomRatioMin), zoomRatioMax);
            var offset = getOffset(image);
            var newWidth = naturalWidth * ratio;
            var newHeight = naturalHeight * ratio;
            var offsetWidth = newWidth - width;
            var offsetHeight = newHeight - height;
            imageData.ratio = ratio;
            imageData.width = newWidth;
            imageData.height = newHeight;
            imageData.left -= offsetWidth * ((event.pageX - offset.left) / width);
            imageData.top -= offsetHeight * ((event.pageY - offset.top) / height);
            this.taggdChangeRender();
            this.emit('taggd.editor.zoom', this);
            return this;
        },
        /**
         * Taggd mousedown hander
         * @param {MouseEvent} event
         * @return {Taggd} Current Taggd instance
         */
        taggdDownHander: function (event) {
            event.preventDefault();
            addClass(this.wrapper, 'taggd--grabbing');
            this.action = 'move';
            this.pointer = _assign(_assign({}, getPointer(event)), { elX: this.imageData.left, elY: this.imageData.top });
            this.emit('taggd.editor.movedown', this);
            return this;
        },
        /**
         * Taggd mousemove hander
         * @param {MouseEvent} event
         * @return {Taggd} Current Taggd instance
         */
        taggdMoveHander: function (event) {
            if (!this.action) {
                return;
            }
            event.preventDefault();
            var _a = this, imageData = _a.imageData, pointer = _a.pointer;
            var _b = getPointer(event), endX = _b.endX, endY = _b.endY;
            imageData.left = pointer.elX + (endX - pointer.startX);
            imageData.top = pointer.elY + (endY - pointer.startY);
            this.taggdChangeRender();
            this.emit('taggd.editor.move', this);
            return this;
        },
        /**
         * Taggd mouseup hander
         * @param {MouseEvent} event
         * @return {Taggd} Current Taggd instance
         */
        taggdUpHander: function (event) {
            if (!this.action) {
                return;
            }
            event.preventDefault();
            removeClass(this.wrapper, 'taggd--grabbing');
            this.action = '';
            this.emit('taggd.editor.moveup', this);
            return this;
        },
    };

    var Taggd = /** @class */ (function (_super) {
        __extends(Taggd, _super);
        /**
         * Create a new taggd instance
         * @param {HTMLElement} image - The image to wrap
         * @param {Object} [options = {}] - The options
         * @param {Array} [data = []] - The tags
         */
        function Taggd(image, options, data) {
            if (options === void 0) { options = {}; }
            if (data === void 0) { data = []; }
            var _a;
            var _this = this;
            if (!(image instanceof Element)) {
                throw new TypeError(TypeErrorMessage.getMessage(image, Element));
            }
            _this = _super.call(this) || this;
            _this.wrapper = document.createElement('div');
            _this.wrapper.className = 'taggd';
            image.classList.add('taggd__image');
            (_a = image.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(_this.wrapper, image);
            _this.wrapper.appendChild(image);
            _this.image = image;
            _this.options = {};
            _this.imageData = {};
            _this.initialImageData = {};
            _this.tags = [];
            _this.pointer = {};
            _this.action = '';
            _this.wheeling = false;
            _this.setOptions(options);
            // TODO: Subscriptions do not fire after instantiation 'taggd.editor.load'
            setTimeout(function () {
                _this.loadImage(data);
            });
            return _this;
        }
        /**
         * Subscribe to an event.
         * @param {String} eventName - The event to subscribe to.
         * @param {Function} handler - The handler to execute.
         * @return {Taggd} Current Taggd instance
         */
        Taggd.prototype.on = function (eventName, handler) {
            return _super.prototype.on.call(this, eventName, handler);
        };
        /**
         * Unsubscribe from an event.
         * @param {String} eventName - The event to unsubscribe from.
         * @param {Function} handler - The handler that was used to subscribe.
         * @return {Taggd} Current Taggd instance
         */
        Taggd.prototype.off = function (eventName, handler) {
            return _super.prototype.off.call(this, eventName, handler);
        };
        /**
         * Subscribe to an event and unsubscribe once triggered.
         * @param {String} eventName - The event to subscribe to.
         * @param {Function} handler - The handler to execute.
         * @return {Taggd} Current Taggd instance
         */
        Taggd.prototype.once = function (eventName, handler) {
            return _super.prototype.once.call(this, eventName, handler);
        };
        /**
         * Set taggd options
         * @param {Object} options - The options to set
         * @return {Taggd} Current Taggd instance
         */
        Taggd.prototype.setOptions = function (options) {
            if (!isObject(options)) {
                throw new TypeError(TypeErrorMessage.getObjectMessage(options));
            }
            this.options = assign(this.options, Taggd.DEFAULT_OPTIONS, options);
            return this;
        };
        /**
         * Add a single tag
         * @param {Taggd.Tag} tag - The tag to add
         * @return {Taggd} Current Taggd instance
         */
        Taggd.prototype.addTag = function (tag) {
            var _this = this;
            if (!ofInstance(tag, Tag)) {
                throw new TypeError(TypeErrorMessage.getTagMessage(tag));
            }
            var isCanceled = !this.emit('taggd.tag.add', this, tag);
            var hideTimeout;
            /**
             * Test whether the event’s target is the button Element
             * @param {Event} e - The event object
             * @return {Boolean} Whether the event’s target is the button element
             */
            var isTargetButton = function (e) { return e.target === tag.buttonElement; };
            var clearTimeout = function () {
                if (hideTimeout) {
                    window.clearTimeout(hideTimeout);
                    hideTimeout = undefined;
                }
            };
            if (!isCanceled) {
                // Add events to show/hide tags
                // If show and hide event are identical, set show/hide mode to toggle
                if (this.options.show === this.options.hide) {
                    tag.buttonElement.addEventListener(this.options.show, function (e) {
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
                    tag.buttonElement.addEventListener(this.options.show, function (e) {
                        if (!isTargetButton(e))
                            return;
                        clearTimeout();
                        tag.show();
                    });
                    tag.buttonElement.addEventListener(this.options.hide, function (e) {
                        if (!isTargetButton(e))
                            return;
                        clearTimeout();
                        // If the use moves the mouse between the button and popup, a delay should give some time
                        // to do just that. This only applies to the mouseleave event.
                        if (_this.options.hide === 'mouseleave') {
                            hideTimeout = window.setTimeout(function () { return tag.hide(); }, _this.options.hideDelay);
                        }
                        else {
                            tag.hide();
                        }
                    });
                    // Force visibility if user interacts with the popup element
                    if (this.options.hide === 'mouseleave') {
                        tag.popupElement.addEventListener('mouseover', function () { return clearTimeout(); });
                        tag.popupElement.addEventListener('mouseleave', function () { return tag.hide(); });
                    }
                }
                // Route all tag events through taggd instance
                tag.onAnything(function (eventName) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    _this.emit.apply(_this, __spreadArrays([eventName, _this], args));
                });
                // Establish contact with Taggd
                tag.Taggd = this;
                tag.setPosition();
                this.tags.push(tag);
                this.wrapper.appendChild(tag.wrapperElement);
                this.emit('taggd.tag.added', this, tag);
            }
            return this;
        };
        /**
         * Get a single tag by index
         * @param  {Number} index - The index of the desired tag
         * @return {Taggd.Tag} The tag to get
         */
        Taggd.prototype.getTag = function (index) {
            if (!Number.isInteger(index)) {
                throw new TypeError(TypeErrorMessage.getIntegerMessage(index));
            }
            return this.tags[index];
        };
        /**
         * Delete a single tag by index
         * @param {Number} index - The index of the desired tag
         * @return {Taggd} Current Taggd instance
         */
        Taggd.prototype.deleteTag = function (index) {
            if (!Number.isInteger(index)) {
                throw new TypeError(TypeErrorMessage.getIntegerMessage(index));
            }
            if (!this.tags[index]) {
                throw new Error("Tag at index " + index + " does not exist.");
            }
            var tag = this.tags[index];
            var isCanceled = !this.emit('taggd.tag.delete', this, tag);
            if (!isCanceled) {
                this.wrapper.removeChild(tag.wrapperElement);
                this.tags.splice(index, 1);
                this.emit('taggd.tag.deleted', this, tag);
            }
            return this;
        };
        /**
         * Set all tags
         * @param {Taggd.Tag[]} tags An array of tags
         * @return {Taggd} Current Taggd instance
         */
        Taggd.prototype.setTags = function (tags) {
            this.deleteTags();
            this.addTags(tags);
            return this;
        };
        /**
         * Add multiple tags
         * @param {Taggd.Tag[]} tags - An array of tags
         * @return {Taggd} Current Taggd instance
         */
        Taggd.prototype.addTags = function (tags) {
            var _this = this;
            if (!Array.isArray(tags)) {
                throw new TypeError(TypeErrorMessage.getArrayMessage(tags, 'Taggd.Tag'));
            }
            tags.forEach(function (tag) { return _this.addTag(tag); });
            return this;
        };
        /**
         * Get all tags
         * @return {Taggd.Tag[]} All tags of this Taggd instance
         */
        Taggd.prototype.getTags = function () {
            return this.tags;
        };
        /**
         * Remove all tags
         * @return {Taggd} Current Taggd instance
         */
        Taggd.prototype.deleteTags = function () {
            while (this.tags.length > 0) {
                this.deleteTag(0);
            }
            return this;
        };
        /**
         * Iterate and replace all tags
         * @param {Function} callback - The callback to execute for all tags
         * @return {Taggd} Current Taggd instance
         */
        Taggd.prototype.map = function (callback) {
            if (!isFunction(callback)) {
                throw new TypeError(TypeErrorMessage.getFunctionMessage(callback));
            }
            // @ts-ignore
            this.tags = this.tags.map(callback);
            return this;
        };
        /**
         * Clean up memory
         * @return {Taggd} Current Taggd instance
         */
        Taggd.prototype.destroy = function () {
            var _a, _b;
            var isCanceled = !this.emit('taggd.destroy', this);
            if (!isCanceled) {
                this.deleteTags();
                this.image.removeEventListener(this.options.addEvent, this.taggdClickHandler);
                this.image.removeEventListener('wheel', this.taggdZoomHander);
                this.image.removeEventListener('mousedown', this.taggdDownHander);
                document.removeEventListener('mousemove', this.taggdMoveHander);
                document.removeEventListener('mouseup', this.taggdUpHander);
                this.image.classList.remove('taggd__image');
                this.image.style.cssText = this.imageData.naturalStyle;
                (_a = this.wrapper.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(this.image, this.wrapper);
                (_b = this.wrapper.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(this.wrapper);
            }
            return this;
        };
        /**
         * Enable editor mode
         * @return {Taggd} Current Taggd instance
         */
        Taggd.prototype.enableEditorMode = function () {
            var isCanceled = !this.emit('taggd.editor.enable', this);
            if (!isCanceled) {
                addClass(this.wrapper, 'taggd--pointer');
                this.image.addEventListener(this.options.addEvent, (this.taggdClickHandler = this.taggdClickHandler.bind(this)));
                this.image.addEventListener('wheel', (this.taggdZoomHander = this.taggdZoomHander.bind(this)));
                this.image.addEventListener('mousedown', (this.taggdDownHander = this.taggdDownHander.bind(this)));
                document.addEventListener('mousemove', (this.taggdMoveHander = this.taggdMoveHander.bind(this)));
                document.addEventListener('mouseup', (this.taggdUpHander = this.taggdUpHander.bind(this)));
            }
            return this;
        };
        /**
         * Disable editor mode
         * @return {Taggd} Current Taggd instance
         */
        Taggd.prototype.disableEditorMode = function () {
            var isCanceled = !this.emit('taggd.editor.disable', this);
            if (!isCanceled) {
                removeClass(this.wrapper, 'taggd--pointer');
                this.image.removeEventListener(this.options.addEvent, this.taggdClickHandler);
                this.image.removeEventListener('wheel', this.taggdZoomHander);
                this.image.removeEventListener('mousedown', this.taggdDownHander);
                document.removeEventListener('mousemove', this.taggdMoveHander);
                document.removeEventListener('mouseup', this.taggdUpHander);
            }
            return this;
        };
        return Taggd;
    }(EventEmitter));
    assign(Taggd.prototype, TaggdEffect);
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

    // @ts-ignore
    Taggd.Tag = Tag;

    return Taggd;

})));
