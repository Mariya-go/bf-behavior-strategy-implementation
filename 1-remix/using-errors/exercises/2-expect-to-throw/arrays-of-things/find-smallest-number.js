// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 * Find smallest number
 * @param {[]any} numbers - array to find
 * @returns {number} - return smallest number
 */
export const findSmallestNumber = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('numbers is not only numbers');
    }

    return numbers.sort()[0];
};
