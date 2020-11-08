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
export function ofInstance(object, type) {
  return object instanceof type
}

/**
 * Check if the given value is a string.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a string, else `false`.
 */
export function isString(value) {
  return typeof value === 'string'
}

/**
 * Check if the given value is a number.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a number, else `false`.
 */
export function isNumber(value) {
  return typeof value === 'number' && !Number.isNaN(value)
}

/**
 * Check if the given value is undefined.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
 */
export function isUndefined(value) {
  return typeof value === 'undefined'
}

/**
 * Check if the given value is an object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an object, else `false`.
 */
export function isObject(value) {
  return typeof value === 'object' && value !== null
}

/**
 * Check if the given value is a function.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a function, else `false`.
 */
export function isFunction(value) {
  return typeof value === 'function'
}

/**
 * Iterate the given data.
 * @param {*} data - The data to iterate.
 * @param {Function} callback - The process function for each element.
 * @returns {*} The original data.
 */
export function forEach(data, callback) {
  if (data && isFunction(callback)) {
    if (Array.isArray(data) || isNumber(data.length) /* array-like */) {
      const { length } = data
      let i

      for (i = 0; i < length; i += 1) {
        if (callback.call(data, data[i], i, data) === false) {
          break
        }
      }
    } else if (isObject(data)) {
      Object.keys(data).forEach((key) => {
        callback.call(data, data[key], key, data)
      })
    }
  }

  return data
}

/**
 * Extend the given object.
 * @param {*} obj - The object to be extended.
 * @param {*} args - The rest objects which will be merged to the first object.
 * @returns {Object} The extended object.
 */
/* eslint-disable prettier/prettier */
export const assign = Object.assign || function assign(obj, ...args) {
  if (isObject(obj) && args.length > 0) {
    args.forEach((arg) => {
      if (isObject(arg)) {
        Object.keys(arg).forEach((key) => {
          obj[key] = arg[key]
        })
      }
    })
  }
  return obj
}

const REGEXP_SUFFIX = /^(?:width|height|left|top|marginLeft|marginTop)$/

/* eslint-enable prettier/prettier */
/**
 * Apply styles to the given element.
 * @param {Element} element - The target element.
 * @param {Object} styles - The styles for applying.
 */
export function setStyle(element, styles) {
  const { style } = element

  forEach(styles, (value, property) => {
    if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
      value += 'px'
    }

    style[property] = value
  })
}

/**
 * Escape a string for using in HTML.
 * @param {String} value - The string to escape.
 * @returns {String} Returns the escaped string.
 */
export function escapeHTMLEntities(value) {
  return isString(value)
    ? value
        .replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
    : value
}

/**
 * Check if the given element has a special class.
 * @param {Element} element - The element to check.
 * @param {string} value - The class to search.
 * @returns {boolean} Returns `true` if the special class was found.
 */
export function hasClass(element, value) {
  if (!element || !value) {
    return false
  }

  return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1
}

/**
 * Add classes to the given element.
 * @param {Element} element - The target element.
 * @param {string} value - The classes to be added.
 */
export function addClass(element, value) {
  if (!element || !value) {
    return
  }

  if (isNumber(element.length)) {
    forEach(element, (elem) => {
      addClass(elem, value)
    })
    return
  }

  if (element.classList) {
    element.classList.add(value)
    return
  }

  const className = element.className.trim()

  if (!className) {
    element.className = value
  } else if (className.indexOf(value) < 0) {
    element.className = `${className} ${value}`
  }
}

/**
 * Remove classes from the given element.
 * @param {Element} element - The target element.
 * @param {string} value - The classes to be removed.
 */
export function removeClass(element, value) {
  if (!element || !value) {
    return
  }

  if (isNumber(element.length)) {
    forEach(element, (elem) => {
      removeClass(elem, value)
    })
    return
  }

  if (element.classList) {
    element.classList.remove(value)
    return
  }

  if (element.className.indexOf(value) >= 0) {
    element.className = element.className.replace(value, '')
  }
}

/**
 * Add or remove classes from the given element.
 * @param {Element} element - The target element.
 * @param {string} value - The classes to be toggled.
 * @param {boolean} added - Add only.
 */
export function toggleClass(element, value, added) {
  if (!value) {
    return
  }

  if (isNumber(element.length)) {
    forEach(element, (elem) => {
      toggleClass(elem, value, added)
    })
    return
  }

  // IE10-11 doesn't support the second parameter of `classList.toggle`
  if (added) {
    addClass(element, value)
  } else {
    removeClass(element, value)
  }
}

/**
 * Get the offset base on the document.
 * @param {Element} element - The target element.
 * @returns {Object} The offset data.
 */
export function getOffset(element) {
  const box = element.getBoundingClientRect()

  return {
    left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: box.top + (window.pageYOffset - document.documentElement.clientTop),
  }
}

/**
 * Get a pointer from an event object.
 * @param {Object} event - The target event object.
 * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
 * @returns {Object} The result pointer contains start and/or end point coordinates.
 */
export function getPointer({ pageX, pageY }, endOnly) {
  const end = {
    endX: pageX,
    endY: pageY,
  }

  return endOnly
    ? end
    : {
        timeStamp: Date.now(),
        startX: pageX,
        startY: pageY,
        ...end,
      }
}

/**
 * Get the rolling ratio.
 * @param {Object} event - The target event object.
 * @param {boolean} zoomRatio - The zoom ratio.
 * @returns {number} The result ratio.
 */
export function getWheelRatio(event, zoomRatio) {
  let delta = 1
  let ratio = zoomRatio

  if (event.deltaY) {
    delta = event.deltaY > 0 ? 1 : -1
  } else if (event.wheelDelta) {
    delta = -event.wheelDelta / 120
  } else if (event.detail) {
    delta = event.detail > 0 ? 1 : -1
  }

  ratio *= -delta

  if (ratio < 0) {
    ratio = 1 / (1 - ratio)
  } else {
    ratio = 1 + ratio
  }

  return ratio
}
