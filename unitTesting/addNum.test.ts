// import { sum } from "./addNum";
// const sum = require('./addNum')
// describe('sum', () => {
//     it('summation of numbers', () => {
//         const res = sum(1, 2);
//         expect(res).toBe(3);
//     })
// });
// const sum = require('./addNum')
import { sum } from './addNum';

test('sum', () => {
    const value = sum(1, 2)
    expect(value).toBe(3)
})