// #todo

'use strict';

/**
 * takes an array of strings and returns a new array of numbers
 *  the new array contains all the numbery strings, cast to numbers
 * does not modify the argument (no side-effects)
 * @param {string[]} arrayOfStrings - the array of strings
 * @returns {number[]} an array containing only numbers, and not NaN
 * @example
 *  ['1', '2', 'e', '.'] // --> [1, 2]
 */

// -------- your solutions --------

const numberify = (arrayOfStrings = []) => {
    const numberifyArr = [];
    arrayOfStrings.forEach((item) => {
        const numberItem = Number(item);
        if (!Number.isNaN(numberItem)) {
            numberifyArr.push(Number(item));
        } else {
            return;
        }
    });
    return numberifyArr;
};

console.log(numberify(['1', 's', '3', ',', '/', '5']));

const mySolutions = [numberify];

for (const solution of mySolutions) {
    describe(solution.name + ': numbery-numberify', () => {
        describe('array of numbers and strings', () => {
            it('array of numbers and symbols in strings', () => {
                const actual = ['1', 's', '3', ',', '/', '5'];
                const expected = [1, 3, 5];
                expect(solution(actual)).toEqual(expected);
            });
            it('array of numbers in strings', () => {
                const actual = ['1', '2', '3', '4', '5', '6'];
                const expected = [1, 2, 3, 4, 5, 6];
                expect(solution(actual)).toEqual(expected);
            });
            it('array of symbols in strings', () => {
                const actual = ['d', 's', 'b', ',', '/', '.'];
                const expected = [];
                expect(solution(actual)).toEqual(expected);
            });
            it('empty array', () => {
                const actual = [];
                const expected = [];
                expect(solution(actual)).toEqual(expected);
            });
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings contains non-strings"); } const c = a.map(a => +a), d = c.filter(a => !Number.isNaN(a)); return d }
