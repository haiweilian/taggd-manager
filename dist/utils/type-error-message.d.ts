declare const TypeErrorMessage: {
    /**
     * Get the TypeError message
     * @param {Object} object - The tested object
     * @param {String} expectedType - A string describing the expected type
     * @return {String} The error message
     */
    getMessage: (object: unknown, expectedType: unknown) => string;
    /**
     * Get the TypeError Array message
     * @param {Object} object - The tested object
     * @param {String} expectedType - The expected type of all array items
     * @return {String} The error message
     */
    getArrayMessage: (object: unknown, expectedType: unknown) => string;
    /**
     * Get the TypeError Function message
     * @param {Object} object - The tested object
     * @return {String} The error message
     */
    getFunctionMessage: (object: unknown) => string;
    /**
     * Get the TypeError Integer message
     * @param {Object} object - The tested object
     * @return {String} The error message
     */
    getIntegerMessage: (object: unknown) => string;
    /**
     * Get the TypeError Float message
     * @param {Object} object - The tested object
     * @return {String} The error message
     */
    getFloatMessage: (object: unknown) => string;
    /**
     * Get the TypeError Object message
     * @param {Object} object - The tested object
     * @return {String} The error message
     */
    getObjectMessage: (object: unknown) => string;
    /**
     * Get the TypeError Taggd.Tag message
     * @param {Object} object - The tested object
     * @return {String} The error message
     */
    getTagMessage: (object: unknown) => string;
    /**
     * Get TypeError message
     * @param {Object} object - The tested object
     * @param {String} message - The type message
     * @return {String} The error message
     */
    getTypeErrorMessage: (object: unknown, message: unknown) => string;
};
export default TypeErrorMessage;
