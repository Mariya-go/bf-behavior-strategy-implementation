'use strict';

/**
 * Add Two Arrays of numbers.
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array} sum of arrays
 */

export const sumOfArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        throw new TypeError('arrays have different length');
    }

    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i] + arr2[i]);
    }
    return newArr;
};
