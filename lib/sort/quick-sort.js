/**
 * Quick sort
 *
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


var quick_sort = module.exports = function (arr) {
  var arr_sort = arr.splice(0);
  qsort(arr_sort, 0, arr_sort.length - 1);
  return arr_sort;
};


function qsort(arr, start, end) {
  var pivot;

  if (end < start) {
    return;
  }

  pivot = choose_pivot(start, end);
  pivot = partition(arr, start, end, pivot);

  qsort(arr, start, pivot - 1);
  qsort(arr, pivot + 1, end);


}


//median pivot
function choose_pivot(start, end) {
  return Math.floor(start + (end - start) / 2);
}

function partition(arr, start, end, pivot) {
  var pivot_value = arr[pivot]
    , store_index = start
    , i;

  swap(arr, pivot, end);

  for (i = start; i < end; i++) {
    if (arr[i] <= pivot_value) {
      swap(arr, i, store_index);
      store_index += 1;
    }
  }

  swap(arr, store_index, end);

  return store_index;
}


function swap(arr, i, j) {
  var temp;

  temp   = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

