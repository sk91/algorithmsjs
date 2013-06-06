/**
 * Selection sort
 * 
 * Time complexity
 * +++++++++++++++++++++++++++++++++++++++
 * Best:      O(n ^ 2)
 * Average:   O(n ^ 2)
 * Worst:     O(n ^ 2)
 *
 * Worst case auxiliary space complexity
 * ++++++++++++++++++++++++++++++++++++++++
 * O(1)
 *
 * Data structure
 * +++++++++++++++++++++++++++++++++++++++++
 * Array
 */


var utils = require('../utils');


var selection_sort = module.exports = function (arr) {
  var sort_array = arr.slice(0);
  select_sort(sort_array);
  return sort_array;
}


function select_sort (arr) {
  var i, j, min;

  for (i = 0; i < arr.length - 1; i++){
    min = i;

    for (j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    utils.swap(arr, i, min);
  }
}
