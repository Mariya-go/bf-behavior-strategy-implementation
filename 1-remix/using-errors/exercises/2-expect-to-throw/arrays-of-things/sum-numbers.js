// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 * sums all the numbers in an array of numbers
 * @param {[]any} numbers
 * @returns {number} = sum of all numbers in array
 */
export const sumNumbers = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('numbers includes not only numbers');
    }

    return numbers.reduce((sum, cur) => sum + cur, 0);
};
