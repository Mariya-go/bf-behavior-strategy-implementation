// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------

const reversedString1 = (toReverse = '') => {
    return toReverse.split('').reverse().join('');
};

const reversedString2 = (toReverse = '') => {
    let reversed = '';
    for (const letter of toReverse) {
        reversed = letter + reversed;
    }
    return reversed;
};

const mySolutions = [reversedString1, reversedString2];
for (const solution of mySolutions) {
    // the main test suite for the function
    describe(solution.name + ': reverses a string', () => {
        it('default parameter is an empty string -> ""', () => {
            expect(solution()).toEqual('');
        });
        it('an empty string -> ""', () => {
            expect(solution('')).toEqual('');
        });
        it('a string with all capital letters', () => {
            expect(solution('ASDF')).toEqual('FDSA');
        });
        // write at least 5 more tests ...
        it('a string with special symbols', () => {
            expect(solution('.,</>')).toEqual('>/<,.');
        });
        it('a string with one symbol', () => {
            expect(solution('a')).toEqual('a');
        });
        it('a string with same symbols', () => {
            expect(solution('aaa')).toEqual('aaa');
        });
        it('a string with same symbols', () => {
            expect(solution('racecar')).toEqual('racecar');
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
