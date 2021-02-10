import EventEmitter from '../utils/event-emitter';
import { IPosition, IPointer } from '../types/index';
declare class Tag extends EventEmitter {
    Taggd: any;
    tagDownHander: any;
    tagMoveHander: any;
    tagUpHander: any;
    wrapperElement: HTMLElement;
    popupElement: HTMLElement;
    buttonElement: HTMLElement;
    text: string;
    position: IPosition;
    pointer: IPointer;
    action: string;
    /**
     * Create a new Tag instance
     * @param {{ x: Number, y: Number }} position - The tag’s coordinates
     * @param {String|Function} text - The tag’s content
     * @param {Object} [buttonAttributes = {}] - The button’s attributes
     * @param {Object} [popupAttributes = {}] - The popup’s attributes
     */
    constructor(position: Pick<IPosition, 'x' | 'y'>, text?: string | Function, buttonAttributes?: {}, popupAttributes?: {});
    /**
     * Subscribe to an event.
     * @param {String} eventName - The event to subscribe to.
     * @param {Function} handler - The handler to execute.
     * @return {Taggd.Tag} Current Taggd.Tag instance
     */
    on(eventName: string, handler: Function): void;
    /**
     * Unsubscribe from an event.
     * @param {String} eventName - The event to unsubscribe from.
     * @param {Function} handler - The handler that was used to subscribe.
     * @return {Taggd.Tag} Current Taggd.Tag instance
     */
    off(eventName: string, handler: Function): void;
    /**
     * Subscribe to an event and unsubscribe once triggered.
     * @param {String} eventName - The event to subscribe to.
     * @param {Function} handler - The handler to execute.
     * @return {Taggd.Tag} Current Taggd.Tag instance
     */
    once(eventName: string, handler: Function): void;
    /**
     * Test whether the tag is hidden or not
     * @return {Boolean} A boolean indicating the tag’s state
     */
    isHidden(): boolean;
    /**
     * Show the tag
     * @return {Taggd.Tag} Current Taggd.Tag instance
     */
    show(): this;
    /**
     * Hide the tag
     * @return {Taggd.Tag} Current Taggd.Tag instance
     */
    hide(): this;
    /**
     * Set the tag’s text
     * @param {String|Function} text - The tag’s content
     * @return {Taggd.Tag} Current Taggd.Tag instance
     */
    setText(text: string | Function): this;
    /**
     * Set the tag’s position
     * @param {Number} x - The tag’s x-coordinate
     * @param {Number} y - The tag’s y-coordinate
     * @return {Taggd.Tag} Current Taggd.Tag instance
     */
    setPosition(x?: number, y?: number): this;
    /**
     * Set the tag button’s attributes
     * @param {Object} atttributes = {} - The attributes to set
     * @return {Taggd.Tag} Current Taggd.Tag instance
     */
    setButtonAttributes(attributes?: {}): this;
    /**
     * Set the tag popup’s attributes
     * @param {Object} atttributes = {} - The attributes to set
     * @return {Taggd.Tag} Current Taggd.Tag instance
     */
    setPopupAttributes(attributes?: {}): this;
    /**
     * Enable editor mode
     * @return {Taggd.Tag} Current Taggd.Tag instance
     */
    enableEditorMode(): this;
    /**
     * Disable editor mode
     * @return {Taggd.Tag} Current Taggd.Tag instance
     */
    disableEditorMode(): this;
    /**
     * Get a Taggd.createFromObject-compatible object
     * @return {Object} A object for JSON
     */
    toJSON(): {
        position: IPosition;
        text: string;
        buttonAttributes: {};
        popupAttributes: {};
    };
    /**
     * Set element attributes
     * @param {DomNode} element - The element the attributes should be set to
     * @param {Object} [attributes = {}] - A map of attributes to set
     * @return {DomNode} The original element
     */
    static setElementAttributes(element: Element, attributes?: {}): Element;
    /**
     * Get the position style
     * @param {Number} x - The tag’s x-coordinate
     * @param {Number} y - The tag’s y-coordinate
     * @return {Object} The style
     */
    static getPositionStyle(x: number, y: number): {
        left: string;
        top: string;
    };
    /**
     * Create a tag from object
     * @param {Object} object - The object containing all information
     * @return {Tag} The created Tag instance
     */
    static createFromObject(object: any): Tag;
}
export default Tag;
