// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 * Find greatest number
 * @param {[]any} numbers - array to find
 * @returns {number} - return greatest number
 */
export const findGreatestNumber = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('numbers is not only numbers');
    }

    return numbers.sort()[numbers.length - 1];
};
