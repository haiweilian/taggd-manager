declare class EventEmitter {
    handlers: {
        [key: string]: Array<Function>;
    };
    constructor();
    /**
     * Subscribe to all event.
     * @param {Function} handler - The handler to execute.
     */
    onAnything(handler: Function): void;
    /**
     * Subscribe to an event.
     * @param {String} eventName - The event to subscribe to.
     * @param {Function} handler - The handler to execute.
     */
    on(eventName: string, handler: Function): void;
    /**
     * Unsubscribe from an event.
     * @param {String} eventName - The event to unsubscribe from.
     * @param {Function} handler - The handler that was used to subscribe.
     */
    off(eventName: string, handler: Function): void;
    /**
     * Subscribe to an event and unsubscribe once triggered.
     * @param {String} eventName - The event to subscribe to.
     * @param {Function} handler - The handler to execute.
     */
    once(eventName: string, handler: Function): void;
    /**
     * Publish to an event.
     * @param {String} eventName - The event to Publish to.
     * @param {Function} handler - The handler to execute.
     * @return {Boolean} The is canceled.
     */
    emit(eventName: string, ...args: any): boolean;
}
export default EventEmitter;
