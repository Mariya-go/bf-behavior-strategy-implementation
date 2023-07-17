import { noExclamation } from './solution1.js';

describe('addArrays', () => {
    it('"test!" -> "test"', () => {
        expect(noExclamation('test!')).toEqual('test');
    });
    it('"test" -> "test"', () => {
        expect(noExclamation('test')).toEqual('test');
    });
    it('"!!!" -> ""', () => {
        expect(noExclamation('!!!')).toEqual('');
    });
    it('"" -> ""', () => {
        expect(noExclamation('')).toEqual('');
    });
});
