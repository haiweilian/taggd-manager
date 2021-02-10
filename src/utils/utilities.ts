import { IOffset, IPointer, IStyleDeclaration } from '../types/index'

const REGEXP_SUFFIX = /^(?:width|height|left|top|marginLeft|marginTop)$/

/**
 * Check wheter an object is an instance of type
 * @param {Object} object - The object to test
 * @param {Object} type - The class to test
 * @return {Boolean} Returns `true` if the given value is an instance of type, else `false`.
 */
export function ofInstance(object: object, type: any): boolean {
  return object instanceof type
}

/**
 * Check if the given value is a string.
 * @param {*} value - The value to check.
 * @return {Boolean} Returns `true` if the given value is a string, else `false`.
 */
export function isString(value: unknown): boolean {
  return typeof value === 'string'
}

/**
 * Check if the given value is a number.
 * @param {*} value - The value to check.
 * @return {Boolean} Returns `true` if the given value is a number, else `false`.
 */
export function isNumber(value: unknown): boolean {
  return typeof value === 'number' && !Number.isNaN(value)
}

/**
 * Check if the given value is undefined.
 * @param {*} value - The value to check.
 * @return {Boolean} Returns `true` if the given value is undefined, else `false`.
 */
export function isUndefined(value: unknown): boolean {
  return typeof value === 'undefined'
}

/**
 * Check if the given value is an object.
 * @param {*} value - The value to check.
 * @return {Boolean} Returns `true` if the given value is an object, else `false`.
 */
export function isObject(value: unknown): boolean {
  return typeof value === 'object' && value !== null
}

/**
 * Check if the given value is a function.
 * @param {*} value - The value to check.
 * @return {Boolean} Returns `true` if the given value is a function, else `false`.
 */
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function'
}

/**
 * Iterate the given data.
 * @param {*} data - The data to iterate.
 * @param {Function} callback - The process function for each element.
 * @return {*} The original data.
 */
export function forEach(data: any, callback: Function): any {
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
 * @return {Object} The extended object.
 */
export function assign(obj: any, ...args: any): object {
  if (isObject(obj) && args.length > 0) {
    args.forEach((arg: any) => {
      if (isObject(arg)) {
        Object.keys(arg).forEach((key) => {
          obj[key] = arg[key]
        })
      }
    })
  }
  return obj
}

/**
 * Apply styles to the given element.
 * @param {HTMLElement} element - The target element.
 * @param {CSSStyleDeclaration} styles - The styles for applying.
 */
export function setStyle(element: HTMLElement, styles: IStyleDeclaration): void {
  forEach(styles, (value: any, property: any) => {
    if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
      value += 'px'
    }

    element.style[property] = value
  })
}

/**
 * Escape a string for using in HTML.
 * @param {String} value - The string to escape.
 * @return {String} Returns the escaped string.
 */
export function escapeHTMLEntities(value: string): string {
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
 * @param {HTMLElement} element - The element to check.
 * @param {String} value - The class to search.
 * @return {Boolean} Returns `true` if the special class was found.
 */
export function hasClass(element: HTMLElement, value: string): boolean {
  if (!element || !value) {
    return false
  }

  return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1
}

/**
 * Add classes to the given element.
 * @param {HTMLElement} element - The target element.
 * @param {String} value - The classes to be added.
 */
export function addClass(element: HTMLElement, value: string): void {
  if (!element || !value) {
    return
  }

  // if (isNumber(element.length)) {
  //   forEach(element, (elem) => {
  //     addClass(elem, value)
  //   })
  //   return
  // }

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
 * @param {HTMLElement} element - The target element.
 * @param {String} value - The classes to be removed.
 */
export function removeClass(element: HTMLElement, value: string): void {
  if (!element || !value) {
    return
  }

  // if (isNumber(element.length)) {
  //   forEach(element, (elem) => {
  //     removeClass(elem, value)
  //   })
  //   return
  // }

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
 * @param {HTMLElement} element - The target element.
 * @param {String} value - The classes to be toggled.
 */
export function toggleClass(element: HTMLElement, value: string): void {
  if (!value) {
    return
  }

  // if (isNumber(element.length)) {
  //   forEach(element, (elem) => {
  //     toggleClass(elem, value, added)
  //   })
  //   return
  // }

  if (element.classList) {
    element.classList.toggle(value)
  }

  if (hasClass(element, value)) {
    removeClass(element, value)
  } else {
    addClass(element, value)
  }
}

/**
 * Get the offset base on the document.
 * @param {HTMLElement} element - The target element.
 * @return {Object} The offset data.
 */
export function getOffset(element: HTMLElement): IOffset {
  const box = element.getBoundingClientRect()

  return {
    top: box.top + (window.pageYOffset - document.documentElement.clientTop),
    left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
  }
}

/**
 * Get a pointer from an event object.
 * @param {MouseEvent} event - The target event object.
 * @return {Object} The result pointer contains start and/or end point coordinates.
 */
export function getPointer(event: MouseEvent): IPointer {
  return {
    elX: event.pageX,
    elY: event.pageY,
    endX: event.pageX,
    endY: event.pageY,
    startX: event.pageX,
    startY: event.pageY,
  }
}

/**
 * Get the rolling ratio.
 * @param {WheelEvent} event - The target event object.
 * @param {Number} zoomRatio - The zoom ratio.
 * @return {Number} The result ratio.
 */
export function getWheelRatio(event: WheelEvent, zoomRatio: number): number {
  let delta = 1
  let ratio = zoomRatio

  if (event.deltaY) {
    delta = event.deltaY > 0 ? 1 : -1
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
