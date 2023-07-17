// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 * Returns the number of even numbers in an array of numbers
 * @param {[]any} numbers - array to filter
 * @returns {number} - number of even numbers in array
 */
export const numberOfEvens = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('numbers includes not only numbers');
    }

    let count = 0;
    for (const item of numbers) {
        if (item % 2 === 0) {
            count++;
        }
    }
    return count;
};
