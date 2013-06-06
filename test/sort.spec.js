var unsorted_array, sorted_array;



describe("Sort", function () {
  beforeEach(function () {
    unsorted_array = [2, 1, 4, 65, 1, 43, 2, 6, 7, 3, 2, 1, 123, 4, 52, 4, 6, 7, 3, 23, 5];
    sorted_array   = [1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 6, 6, 7, 7, 23, 43, 52, 65, 123];
  });


  it("buble sort should sort an array", function () {
    var bubble_sort = require("../lib/sort/bubble-sort");
    sort_test(bubble_sort);
  });


  it('merge sort should sort an array', function () {
    var merge_sort = require("../lib/sort/merge-sort");
    sort_test(merge_sort);
  });

  it('quick sort should sort an array', function () {
    var quick_sort = require("../lib/sort/quick-sort");
    sort_test(quick_sort);
  });

  it('heap sort should sort an array', function () {
    var heap_sort = require("../lib/sort/heap-sort");
    sort_test(heap_sort);
  });

  it("insertion sort should sort an array", function () {
    var insertion_sort = require("../lib/sort/insertion-sort");
    sort_test(insertion_sort);
  });


  function sort_test(strategy) {
    expect(strategy(unsorted_array))
      .toEqual(sorted_array);

    expect(unsorted_array)
      .not.toEqual(sorted_array);
  }
});




