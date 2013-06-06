var utils  = require('../lib/utils');

describe("utils", function () {
  describe("swap", function () {
    it("out of bounds indeces should throw exception", function () {
      var arr = ['a', 'b', 'c'];

      expect(function (){utils.swap(arr, -1,1)})
        .toThrow(new Error("Incorrect input"));

      expect(function (){utils.swap(arr, 10, 1)})
        .toThrow(new Error("Incorrect input"));

      expect(function (){utils.swap(arr, 1, -1)})
        .toThrow(new Error("Incorrect input"));

      expect(function (){utils.swap(arr, 1, 10)})
        .toThrow(new Error("Incorrect input"));

      expect(function (){utils.swap(null, 1, 10)})
        .toThrow(new Error("Incorrect input"));
    });

    it("equal indeces should not change the array", function () {
      var arr = ['a', 'b', 'c'];
      utils.swap(arr, 1, 1);
      expect(arr).toEqual(['a', 'b', 'c']);
    });

    it("different indices should be swapped", function () {
      var arr = ['a', 'b', 'c'];
      utils.swap(arr, 1, 2);
      expect(arr).toEqual(['a', 'c', 'b']);
    });
  });
});