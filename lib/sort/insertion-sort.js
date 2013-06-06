/**
 * Insertion sort
 * 
 * Time complexity
 * +++++++++++++++++++++++++++++++++++++++
 * Best:      O(n)
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


var insertion_sort = module.exports = function (arr) {
  var sort_array = arr.slice(0);
  ins_sort(sort_array);
  return sort_array;
}


function ins_sort (arr) {
  var hole
    , insert_value
    , i;

  for (i = 1; i < arr.length; i++) {
    insert_value = arr[i];
    hole = i;

    while (hole > 0 && insert_value < arr[hole - 1]) {
      arr[hole] = arr[hole - 1];
      hole -= 1;
    }

    arr[hole] = insert_value;
  }
}