(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TaggdManager = {}));
}(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var EVENT_WILDCARD = '*';

  var EventEmitter = /*#__PURE__*/function () {
    function EventEmitter() {
      _classCallCheck(this, EventEmitter);

      this.handlers = {};
    }

    _createClass(EventEmitter, [{
      key: "onAnything",
      value: function onAnything(handler) {
        this.on(EVENT_WILDCARD, handler);
      }
    }, {
      key: "on",
      value: function on(eventName, handler) {
        if (!this.handlers[eventName]) {
          this.handlers[eventName] = [];
        }

        this.handlers[eventName].push(handler);
      }
    }, {
      key: "off",
      value: function off(eventName, handler) {
        if (!this.handlers[eventName]) return;
        var handlerIndex = this.handlers[eventName].indexOf(handler);

        if (handlerIndex >= 0) {
          this.handlers[eventName].splice(handlerIndex, 1);
        }
      }
    }, {
      key: "once",
      value: function once(eventName, handler) {
        var _this = this;

        this.on(eventName, function () {
          handler.apply(void 0, arguments);

          _this.off(eventName, handler);
        });
      }
    }, {
      key: "emit",
      value: function emit(eventName) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var isCanceled = false;

        if (this.handlers[EVENT_WILDCARD]) {
          this.handlers[EVENT_WILDCARD].forEach(function (eventHandler) {
            var returnValue = eventHandler.apply(void 0, [eventName].concat(args));
            isCanceled = returnValue !== undefined && !returnValue || isCanceled;
          });
        }

        if (this.handlers[eventName]) {
          this.handlers[eventName].forEach(function (eventHandler) {
            var returnValue = eventHandler.apply(void 0, args);
            isCanceled = returnValue !== undefined && !returnValue || isCanceled;
          });
        }

        return !isCanceled;
      }
    }]);

    return EventEmitter;
  }();

  var TypeErrorMessage = {
    /**
     * Get the TypeError message
     * @param {Object} object - The tested object
     * @param {String} expectedType - A string describing the expected type
     * @return {String} The error message
     */
    getMessage: function getMessage(object, expectedType) {
      return "".concat(object, " should be ").concat(expectedType);
    },

    /**
     * Get the TypeError Array message
     * @param {Object} object - The tested object
     * @param {String} expectedType - The expected type of all array items
     * @return {String} The error message
     */
    getArrayMessage: function getArrayMessage(object, expectedType) {
      if (expectedType) {
        return TypeErrorMessage.getTypeErrorMessage(object, "an array of ".concat(expectedType));
      }

      return TypeErrorMessage.getTypeErrorMessage(object, 'an array');
    },

    /**
     * Get the TypeError Function message
     * @param {Object} object - The tested object
     * @return {String} The error message
     */
    getFunctionMessage: function getFunctionMessage(object) {
      return TypeErrorMessage.getTypeErrorMessage(object, 'a function');
    },

    /**
     * Get the TypeError Integer message
     * @param {Object} object - The tested object
     * @return {String} The error message
     */
    getIntegerMessage: function getIntegerMessage(object) {
      return TypeErrorMessage.getTypeErrorMessage(object, 'an integer');
    },

    /**
     * Get the TypeError Float message
     * @param {Object} object - The tested object
     * @return {String} The error message
     */
    getFloatMessage: function getFloatMessage(object) {
      return TypeErrorMessage.getTypeErrorMessage(object, 'a floating number');
    },

    /**
     * Get the TypeError Object message
     * @param {Object} object - The tested object
     * @return {String} The error message
     */
    getObjectMessage: function getObjectMessage(object) {
      return TypeErrorMessage.getTypeErrorMessage(object, 'an object');
    },

    /**
     * Get the TypeError Taggd.Tag message
     * @param {Object} object - The tested object
     * @return {String} The error message
     */
    getTagMessage: function getTagMessage(object) {
      return TypeErrorMessage.getTypeErrorMessage(object, 'a tag');
    },

    /**
     * Get TypeError message
     * @param {Object} object - The tested object
     * @param {String} message - The type message
     * @return {String} The error message
     */
    getTypeErrorMessage: function getTypeErrorMessage(object, message) {
      return "".concat(object, " is not a ").concat(message);
    }
  };

  /**
   * Check wheter an object is an instance of type
   * @param {Object} object - The object to test
   * @param {Object} type - The class to test
   * @return {Boolean}
   */
  function ofInstance(object, type) {
    return object instanceof type;
  }
  /**
   * Check if the given value is a string.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a string, else `false`.
   */

  function isString(value) {
    return typeof value === 'string';
  }
  /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */

  function isNumber(value) {
    return typeof value === 'number' && !Number.isNaN(value);
  }
  /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */

  function isObject(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */

  function isFunction(value) {
    return typeof value === 'function';
  }
  /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */

  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }

  var Tag = /*#__PURE__*/function (_EventEmitter) {
    _inherits(Tag, _EventEmitter);

    var _super = _createSuper(Tag);

    /**
     * Create a new Tag instance
     * @param {{ x: Number, y: Number }} position - The tag’s coordinates
     * @param {String|Function} text - The tag’s content
     * @param {Object} [buttonAttributes = {}] - The button’s attributes
     * @param {Object} [popupAttributes = {}] - The popup’s attributes
     */
    function Tag(position, text) {
      var _this;

      var buttonAttributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var popupAttributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, Tag);

      if (!isObject(position) || Array.isArray(position)) {
        throw new TypeError(TypeErrorMessage.getObjectMessage(position));
      } else if (!('x' in position) || !('y' in position)) {
        throw new Error("".concat(position, " should have x and y property"));
      }

      _this = _super.call(this);
      _this.wrapperElement = document.createElement('div');

      _this.wrapperElement.classList.add('taggd__wrapper');

      _this.buttonElement = document.createElement('button');

      _this.buttonElement.classList.add('taggd__button');

      _this.popupElement = document.createElement('span');

      _this.popupElement.classList.add('taggd__popup');

      _this.wrapperElement.appendChild(_this.buttonElement);

      _this.wrapperElement.appendChild(_this.popupElement);

      _this.text = undefined;
      _this.isControlsEnabled = false;

      _this.setButtonAttributes(buttonAttributes);

      _this.setPopupAttributes(popupAttributes);

      _this.setPosition(position.x, position.y);

      _this.setText(text);

      _this.hide();

      return _this;
    }
    /**
     * Subscribe to an event.
     * @param {String} eventName - The event to subscribe to.
     * @param {Function} handler - The handler to execute.
     * @return {Taggd} Current Taggd instance
     */


    _createClass(Tag, [{
      key: "on",
      value: function on(eventName, handler) {
        return _get(_getPrototypeOf(Tag.prototype), "on", this).call(this, eventName, handler);
      }
      /**
       * Unsubscribe from an event.
       * @param {String} eventName - The event to unsubscribe from.
       * @param {Function} handler - The handler that was used to subscribe.
       * @return {Taggd} Current Taggd instance
       */

    }, {
      key: "off",
      value: function off(eventName, handler) {
        return _get(_getPrototypeOf(Tag.prototype), "off", this).call(this, eventName, handler);
      }
      /**
       * Subscribe to an event and unsubscribe once triggered.
       * @param {String} eventName - The event to subscribe to.
       * @param {Function} handler - The handler to execute.
       * @return {Taggd} Current Taggd instance
       */

    }, {
      key: "once",
      value: function once(eventName, handler) {
        return _get(_getPrototypeOf(Tag.prototype), "once", this).call(this, eventName, handler);
      }
      /**
       * Test whether the tag is hidden or not
       * @return {Boolean} A boolean indicating the tag’s state
       */

    }, {
      key: "isHidden",
      value: function isHidden() {
        return this.popupElement.style.display === 'none';
      }
      /**
       * Show the tag
       * @return {Taggd.Tag} Current Tag
       */

    }, {
      key: "show",
      value: function show() {
        var isCanceled = !this.emit('taggd.tag.show', this);

        if (!isCanceled) {
          this.popupElement.style.display = '';
          this.emit('taggd.tag.shown', this);
        }

        return this;
      }
      /**
       * Hide the tag
       * @return {Taggd.Tag} Current Tag
       */

    }, {
      key: "hide",
      value: function hide() {
        var isCanceled = !this.emit('taggd.tag.hide', this);

        if (!isCanceled) {
          this.popupElement.style.display = 'none';
          this.emit('taggd.tag.hidden', this);
        }

        return this;
      }
      /**
       * Set the tag’s text
       * @param {String|Function} text - The tag’s content
       * @return {Taggd.Tag} Current Tag
       */

    }, {
      key: "setText",
      value: function setText(text) {
        if (!isString(text) && !isFunction(text)) {
          throw new TypeError(TypeErrorMessage.getMessage(text, 'a string or a function'));
        }

        var isCanceled = !this.emit('taggd.tag.change', this);

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

        return this;
      }
      /**
       * Set the tag’s position
       * @param {Number} x - The tag’s x-coordinate
       * @param {Number} y - The tag’s y-coordinate
       * @return {Taggd.Tag} Current Tag
       */

    }, {
      key: "setPosition",
      value: function setPosition(x, y) {
        if (!isNumber(x)) {
          throw new TypeError(TypeErrorMessage.getFloatMessage(x));
        }

        if (!isNumber(y)) {
          throw new TypeError(TypeErrorMessage.getFloatMessage(y));
        }

        var isCanceled = !this.emit('taggd.tag.change', this);

        if (!isCanceled) {
          var positionStyle = Tag.getPositionStyle(x, y);
          this.wrapperElement.style.left = positionStyle.left;
          this.wrapperElement.style.top = positionStyle.top;
          this.emit('taggd.tag.changed', this);
        }

        return this;
      }
      /**
       * Set the tag button’s attributes
       * @param {Object} atttributes = {} - The attributes to set
       * @return {Taggd.Tag} Current tag
       */

    }, {
      key: "setButtonAttributes",
      value: function setButtonAttributes() {
        var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (!isObject(attributes) || Array.isArray(attributes)) {
          throw new TypeError(TypeErrorMessage.getObjectMessage(attributes));
        }

        var isCanceled = !this.emit('taggd.tag.change', this);

        if (!isCanceled) {
          Tag.setElementAttributes(this.buttonElement, attributes);
          this.emit('taggd.tag.changed', this);
        }

        return this;
      }
      /**
       * Set the tag popup’s attributes
       * @param {Object} atttributes = {} - The attributes to set
       * @return {Taggd.Tag} Current tag
       */

    }, {
      key: "setPopupAttributes",
      value: function setPopupAttributes() {
        var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (!isObject(attributes) || Array.isArray(attributes)) {
          throw new TypeError(TypeErrorMessage.getObjectMessage(attributes));
        }

        var isCanceled = !this.emit('taggd.tag.change', this);

        if (!isCanceled) {
          Tag.setElementAttributes(this.popupElement, attributes);
          this.emit('taggd.tag.changed', this);
        }

        return this;
      }
      /**
       * Enables the tag controls
       * @return {Taggd.Tag} Current tag
       */

    }, {
      key: "enableControls",
      value: function enableControls() {
        this.isControlsEnabled = true;
        this.setText(this.text);
        return this;
      }
      /**
       * Disabled the tag controls
       * @return {Taggd.Tag} Current tag
       */

    }, {
      key: "disableControls",
      value: function disableControls() {
        this.isControlsEnabled = false;
        this.setText(this.text);
        return this;
      }
      /**
       * Get a Taggd.createFromObject-compatible object
       * @return {Object} A object for JSON
       */

    }, {
      key: "toJSON",
      value: function toJSON() {
        function getAttributes(rawAttributes) {
          var attributes = {};
          Array.prototype.forEach.call(rawAttributes, function (attribute) {
            if (attribute.name === 'class' || attribute.name === 'style') {
              return;
            }

            attributes[attribute.name] = attribute.value;
          });
          return attributes;
        }

        return {
          position: {
            x: parseFloat(this.wrapperElement.style.left) / 100,
            y: parseFloat(this.wrapperElement.style.top) / 100
          },
          text: this.text,
          buttonAttributes: getAttributes(this.buttonElement.attributes),
          popupAttributes: getAttributes(this.popupElement.attributes)
        };
      }
      /**
       * Set element attributes
       * @param {DomNode} element - The element the attributes should be set to
       * @param {Object} [attributes = {}] - A map of attributes to set
       * @return {DomNode} The original element
       */

    }], [{
      key: "setElementAttributes",
      value: function setElementAttributes(element) {
        var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!isObject(attributes) || Array.isArray(attributes)) {
          throw new TypeError(TypeErrorMessage.getObjectMessage(attributes));
        }

        Object.entries(attributes).forEach(function (attribute) {
          var _attribute = _slicedToArray(attribute, 2),
              attributeName = _attribute[0],
              attributeValue = _attribute[1];

          if (attributeName === 'class' && element.getAttribute(attributeName)) {
            var classValue = "".concat(element.getAttribute(attributeName), " ").concat(attributeValue);
            element.setAttribute(attributeName, classValue);
            return;
          }

          element.setAttribute(attributeName, attributeValue);
        });
        return element;
      }
      /**
       * Get the position style
       * @param {Number} x - The tag’s x-coordinate
       * @param {Number} y - The tag’s y-coordinate
       * @return {Object} The style
       */

    }, {
      key: "getPositionStyle",
      value: function getPositionStyle(x, y) {
        if (!isNumber(x)) {
          throw new TypeError(TypeErrorMessage.getFloatMessage(x));
        }

        if (!isNumber(y)) {
          throw new TypeError(TypeErrorMessage.getFloatMessage(y));
        }

        return {
          left: "".concat(x * 100, "%"),
          top: "".concat(y * 100, "%")
        };
      }
      /**
       * Create a tag from object
       * @param {Object} object - The object containing all information
       * @return {Tag} The created Tag instance
       */

    }, {
      key: "createFromObject",
      value: function createFromObject(object) {
        return new Tag(object.position, object.text, object.buttonAttributes, object.popupAttributes);
      }
    }]);

    return Tag;
  }(EventEmitter);

  var Taggd = /*#__PURE__*/function (_EventEmitter) {
    _inherits(Taggd, _EventEmitter);

    var _super = _createSuper(Taggd);

    /**
     * Create a new taggd instance
     * @param {HTMLElement} image - The image to wrap
     * @param {Object} [options = {}] - The options
     * @param {Array} [data = []] - The tags
     */
    function Taggd(image) {
      var _this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      _classCallCheck(this, Taggd);

      if (!image instanceof Element) {
        throw new TypeError(TypeErrorMessage.getMessage(image, Element));
      }

      _this = _super.call(this);
      _this.wrapper = document.createElement('div');

      _this.wrapper.classList.add('taggd');

      image.classList.add('taggd__image');
      image.parentElement.insertBefore(_this.wrapper, image);
      image.parentElement.removeChild(image);

      _this.wrapper.appendChild(image);

      _this.image = image;
      _this.options = {};
      _this.tags = [];
      _this.imageClickHandler = _this.imageClickHandler.bind(_assertThisInitialized(_this));

      _this.setOptions(options);

      _this.setTags(data);

      return _this;
    }
    /**
     * Subscribe to an event.
     * @param {String} eventName - The event to subscribe to.
     * @param {Function} handler - The handler to execute.
     * @return {Taggd} Current Taggd instance
     */


    _createClass(Taggd, [{
      key: "on",
      value: function on(eventName, handler) {
        return _get(_getPrototypeOf(Taggd.prototype), "on", this).call(this, eventName, handler);
      }
      /**
       * Unsubscribe from an event.
       * @param {String} eventName - The event to unsubscribe from.
       * @param {Function} handler - The handler that was used to subscribe.
       * @return {Taggd} Current Taggd instance
       */

    }, {
      key: "off",
      value: function off(eventName, handler) {
        return _get(_getPrototypeOf(Taggd.prototype), "off", this).call(this, eventName, handler);
      }
      /**
       * Subscribe to an event and unsubscribe once triggered.
       * @param {String} eventName - The event to subscribe to.
       * @param {Function} handler - The handler to execute.
       * @return {Taggd} Current Taggd instance
       */

    }, {
      key: "once",
      value: function once(eventName, handler) {
        return _get(_getPrototypeOf(Taggd.prototype), "once", this).call(this, eventName, handler);
      }
      /**
       * Set taggd options
       * @param {Object} options - The options to set
       * @return {Taggd} Current Taggd instance
       */

    }, {
      key: "setOptions",
      value: function setOptions(options) {
        if (!isObject(options) || Array.isArray(options)) {
          throw new TypeError(TypeErrorMessage.getObjectMessage(options));
        }

        this.options = Object.assign(this.options, Taggd.DEFAULT_OPTIONS, options);
        return this;
      }
      /**
       * Set taggd options
       * @param {Object} options - The options to set
       * @return {Taggd} Current Taggd instance
       */

    }, {
      key: "imageClickHandler",
      value: function imageClickHandler(e) {
        var offset = getOffset(this.image);
        var position = {
          x: (e.pageX - offset.left) / this.image.width,
          y: (e.pageY - offset.top) / this.image.height
        };
        this.emit('taggd.image.click', this, position);
      }
      /**
       * Add a single tag
       * @param {Taggd.Tag} tag - The tag to add
       * @return {Taggd} Current Taggd instance
       */

    }, {
      key: "addTag",
      value: function addTag(tag) {
        var _this2 = this;

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

        var isTargetButton = function isTargetButton(e) {
          return e.target === tag.buttonElement;
        };

        var clearTimeout = function clearTimeout() {
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
              if (!isTargetButton(e)) return;
              clearTimeout();

              if (tag.isHidden()) {
                tag.show();
              } else {
                tag.hide();
              }
            });
          } else {
            tag.buttonElement.addEventListener(this.options.show, function (e) {
              if (!isTargetButton(e)) return;
              clearTimeout();
              tag.show();
            });
            tag.buttonElement.addEventListener(this.options.hide, function (e) {
              if (!isTargetButton(e)) return;
              clearTimeout(); // If the use moves the mouse between the button and popup, a delay should give some time
              // to do just that. This only applies to the mouseleave event.

              if (_this2.options.hide === 'mouseleave') {
                hideTimeout = window.setTimeout(function () {
                  return tag.hide();
                }, _this2.options.hideDelay);
              } else {
                tag.hide();
              }
            }); // Force visibility if user interacts with the popup element

            if (this.options.hide === 'mouseleave') {
              tag.popupElement.addEventListener('mouseover', function () {
                return clearTimeout();
              });
              tag.popupElement.addEventListener('mouseleave', function () {
                return tag.hide();
              });
            }
          }

          tag.once('taggd.tag.delete', function () {
            var tagIndex = _this2.tags.indexOf(tag);

            if (tagIndex >= 0) {
              _this2.deleteTag(tagIndex);
            }
          }); // Route all tag events through taggd instance

          tag.onAnything(function (eventName) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            _this2.emit.apply(_this2, [eventName, _this2].concat(args));
          });
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

    }, {
      key: "getTag",
      value: function getTag(index) {
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

    }, {
      key: "deleteTag",
      value: function deleteTag(index) {
        if (!Number.isInteger(index)) {
          throw new TypeError(TypeErrorMessage.getIntegerMessage(index));
        }

        if (!this.tags[index]) {
          throw new Error("Tag at index ".concat(index, " does not exist."));
        }

        var tag = this.tags[index];
        var isCanceled = !this.emit('taggd.tag.delete', this, tag);

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

    }, {
      key: "setTags",
      value: function setTags(tags) {
        this.deleteTags();
        this.addTags(tags);
        return this;
      }
      /**
       * Add multiple tags
       * @param {Taggd.Tag[]} tags - An array of tags
       * @return {Taggd} Current Taggd instance
       */

    }, {
      key: "addTags",
      value: function addTags(tags) {
        var _this3 = this;

        if (!Array.isArray(tags)) {
          throw new TypeError(TypeErrorMessage.getArrayMessage(tags, 'Taggd.Tag'));
        }

        tags.forEach(function (tag) {
          return _this3.addTag(tag);
        });
        return this;
      }
      /**
       * Get all tags
       * @return {Taggd.Tag[]} All tags of this Taggd instance
       */

    }, {
      key: "getTags",
      value: function getTags() {
        return this.tags;
      }
      /**
       * Remove all tags
       * @return {Taggd} Current Taggd instance
       */

    }, {
      key: "deleteTags",
      value: function deleteTags() {
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

    }, {
      key: "map",
      value: function map(callback) {
        if (!isFunction(callback)) {
          throw new TypeError(TypeErrorMessage.getFunctionMessage(callback));
        }

        this.tags = this.tags.map(callback);
        return this;
      }
      /**
       * Clean up memory
       * @return {Taggd} Current Taggd instance
       */

    }, {
      key: "destroy",
      value: function destroy() {
        var isCanceled = !this.emit('taggd.destroy', this);

        if (!isCanceled) {
          this.deleteTags();
        }

        return this;
      }
      /**
       * Enable editor mode
       * @return {Taggd} Current Taggd instance
       */

    }, {
      key: "enableEditorMode",
      value: function enableEditorMode() {
        var isCanceled = !this.emit('taggd.editor.enable', this);

        if (!isCanceled) {
          this.image.addEventListener(this.options.click, this.imageClickHandler);
          this.getTags().forEach(function (tag) {
            return tag.enableControls();
          });
        }

        return this;
      }
      /**
       * Disable editor mode
       * @return {Taggd} Current Taggd instance
       */

    }, {
      key: "disableEditorMode",
      value: function disableEditorMode() {
        var isCanceled = !this.emit('taggd.editor.disable', this);

        if (!isCanceled) {
          this.image.removeEventListener(this.options.click, this.imageClickHandler);
          this.getTags().forEach(function (tag) {
            return tag.disableControls();
          });
        }

        return this;
      }
    }]);

    return Taggd;
  }(EventEmitter);
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
    hideDelay: 500
  };

  exports.Tag = Tag;
  exports.Taggd = Taggd;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
