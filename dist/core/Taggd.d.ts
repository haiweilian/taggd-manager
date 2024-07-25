import EventEmitter from '../utils/event-emitter';
import type { IOptions, IPointer, IImageData, ITaggdEvent } from '../utils/typings';
import Tag from './Tag';
declare class Taggd extends EventEmitter {
    static DEFAULT_OPTIONS: IOptions;
    static Tag: typeof Tag;
    wrapper: HTMLElement;
    image: HTMLImageElement;
    tags: Tag[];
    options: IOptions;
    imageData: IImageData;
    pointer: IPointer;
    isMoved: boolean;
    isMoveing: boolean;
    isWheeling: boolean;
    /**
     * Create a new taggd instance
     * @param {HTMLElement} image - The image to wrap
     * @param {Object} [options = {}] - The options
     * @param {Array} [data = []] - The tags
     */
    constructor(image: HTMLImageElement, options?: Partial<IOptions>, data?: Tag[]);
    /**
     * Subscribe to an event.
     * @param {String} eventName - The event to subscribe to.
     * @param {Function} handler - The handler to execute.
     * @return {Taggd} Current Taggd instance
     */
    on<T extends keyof ITaggdEvent>(eventName: T, handler: ITaggdEvent[T]): void;
    /**
     * Unsubscribe from an event.
     * @param {String} eventName - The event to unsubscribe from.
     * @param {Function} handler - The handler that was used to subscribe.
     * @return {Taggd} Current Taggd instance
     */
    off<T extends keyof ITaggdEvent>(eventName: T, handler: ITaggdEvent[T]): void;
    /**
     * Subscribe to an event and unsubscribe once triggered.
     * @param {String} eventName - The event to subscribe to.
     * @param {Function} handler - The handler to execute.
     * @return {Taggd} Current Taggd instance
     */
    once<T extends keyof ITaggdEvent>(eventName: T, handler: ITaggdEvent[T]): void;
    /**
     * Publish to an event.
     * @param {String} eventName - The event to Publish to.
     * @param {Function} handler - The handler to execute.
     * @return {Boolean} The is canceled.
     */
    emit<T extends keyof ITaggdEvent>(eventName: T, ...args: Parameters<ITaggdEvent[T]>): boolean;
    /**
     * Set taggd options
     * @param {Object} options - The options to set
     * @return {Taggd} Current Taggd instance
     */
    setOptions(options: Partial<IOptions>): this;
    /**
     * Add a single tag
     * @param {Taggd.Tag} tag - The tag to add
     * @return {Taggd} Current Taggd instance
     */
    addTag(tag: Tag): this;
    /**
     * Get a single tag by index
     * @param  {Number} index - The index of the desired tag
     * @return {Taggd.Tag} The tag to get
     */
    getTag(index: number): Tag;
    /**
     * Delete a single tag by index
     * @param {Number} index - The index of the desired tag
     * @return {Taggd} Current Taggd instance
     */
    deleteTag(index: number): this;
    /**
     * Set all tags
     * @param {Taggd.Tag[]} tags An array of tags
     * @return {Taggd} Current Taggd instance
     */
    setTags(tags: Tag[]): this;
    /**
     * Add multiple tags
     * @param {Taggd.Tag[]} tags - An array of tags
     * @return {Taggd} Current Taggd instance
     */
    addTags(tags: Tag[]): this;
    /**
     * Get all tags
     * @return {Taggd.Tag[]} All tags of this Taggd instance
     */
    getTags(): Tag[];
    /**
     * Remove all tags
     * @return {Taggd} Current Taggd instance
     */
    deleteTags(): this;
    /**
     * Iterate and replace all tags
     * @param {Function} callback - The callback to execute for all tags
     * @return {Taggd} Current Taggd instance
     */
    map(callback: (value: Tag, index: number, array: Tag[]) => any): this;
    /**
     * Get all tags json
     * @return {Array} A array for JSON
     */
    toJSON(): {
        position: import("../utils/typings").IPosition;
        text: string;
        buttonAttributes: {};
        popupAttributes: {};
    }[];
    /**
     * Clean up memory
     * @return {Taggd} Current Taggd instance
     */
    destroy(): this;
    /**
     * Enable editor mode
     * @return {Taggd} Current Taggd instance
     */
    enableEditorMode(): this;
    /**
     * Disable editor mode
     * @return {Taggd} Current Taggd instance
     */
    disableEditorMode(): this;
    /**
     * Load image and reset image
     * @param {Taggd.Tag[]} tags - An array of tags
     * @return {Taggd} Current Taggd instance
     */
    private loadImage;
    /**
     * Change image reset style
     * @return {Taggd} Current Taggd instance
     */
    private taggdChangeRender;
    /**
     * Taggd click/dblclick hander
     * @param {MouseEvent} event
     * @return {Taggd} Current Taggd instance
     */
    private taggdClickHandler;
    /**
     * Taggd wheel hander
     * @param {WheelEvent} event
     * @return {Taggd} Current Taggd instance
     */
    taggdZoomHander(event: WheelEvent): this;
    /**
     * Taggd mousedown hander
     * @param {MouseEvent} event
     * @return {Taggd} Current Taggd instance
     */
    taggdDownHander(event: MouseEvent): this;
    /**
     * Taggd mousemove hander
     * @param {MouseEvent} event
     * @return {Taggd} Current Taggd instance
     */
    taggdMoveHander(event: MouseEvent): this;
    /**
     * Taggd mouseup hander
     * @param {MouseEvent} event
     * @return {Taggd} Current Taggd instance
     */
    taggdUpHander(event: MouseEvent): this;
}
export default Taggd;
