// #todo

'use strict';

/**
 * builds an array counting down from `start` to 0
 * @param {number} [start=0] - the number to count down from
 *  start must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from `start` to 0
 */

// -------- your solutions --------

const arrFromStart1 = (start = 0) => {
    if (typeof start !== 'number') {
        throw new TypeError('start is not a number');
    }
    if (!Number.isInteger(start)) {
        throw new TypeError('start is not an integer');
    } else if (start < 0) {
        throw new TypeError('start is less than 0');
    }
    const newArr = [];

    for (let i = start; i >= 0; i--) {
        newArr.push(i);
    }
    return newArr;
};

const mySolutions = [arrFromStart1];

for (const solution of mySolutions) {
    // the main test suite for the function
    describe(solution.name + ': counts down to 0', () => {
        it('default parameter is 0 -> [0]', () => {
            expect(solution()).toEqual([0]);
        });
        it('0 -> [0]', () => {
            expect(solution(0)).toEqual([0]);
        });
        it('1 -> [1, 0]', () => {
            expect(solution(1)).toEqual([1, 0]);
        });
        // write at least 5 more tests ...
        it('3 -> [3, 2, 1, 0]', () => {
            expect(solution(3)).toEqual([3, 2, 1, 0]);
        });
    });
    describe(solution.name + ': counts down to 0', () => {
        it('throws an error if the start is not a number', () => {
            const notPassingANumber = () => solution('2');
            expect(notPassingANumber).toThrowError(TypeError);
            expect(notPassingANumber).toThrowError('start is not a number');
        });
        it('throws an error if the start is not an integer', () => {
            const notPassingANumber = () => solution(1.2);
            expect(notPassingANumber).toThrowError(TypeError);
            expect(notPassingANumber).toThrowError('start is not an integer');
        });
        it('throws an error if the start is less than 0', () => {
            const notPassingANumber = () => solution(-1);
            expect(notPassingANumber).toThrowError(TypeError);
            expect(notPassingANumber).toThrowError('start is less than 0');
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("start is not a number"); if (!Number.isInteger(a)) throw new Error("start is not an integer"); if (0 > a) throw new RangeError("start is less than 0"); const b = []; for (let c = a; 0 <= c; c--)b.push(c); return b }
