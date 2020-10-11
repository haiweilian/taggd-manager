/*!
 * taggd-manager v0.0.2
 * https://github.com/haiweilian/taggd-manager#readme
 *
 * Copyright 2020 haiweilian@foxmail.com
 * Released under the MIT license
 *
 * Date: 2020-10-11T10:18:44.313Z
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Taggd = factory());
}(this, (function () { 'use strict';

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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
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

  /**
   * see from https://github.com/haiweilian/share-snippets
   * see from https://github.com/fengyuanchen/viewerjs/blob/master/src/js/utilities.js
   */

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
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */

  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length)
      /* array-like */
      ) {
          var length = data.length;
          var i;

          for (i = 0; i < length; i += 1) {
            if (callback.call(data, data[i], i, data) === false) {
              break;
            }
          }
        } else if (isObject(data)) {
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
   * @returns {Object} The extended object.
   */

  /* eslint-disable prettier/prettier */

  var assign = Object.assign || function assign(obj) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
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
  };
  var REGEXP_SUFFIX = /^(?:width|height|left|top|marginLeft|marginTop)$/;
  /* eslint-enable prettier/prettier */

  /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */

  function setStyle(element, styles) {
    var style = element.style;
    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value += 'px';
      }

      style[property] = value;
    });
  }
  /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */

  function addClass(element, value) {
    if (!element || !value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.add(value);
      return;
    }

    var className = element.className.trim();

    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }
  /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */

  function removeClass(element, value) {
    if (!element || !value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
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
  /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */

  function getPointer(_ref, endOnly) {
    var pageX = _ref.pageX,
        pageY = _ref.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : _objectSpread2({
      timeStamp: Date.now(),
      startX: pageX,
      startY: pageY
    }, end);
  }

  var TagEffect = {
    /**
     * tag mousedown hander
     * @param {EventTarget} event
     * @return {undefined}
     */
    tagDownHander: function tagDownHander(event) {
      event.preventDefault();
      addClass(this.buttonElement, 'taggd--grabbing');
      this.action = 'move';
      this.pointer = assign(getPointer(event), {
        moveX: this.position.left,
        moveY: this.position.top
      });
      this.emit('taggd.tag.editor.movedown', this);
    },

    /**
     * tag mousemove hander
     * @param {EventTarget} event
     * @return {undefined}
     */
    tagMoveHander: function tagMoveHander(event) {
      if (!this.action) {
        return;
      }

      event.preventDefault();
      var position = this.position,
          pointer = this.pointer,
          Taggd = this.Taggd;
      var _Taggd$imageData = Taggd.imageData,
          left = _Taggd$imageData.left,
          top = _Taggd$imageData.top,
          ratio = _Taggd$imageData.ratio,
          naturalWidth = _Taggd$imageData.naturalWidth,
          naturalHeight = _Taggd$imageData.naturalHeight;

      var _getPointer = getPointer(event, true),
          endX = _getPointer.endX,
          endY = _getPointer.endY; // update tag x & y


      var x = (pointer.moveX + (endX - pointer.startX) - left) / ratio;
      var y = (pointer.moveY + (endY - pointer.startY) - top) / ratio;
      position.x = Math.min(Math.max(0, x), naturalWidth);
      position.y = Math.min(Math.max(0, y), naturalHeight);
      this.setPosition();
      this.emit('taggd.tag.editor.move', this);
    },

    /**
     * tag mouseup hander
     * @param {EventTarget} event
     * @return {undefined}
     */
    tagUpHander: function tagUpHander(event) {
      if (!this.action) {
        return;
      }

      event.preventDefault();
      removeClass(this.buttonElement, 'taggd--grabbing');
      this.action = false;
      this.emit('taggd.tag.editor.moveup', this);
    }
  };

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

      if (!isObject(position)) {
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

      _this.text = null;
      _this.position = position;
      _this.pointer = {};
      _this.action = false;

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
      value: function setText() {
        var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

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

          this.popupElement.innerHTML = this.text;
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
      value: function setPosition() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.position.x;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.position.y;

        if (!isNumber(x)) {
          throw new TypeError(TypeErrorMessage.getFloatMessage(x));
        }

        if (!isNumber(y)) {
          throw new TypeError(TypeErrorMessage.getFloatMessage(y));
        }

        var isCanceled = !this.emit('taggd.tag.change', this);

        if (!isCanceled) {
          var wrapperElement = this.wrapperElement,
              position = this.position,
              Taggd = this.Taggd;
          var _Taggd$imageData = Taggd.imageData,
              left = _Taggd$imageData.left,
              top = _Taggd$imageData.top,
              ratio = _Taggd$imageData.ratio;
          position.left = ratio * position.x + left;
          position.top = ratio * position.y + top;
          setStyle(wrapperElement, {
            left: position.left,
            top: position.top
          });
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

        if (!isObject(attributes)) {
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

        if (!isObject(attributes)) {
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
       * Enable editor mode
       * @return {Taggd.Tag} Current tag
       */

    }, {
      key: "enableEditorMode",
      value: function enableEditorMode() {
        var isCanceled = !this.emit('taggd.tag.editor.enable', this);

        if (!isCanceled) {
          addClass(this.buttonElement, 'taggd--grab');
          this.buttonElement.addEventListener('mousedown', this.tagDownHander = this.tagDownHander.bind(this));
          document.addEventListener('mousemove', this.tagMoveHander = this.tagMoveHander.bind(this));
          document.addEventListener('mouseup', this.tagUpHander = this.tagUpHander.bind(this));
        }

        return this;
      }
      /**
       * Disable editor mode
       * @return {Taggd.Tag} Current tag
       */

    }, {
      key: "disableEditorMode",
      value: function disableEditorMode() {
        var isCanceled = !this.emit('taggd.tag.editor.disable', this);

        if (!isCanceled) {
          removeClass(this.buttonElement, 'taggd--grab');
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
          position: this.position,
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

        if (!isObject(attributes)) {
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
          left: "".concat(x, "px"),
          top: "".concat(y, "px")
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

  assign(Tag.prototype, TagEffect);

  var TaggdEffect = {
    /**
     * load image and reset image
     * @param {Taggd.Tag[]} tags - An array of tags
     * @return {undefined}
     */
    loadImage: function loadImage(tags) {
      var _this = this;

      this.emit('taggd.editor.load', this);
      var image = this.image,
          wrapper = this.wrapper;
      var parentWidth = wrapper.offsetWidth || 500;
      var parentHeight = wrapper.offsetHeight || 300;
      var newImage = document.createElement('img');
      addClass(wrapper, 'taggd--loading');

      newImage.onload = function () {
        removeClass(wrapper, 'taggd--loading'); // Original aspect ratio

        var naturalWidth = image.naturalWidth,
            naturalHeight = image.naturalHeight;
        var aspectRatio = naturalWidth / naturalHeight; // Full center in default

        var width = parentWidth;
        var height = parentHeight;

        if (parentHeight * aspectRatio > parentWidth) {
          height = parentWidth / aspectRatio;
        } else {
          width = parentHeight * aspectRatio;
        } // Init image style


        var imageData = {
          width: width,
          height: height,
          naturalWidth: naturalWidth,
          naturalHeight: naturalHeight,
          ratio: width / naturalWidth,
          left: (parentWidth - width) / 2,
          top: (parentHeight - height) / 2
        };
        var initialImageData = assign({}, imageData);
        _this.imageData = imageData;
        _this.initialImageData = initialImageData; // Init tags

        _this.setTags(tags);

        _this.imageChangeRender();

        _this.emit('taggd.editor.loaded', _this);
      };

      newImage.onerror = function () {
        _this.emit('taggd.editor.loaderror', _this);
      };

      newImage.src = image.src;
    },

    /**
     * change image reset style
     * @param {Object} style style change
     * @return {undefined}
     */
    imageChangeRender: function imageChangeRender() {
      var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      style = _objectSpread2(_objectSpread2({}, this.imageData), style);
      setStyle(this.image, {
        width: style.width,
        height: style.height,
        marginLeft: style.left,
        marginTop: style.top
      }); // update tags position

      this.tags.forEach(function (tag) {
        return tag.setPosition();
      });
    },

    /**
     * image click/dblclick hander
     * @param {EventTarget} event
     * @return {undefined}
     */
    imageClickHandler: function imageClickHandler(event) {
      var imageData = this.imageData;
      var offset = getOffset(this.image);
      var position = {
        x: (event.pageX - offset.left) / imageData.width * imageData.naturalWidth,
        y: (event.pageY - offset.top) / imageData.height * imageData.naturalHeight
      };
      this.emit('taggd.editor.add', this, position);
    },

    /**
     * image wheel hander
     * @param {EventTarget} event
     * @return {undefined}
     */
    imageZoomHander: function imageZoomHander(event) {
      var _this2 = this;

      if (this.wheeling) {
        return;
      }

      this.wheeling = true;
      setTimeout(function () {
        _this2.wheeling = false;
      }, 50);
      event.preventDefault();
      var options = this.options,
          image = this.image,
          imageData = this.imageData;
      var width = imageData.width,
          height = imageData.height,
          naturalWidth = imageData.naturalWidth,
          naturalHeight = imageData.naturalHeight;
      var delta = 1;
      var ratio = options.zoomRatio;

      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }

      ratio *= -delta;

      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }

      var zoomRatioMin = Math.max(0.01, options.zoomRatioMin);
      var zoomRatioMax = Math.min(100, options.zoomRatioMax);
      ratio = width * ratio / naturalWidth;
      ratio = Math.min(Math.max(ratio, zoomRatioMin), zoomRatioMax);
      var offset = getOffset(image);
      var newWidth = naturalWidth * ratio;
      var newHeight = naturalHeight * ratio;
      var offsetWidth = newWidth - width;
      var offsetHeight = newHeight - height;
      imageData.ratio = ratio;
      imageData.width = newWidth;
      imageData.height = newHeight;
      imageData.left -= offsetWidth * ((event.pageX - offset.left) / newWidth);
      imageData.top -= offsetHeight * ((event.pageY - offset.top) / newHeight);
      this.imageChangeRender();
      this.emit('taggd.editor.zoom', this);
    },

    /**
     * image mousedown hander
     * @param {EventTarget} event
     * @return {undefined}
     */
    imageDownHander: function imageDownHander(event) {
      event.preventDefault();
      addClass(this.wrapper, 'taggd--grabbing');
      this.action = 'move';
      this.pointer = assign(getPointer(event), {
        moveX: this.imageData.left,
        moveY: this.imageData.top
      });
      this.emit('taggd.editor.movedown', this);
    },

    /**
     * image mousemove hander
     * @param {EventTarget} event
     * @return {undefined}
     */
    imageMoveHander: function imageMoveHander(event) {
      if (!this.action) {
        return;
      }

      event.preventDefault();
      var imageData = this.imageData,
          pointer = this.pointer;

      var _getPointer = getPointer(event, true),
          endX = _getPointer.endX,
          endY = _getPointer.endY;

      imageData.left = pointer.moveX + (endX - pointer.startX);
      imageData.top = pointer.moveY + (endY - pointer.startY);
      this.imageChangeRender();
      this.emit('taggd.editor.move', this);
    },

    /**
     * image mouseup hander
     * @param {EventTarget} event
     * @return {undefined}
     */
    imageUpHander: function imageUpHander(event) {
      if (!this.action) {
        return;
      }

      event.preventDefault();
      removeClass(this.wrapper, 'taggd--grabbing');
      this.action = false;
      this.emit('taggd.editor.moveup', this);
    }
  };

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
      _this.wrapper.className = 'taggd';
      image.classList.add('taggd__image');
      image.parentElement.insertBefore(_this.wrapper, image);

      _this.wrapper.appendChild(image);

      _this.image = image;
      _this.options = {};
      _this.imageData = {};
      _this.initialImageData = {};
      _this.tags = [];
      _this.pointer = {};
      _this.action = false;

      _this.setOptions(options); // TODO: Subscriptions do not fire after instantiation 'taggd.editor.load'


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
          } // Route all tag events through taggd instance


          tag.onAnything(function (eventName) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            _this2.emit.apply(_this2, [eventName, _this2].concat(args));
          }); // Establish contact with Taggd

          tag.Taggd = this;
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
          addClass(this.wrapper, 'taggd--pointer');
          this.image.addEventListener(this.options.addEvent, this.imageClickHandler = this.imageClickHandler.bind(this));
          this.image.addEventListener('wheel', this.imageZoomHander = this.imageZoomHander.bind(this));
          this.image.addEventListener('mousedown', this.imageDownHander = this.imageDownHander.bind(this));
          document.addEventListener('mousemove', this.imageMoveHander = this.imageMoveHander.bind(this));
          document.addEventListener('mouseup', this.imageUpHander = this.imageUpHander.bind(this));
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
          removeClass(this.wrapper, 'taggd--pointer');
          this.image.removeEventListener(this.options.addEvent, this.imageClickHandler);
          this.image.removeEventListener('wheel', this.imageZoomHander);
          this.image.removeEventListener('mousedown', this.imageDownHander);
          document.removeEventListener('mousemove', this.imageMoveHander);
          document.removeEventListener('mouseup', this.imageUpHander);
        }

        return this;
      }
    }]);

    return Taggd;
  }(EventEmitter);

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
    hideDelay: 500
  };

  Taggd.Tag = Tag;

  return Taggd;

})));
