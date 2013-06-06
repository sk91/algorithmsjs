/**
 * Bubble sort
 * 
 * Time complexity
 * +++++++++++++++++++++++++++++++++++++++
 * Best:      O(n)
 * Average:   O(n^2)
 * Worst:     O(n^2)
 *
 * Worst case auxiliary space complexity
 * ++++++++++++++++++++++++++++++++++++++++
 * O(1)
 *
 * Data structure
 * +++++++++++++++++++++++++++++++++++++++++
 * Array
 */

var bubble_sort = module.exports = function (arr_in) {
  var arr_sort   = arr_in.slice(0)
    , arr_lenght = arr_sort.length
    , swapped
    , i;

  do {
    swapped = false;
    for (i = 1; i < arr_lenght; i++) {
      if (arr_sort[i - 1] > arr_sort[i]) {
        swap(i - 1, i, arr_sort);
        swapped = true;
      }
    }
  } while (swapped);

  return arr_sort;
};



function swap(i, j, arr) {
  var temp;
  temp   = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}