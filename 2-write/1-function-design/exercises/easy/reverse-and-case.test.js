// #todo

'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */

// -------- your solutions --------

const reversedCasify = (text = '', lowerCase = true) => {
    return lowerCase
        ? text.split('').reverse().join('').toLowerCase()
        : text.split('').reverse().join('').toUpperCase();
};

const mySolutions = [reversedCasify];

for (const solution of mySolutions) {
    describe(
        solution.name + ': reverses a string then sets to lower or upper case',
        () => {
            describe("the function's default parameters", () => {
                it('second parameter defaults to true', () => {
                    expect(solution('asdf')).toEqual('fdsa');
                });
                it('first parameter defaults to an empty string', () => {
                    expect(solution()).toEqual('');
                });
            });
            // write the tests indicated by the comments
            describe('when set to lower case', () => {
                // when the text is an empty string
                it('empty text', () => {
                    expect(solution('', true)).toEqual('');
                });
                // when the text is all upper case
                it('uppercased text', () => {
                    expect(solution('ASDF', true)).toEqual('fdsa');
                });
                // when the text is all lower case
                it('lowercased text', () => {
                    expect(solution('asdf', true)).toEqual('fdsa');
                });
                // when the text is mixed upper and lower case
                it('mixed text', () => {
                    expect(solution('AsDf', true)).toEqual('fdsa');
                });
                // when the text contains punctuation
                it('text with punctuation', () => {
                    expect(solution('.ASDF,', true)).toEqual(',fdsa.');
                });
                // when the text contains numbers
                it('text with numbers', () => {
                    expect(solution('qw23er', true)).toEqual('re32wq');
                });
            });
            describe('when set to upper case', () => {
                // when the text is an empty string
                it('empty text', () => {
                    expect(solution('', false)).toEqual('');
                });
                // when the text is all upper case
                it('uppercased text', () => {
                    expect(solution('ASDF', false)).toEqual('FDSA');
                });
                // when the text is all lower case
                it('lowercased text', () => {
                    expect(solution('asdf', false)).toEqual('FDSA');
                });
                // when the text is mixed upper and lower case
                it('mixed text', () => {
                    expect(solution('AsDf', false)).toEqual('FDSA');
                });
                // when the text contains punctuation
                it('text with punctuation', () => {
                    expect(solution('.ASDF,', false)).toEqual(',FDSA.');
                });
                // when the text contains numbers
                it('text with numbers', () => {
                    expect(solution('qw23er', false)).toEqual('RE32WQ');
                });
            });
        },
    );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
