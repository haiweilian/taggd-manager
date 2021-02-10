import Tag from './Tag';
import EventEmitter from '../utils/event-emitter';
import { IPointer, IDefaultOptions, ImageData } from '../types/index';
declare class Taggd extends EventEmitter {
    static DEFAULT_OPTIONS: IDefaultOptions;
    static Tag: typeof Tag;
    loadImage: any;
    taggdChangeRender: any;
    taggdClickHandler: any;
    taggdZoomHander: any;
    taggdDownHander: any;
    taggdMoveHander: any;
    taggdUpHander: any;
    wrapper: HTMLElement;
    image: HTMLImageElement;
    options: IDefaultOptions;
    imageData: ImageData;
    initialImageData: ImageData;
    tags: Tag[];
    pointer: IPointer;
    action: string;
    wheeling: boolean;
    /**
     * Create a new taggd instance
     * @param {HTMLElement} image - The image to wrap
     * @param {Object} [options = {}] - The options
     * @param {Array} [data = []] - The tags
     */
    constructor(image: HTMLImageElement, options?: Partial<IDefaultOptions>, data?: Tag[]);
    /**
     * Subscribe to an event.
     * @param {String} eventName - The event to subscribe to.
     * @param {Function} handler - The handler to execute.
     * @return {Taggd} Current Taggd instance
     */
    on(eventName: string, handler: Function): void;
    /**
     * Unsubscribe from an event.
     * @param {String} eventName - The event to unsubscribe from.
     * @param {Function} handler - The handler that was used to subscribe.
     * @return {Taggd} Current Taggd instance
     */
    off(eventName: string, handler: Function): void;
    /**
     * Subscribe to an event and unsubscribe once triggered.
     * @param {String} eventName - The event to subscribe to.
     * @param {Function} handler - The handler to execute.
     * @return {Taggd} Current Taggd instance
     */
    once(eventName: string, handler: Function): void;
    /**
     * Set taggd options
     * @param {Object} options - The options to set
     * @return {Taggd} Current Taggd instance
     */
    setOptions(options: Partial<IDefaultOptions>): this;
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
    map(callback: Function): this;
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
}
export default Taggd;
