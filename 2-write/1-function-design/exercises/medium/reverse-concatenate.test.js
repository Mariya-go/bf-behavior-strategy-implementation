// #todo

'use strict';

/**
 * A function that takes an array of strings, reverses it, and combines the strings
 * it does not modify the original array
 * @param {string[]} arrayOfStrings - an array of strings to concatenate, in reverse order
 * @returns {string} - the array elements joined together, in reverse order
 */

// -------- your solutions --------

const reverseConcat = (arrayOfStrings = []) => {
    let reversedString = '';
    for (let i = 0; i < arrayOfStrings.length; i++) {
        reversedString += arrayOfStrings[i].split('').reverse().join('');
    }
    return reversedString;
};

const mySolutions = [reverseConcat];

for (const solution of mySolutions) {
    describe(solution.name + ': reverse-concatenate', () => {
        describe('not empty array of strings', () => {
            it('array of strings', () => {
                const actual = ['test', 'racecar'];
                const expected = 'tsetracecar';
            });
            it('array of numbers', () => {
                const actual = ['12', '23', '34'];
                const expected = '213243';
            });
            it('mixed array', () => {
                const actual = ['12', 'test', '34'];
                const expected = '21tset43';
            });
            it('empty array', () => {
                const actual = [];
                const expected = '';
            });
        });
    });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings does not contain only strings"); } return [...a].reverse().reduce((a, b) => a + b, "") }
