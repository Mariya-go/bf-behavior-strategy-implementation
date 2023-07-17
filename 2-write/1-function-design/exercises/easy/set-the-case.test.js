// #todo

'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */

// -------- your solutions --------

const casifyText = (text = '', lowerCase = true) => {
    return lowerCase ? text.toLowerCase() : text.toUpperCase();
};

const mySolutions = [casifyText];

for (const solution of mySolutions) {
    describe(solution.name + ': sets a text to lower or upper case', () => {
        describe("the function's default parameters", () => {
            it('second parameter defaults to true', () => {
                expect(solution('asdf')).toEqual('asdf');
            });
            it('first parameter defaults to an empty string', () => {
                expect(solution()).toEqual('');
            });
        });
        // write the tests indicated by the comments
        describe('when set to lower case', () => {
            // when the text is an empty string
            it('text is empty string', () => {
                expect(solution('', true)).toEqual('');
            });
            // when the text is all upper case
            it('text is upper case', () => {
                expect(solution('ASDF', true)).toEqual('asdf');
            });
            // when the text is all lower case
            it('text is lower case', () => {
                expect(solution('asdf', true)).toEqual('asdf');
            });
            // when the text is mixed upper and lower case
            it('text is mixed', () => {
                expect(solution('aSdF', true)).toEqual('asdf');
            });
            // when the text contains punctuation
            it('text contains punctuation', () => {
                expect(solution('a.s,D?', true)).toEqual('a.s,d?');
            });
            // when the text contains numbers
            it('text contains numbers', () => {
                expect(solution('1q2w3e', true)).toEqual('1q2w3e');
            });
        });
        describe('when set to upper case', () => {
            // when the text is an empty string
            it('text is empty string', () => {
                expect(solution('', false)).toEqual('');
            });
            // when the text is all upper case
            it('text is upper case', () => {
                expect(solution('ASDF', false)).toEqual('ASDF');
            });
            // when the text is all lower case
            it('text is lower case', () => {
                expect(solution('asdf', false)).toEqual('ASDF');
            });
            // when the text is mixed upper and lower case
            it('text is mixed', () => {
                expect(solution('AsDf', false)).toEqual('ASDF');
            });
            // when the text contains punctuation
            it('text contains punctuation', () => {
                expect(solution('a.s,D?', false)).toEqual('A.S,D?');
            });
            // when the text contains numbers
            it('text contains numbers', () => {
                expect(solution('1q2w3e', false)).toEqual('1Q2W3E');
            });
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
