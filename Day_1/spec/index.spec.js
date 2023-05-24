// const {sum, obj } = require('../index'); //Import functions or code blocks to test
const {sum,positive} = require('../index'); 

describe("testing math utilities", () => {
    it("return of sum function should equal to sum of the values", () => {
      expect(sum([1,8,9,10])).toEqual(28);
    });
  
    it("positive function should equal to positive values", () => {
        expect(positive([1,8,-2,-10])).toEqual([1,8]);
    });
  });
// describe('sum', function() {
//     it('should return the sum of two numbers', function() {
//         expect(sum(1, 2)).toBe(3);
//     });

//     it('should return the sum of three numbers', function() {
//         expect(sum()).toBe(0);
//     });

//     it('should return the sum of four numbers', function() {
//             expect(sum(1, "Ali")).toThrowError();
//     });
// });