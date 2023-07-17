// #todo

'use strict';

/**
 * sums all numbery strings in an array of strings
 * returns 0 if the array is empty
 * it does not modify the original array (no side-effects)
 * @param {string[]} arr - the array of strings
 * @returns {number} the sum of all numbery strings
 */

// -------- your solutions --------

const mapFilterReduce = (arr) => {
    // these work, you need to pass them to the right array methods
    const isNotNaN = (entry) => !Number.isNaN(entry);
    const sumNumbers = (acc, next) => acc + next;
    const castToNumber = (entry) => Number(entry);

    // fill in the array methods and pass in the correct logic
    const sumOfNumberies = arr
        .map(castToNumber)
        .filter(isNotNaN)
        .reduce(sumNumbers, 0);

    return sumOfNumberies;
};

// -------- your solutions --------

for (const solution of [
    secretSolution,
    // mapFilterReduce,
]) {
    describe(solution.name + ': sum of numbery strings', () => {
        describe('correctly summed numbery strings', () => {
            it('array contains a numbery strings', () => {
                const actual = solution(['2', '3', '4', 'a']);
                expect(actual).toEqual(9);
            });
            it('array does not contains a numbery strings', () => {
                const actual = solution(['f', '.', '/', 'a']);
                expect(actual).toEqual(0);
            });
            it('array contains all numbery strings', () => {
                const actual = solution(['2', '3', '4', '8']);
                expect(actual).toEqual(17);
            });
            it('empty array', () => {
                const actual = solution([]);
                expect(actual).toEqual(0);
            });
        });
        describe('does not modify the argument', () => {
            it('returns a new array', () => {
                const arg = [];
                const actual = solution(arg);
                const areNotTheSameArray = arg !== actual;
                expect(areNotTheSameArray).toEqual(true);
            });
            it('does not modify the argument', () => {
                const arg = ['1', '2', '3'];
                solution(arg);
                expect(arg).toEqual(['1', '2', '3']);
            });
        });
    });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arr is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arr contains non-strings"); } const c = a.map(a => +a).filter(a => !Number.isNaN(a)).reduce((a, b) => a + b, 0); return c }
