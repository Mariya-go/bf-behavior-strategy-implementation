// #todo

'use strict';

/**
 * removes all odd numbers from an array of numbers
 * does not modify the argument (no side-effects)
 * @param {number[]} arrayOfNumbers - the array of numbers to filter
 * @returns {number[]} an array with only even numbers
 */

// -------- your solutions --------

const onlyEven = (arrayOfNumbers = []) => {
    let evenArr = [];
    arrayOfNumbers.forEach((item) => {
        if (item % 2 === 0) {
            evenArr.push(item);
        }
    });
    return evenArr;
};

console.log(onlyEven([]));

const mySolutions = [onlyEven];

for (const solution of mySolutions) {
    describe(solution.name + ':only-even-numbers', () => {
        describe('normal array of numbers', () => {
            it('[0, 1, 2, 3, 4, 5, 6] -> [0, 2, 4, 6]', () => {
                const actual = [0, 1, 2, 3, 4, 5, 6];
                const expected = [0, 2, 4, 6];
                expect(solution(actual)).toEqual(expected);
            });
            it('[10, 11, 12, 13, 14, 15, 16] -> [10, 12, 14, 16]', () => {
                const actual = [10, 11, 12, 13, 14, 15, 16];
                const expected = [10, 12, 14, 16];
                expect(solution(actual)).toEqual(expected);
            });
            it('[0, 2, 2, 4, 4, 6, 6] -> [0, 2, 2, 4, 4, 6, 6]', () => {
                const actual = [0, 2, 2, 4, 4, 6, 6];
                const expected = [0, 2, 2, 4, 4, 6, 6];
                expect(solution(actual)).toEqual(expected);
            });
            it('[1, 3, 5, 7, 9] -> []', () => {
                const actual = [1, 3, 5, 7, 9];
                const expected = [];
                expect(solution(actual)).toEqual(expected);
            });
            it('[] -> []', () => {
                const actual = [];
                const expected = [];
                expect(solution(actual)).toEqual(expected);
            });
            it('[0, 0, 0] -> [0, 0, 0]', () => {
                const actual = [0, 0, 0];
                const expected = [0, 0, 0];
                expect(solution(actual)).toEqual(expected);
            });
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c }
