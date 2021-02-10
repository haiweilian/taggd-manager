const TypeErrorMessage = {
  /**
   * Get the TypeError message
   * @param {Object} object - The tested object
   * @param {String} expectedType - A string describing the expected type
   * @return {String} The error message
   */
  getMessage: (object: unknown, expectedType: unknown): string => `${object} should be ${expectedType}`,

  /**
   * Get the TypeError Array message
   * @param {Object} object - The tested object
   * @param {String} expectedType - The expected type of all array items
   * @return {String} The error message
   */
  getArrayMessage: (object: unknown, expectedType: unknown): string => {
    if (expectedType) {
      return TypeErrorMessage.getTypeErrorMessage(object, `an array of ${expectedType}`)
    }
    return TypeErrorMessage.getTypeErrorMessage(object, 'an array')
  },

  /**
   * Get the TypeError Function message
   * @param {Object} object - The tested object
   * @return {String} The error message
   */
  getFunctionMessage: (object: unknown): string => TypeErrorMessage.getTypeErrorMessage(object, 'a function'),

  /**
   * Get the TypeError Integer message
   * @param {Object} object - The tested object
   * @return {String} The error message
   */
  getIntegerMessage: (object: unknown): string => TypeErrorMessage.getTypeErrorMessage(object, 'an integer'),

  /**
   * Get the TypeError Float message
   * @param {Object} object - The tested object
   * @return {String} The error message
   */
  getFloatMessage: (object: unknown): string => TypeErrorMessage.getTypeErrorMessage(object, 'a floating number'),

  /**
   * Get the TypeError Object message
   * @param {Object} object - The tested object
   * @return {String} The error message
   */
  getObjectMessage: (object: unknown): string => TypeErrorMessage.getTypeErrorMessage(object, 'an object'),

  /**
   * Get the TypeError Taggd.Tag message
   * @param {Object} object - The tested object
   * @return {String} The error message
   */
  getTagMessage: (object: unknown): string => TypeErrorMessage.getTypeErrorMessage(object, 'a tag'),

  /**
   * Get TypeError message
   * @param {Object} object - The tested object
   * @param {String} message - The type message
   * @return {String} The error message
   */
  getTypeErrorMessage: (object: unknown, message: unknown): string => `${object} is not a ${message}`,
}

export default TypeErrorMessage
