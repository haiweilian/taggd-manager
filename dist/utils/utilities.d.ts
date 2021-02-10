import { IOffset, IPointer, IStyleDeclaration } from '../types/index';
/**
 * Check wheter an object is an instance of type
 * @param {Object} object - The object to test
 * @param {Object} type - The class to test
 * @return {Boolean} Returns `true` if the given value is an instance of type, else `false`.
 */
export declare function ofInstance(object: object, type: any): boolean;
/**
 * Check if the given value is a string.
 * @param {*} value - The value to check.
 * @return {Boolean} Returns `true` if the given value is a string, else `false`.
 */
export declare function isString(value: unknown): boolean;
/**
 * Check if the given value is a number.
 * @param {*} value - The value to check.
 * @return {Boolean} Returns `true` if the given value is a number, else `false`.
 */
export declare function isNumber(value: unknown): boolean;
/**
 * Check if the given value is undefined.
 * @param {*} value - The value to check.
 * @return {Boolean} Returns `true` if the given value is undefined, else `false`.
 */
export declare function isUndefined(value: unknown): boolean;
/**
 * Check if the given value is an object.
 * @param {*} value - The value to check.
 * @return {Boolean} Returns `true` if the given value is an object, else `false`.
 */
export declare function isObject(value: unknown): boolean;
/**
 * Check if the given value is a function.
 * @param {*} value - The value to check.
 * @return {Boolean} Returns `true` if the given value is a function, else `false`.
 */
export declare function isFunction(value: unknown): value is Function;
/**
 * Iterate the given data.
 * @param {*} data - The data to iterate.
 * @param {Function} callback - The process function for each element.
 * @return {*} The original data.
 */
export declare function forEach(data: any, callback: Function): any;
/**
 * Extend the given object.
 * @param {*} obj - The object to be extended.
 * @param {*} args - The rest objects which will be merged to the first object.
 * @return {Object} The extended object.
 */
export declare function assign(obj: any, ...args: any): object;
/**
 * Apply styles to the given element.
 * @param {HTMLElement} element - The target element.
 * @param {CSSStyleDeclaration} styles - The styles for applying.
 */
export declare function setStyle(element: HTMLElement, styles: IStyleDeclaration): void;
/**
 * Escape a string for using in HTML.
 * @param {String} value - The string to escape.
 * @return {String} Returns the escaped string.
 */
export declare function escapeHTMLEntities(value: string): string;
/**
 * Check if the given element has a special class.
 * @param {HTMLElement} element - The element to check.
 * @param {String} value - The class to search.
 * @return {Boolean} Returns `true` if the special class was found.
 */
export declare function hasClass(element: HTMLElement, value: string): boolean;
/**
 * Add classes to the given element.
 * @param {HTMLElement} element - The target element.
 * @param {String} value - The classes to be added.
 */
export declare function addClass(element: HTMLElement, value: string): void;
/**
 * Remove classes from the given element.
 * @param {HTMLElement} element - The target element.
 * @param {String} value - The classes to be removed.
 */
export declare function removeClass(element: HTMLElement, value: string): void;
/**
 * Add or remove classes from the given element.
 * @param {HTMLElement} element - The target element.
 * @param {String} value - The classes to be toggled.
 */
export declare function toggleClass(element: HTMLElement, value: string): void;
/**
 * Get the offset base on the document.
 * @param {HTMLElement} element - The target element.
 * @return {Object} The offset data.
 */
export declare function getOffset(element: HTMLElement): IOffset;
/**
 * Get a pointer from an event object.
 * @param {MouseEvent} event - The target event object.
 * @return {Object} The result pointer contains start and/or end point coordinates.
 */
export declare function getPointer(event: MouseEvent): IPointer;
/**
 * Get the rolling ratio.
 * @param {WheelEvent} event - The target event object.
 * @param {Number} zoomRatio - The zoom ratio.
 * @return {Number} The result ratio.
 */
export declare function getWheelRatio(event: WheelEvent, zoomRatio: number): number;
