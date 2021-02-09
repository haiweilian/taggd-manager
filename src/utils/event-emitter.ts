const EVENT_WILDCARD = '*'

class EventEmitter {
  handlers: { [key: string]: Array<Function> } = {}

  constructor() {
    this.handlers = {}
  }

  /**
   * Subscribe to all event.
   * @param {Function} handler - The handler to execute.
   */
  onAnything(handler: Function): void {
    this.on(EVENT_WILDCARD, handler)
  }

  /**
   * Subscribe to an event.
   * @param {String} eventName - The event to subscribe to.
   * @param {Function} handler - The handler to execute.
   */
  on(eventName: string, handler: Function): void {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = []
    }

    this.handlers[eventName].push(handler)
  }

  /**
   * Unsubscribe from an event.
   * @param {String} eventName - The event to unsubscribe from.
   * @param {Function} handler - The handler that was used to subscribe.
   */
  off(eventName: string, handler: Function): void {
    if (!this.handlers[eventName]) return

    const handlerIndex = this.handlers[eventName].indexOf(handler)

    if (handlerIndex >= 0) {
      this.handlers[eventName].splice(handlerIndex, 1)
    }
  }

  /**
   * Subscribe to an event and unsubscribe once triggered.
   * @param {String} eventName - The event to subscribe to.
   * @param {Function} handler - The handler to execute.
   */
  once(eventName: string, handler: Function): void {
    this.on(eventName, (...args: any) => {
      handler(...args)
      this.off(eventName, handler)
    })
  }

  /**
   * Publish to an event.
   * @param {String} eventName - The event to Publish to.
   * @param {Function} handler - The handler to execute.
   * @return {Boolean} The is canceled.
   */
  emit(eventName: string, ...args: any): boolean {
    let isCanceled = false

    if (this.handlers[EVENT_WILDCARD]) {
      this.handlers[EVENT_WILDCARD].forEach((eventHandler) => {
        const returnValue = eventHandler(eventName, ...args)
        isCanceled = (returnValue !== undefined && !returnValue) || isCanceled
      })
    }

    if (this.handlers[eventName]) {
      this.handlers[eventName].forEach((eventHandler) => {
        const returnValue = eventHandler(...args)
        isCanceled = (returnValue !== undefined && !returnValue) || isCanceled
      })
    }

    return !isCanceled
  }
}

export default EventEmitter
