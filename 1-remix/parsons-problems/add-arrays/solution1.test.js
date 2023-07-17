'use strict';

import { sumOfArrays } from './solution1.js';

describe('addArrays', () => {
    it('[1, 2], [4, 5] -> [5, 7]', () => {
        expect(sumOfArrays([1, 2], [4, 5])).toEqual([5, 7]);
    });

    it('[-1, 3, 8], [10, 2, -5] -> [9, 5, 3]', () => {
        expect(sumOfArrays([-1, 3, 8], [10, 2, -5])).toEqual([9, 5, 3]);
    });

    it(' [0], [0] -> [0]', () => {
        expect(sumOfArrays([0], [0])).toEqual([0]);
    });

    it('should throw an error ', () => {
        expect(() => sumOfArrays(['a'], ['b', 'c'])).toThrow(
            'arrays have different length',
        );
    });

    it('should throw an error', () => {
        expect(() => sumOfArrays(['a'], ['b', 'c'])).toThrow(
            'arrays have different length',
        );
    });
});
