import { repeatedString } from './solution1.js';

describe('repeatedString', () => {
    it('"test", 2 -> "testtest"', () => {
        expect(repeatedString('test', 2)).toEqual('testtest');
    });
    it('"test", 1 -> "test"', () => {
        expect(repeatedString('test', 1)).toEqual('test');
    });
    it('"", 2 -> ""', () => {
        expect(repeatedString('', 2)).toEqual('');
    });
    it('"test", 0 -> ""', () => {
        expect(repeatedString('test', 0)).toEqual('');
    });
});
