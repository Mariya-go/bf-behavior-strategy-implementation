// #todo

'use strict';

/**
 * converts two boolean values into a binary string
 *  true become "1", false becomes "0"
 * @param {boolean} [a=false] - the left value
 * @param {boolean} [b=false] - the right value
 * @returns {string}
 * @example
 *  // true, false --> '10'
 *  // false, false --> '00'
 *  // false, true --> '01'
 */

// -------- your solutions --------

const binary1 = (a = false, b = false) => {
    if (a === false && b === false) {
        return '00';
    } else if (a === false && b === true) {
        return '01';
    } else if (a === true && b === false) {
        return '10';
    } else {
        return '11';
    }
};
const binary2 = (a = false, b = false) => {
    if (!a && !b) {
        return '00';
    } else if (!a && b) {
        return '01';
    } else if (a && !b) {
        return '10';
    } else {
        return '11';
    }
};

const binary3 = (a = false, b = false) =>
    a && b ? '11' : a && !b ? '10' : !a && b ? '01' : '00';

const mySolutions = [binary1, binary2, binary3];

for (const solution of mySolutions) {
    // this function only 4 possible combinations of arguments
    //  it's possible test them all and have 100% confidence in the function
    describe(solution.name + ': converts two booleans to binary', () => {
        it('true, true --> "11"', () => {
            const actual = solution(true, true);
            expect(actual).toEqual('11');
        });
        it('true, false --> "10"', () => {
            const actual = solution(true, false);
            expect(actual).toEqual('10');
        });
        it('false, true --> "01"', () => {
            const actual = solution(false, true);
            expect(actual).toEqual('01');
        });
        it('false, false --> "00"', () => {
            const actual = solution(false, false);
            expect(actual).toEqual('00');
        });
    });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(c = false, a = false) { if ("boolean" != typeof c) { throw new TypeError("a is not boolean"); } if ("boolean" != typeof a) { throw new TypeError("b is not boolean"); } let b = ""; return b += c ? "1" : "0", b += a ? "1" : "0", b }
