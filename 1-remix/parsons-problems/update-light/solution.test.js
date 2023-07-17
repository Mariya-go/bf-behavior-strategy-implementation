import { updateLight } from './solution1.js';

describe('update Light', () => {
    it('"yellow" -> "red"', () => {
        expect(updateLight('yellow')).toEqual('red');
    });
    it('"red" -> "green"', () => {
        expect(updateLight('red', 1)).toEqual('green');
    });
    it('"green" -> "yellow"', () => {
        expect(updateLight('', 2)).toEqual('');
    });
});
