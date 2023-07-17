// #todo

/**
 * Check if all items in array are numbers.
 * @param {[]any} array - array to check
 * @returns {boolean} - true if all items in array are number, false if not
 */

export const isArrayOfNumbers = (array = []) => {
    if (!Array.isArray(array)) {
        return false;
    }
    return array.every((item) => {
        if (typeof item === 'number' && !isNaN(item)) {
            return true;
        } else {
            return false;
        }
    });
};
