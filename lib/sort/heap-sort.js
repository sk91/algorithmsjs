/**
 * Heap sort
 * 
 * Time complexity
 * +++++++++++++++++++++++++++++++++++++++
 * Best:      O(n log(n))
 * Average:   O(n log(n))
 * Worst:     O(n log(n))
 *
 * Worst case auxiliary space complexity
 * ++++++++++++++++++++++++++++++++++++++++
 * O(1)
 *
 * Data structure
 * +++++++++++++++++++++++++++++++++++++++++
 * Array
 */

var utils = require("../utils");

var heap_sort = module.exports = function (arr) {
  var sort_arr = arr.slice(0);
  hsort(sort_arr);
  return sort_arr;
}

function hsort (arr){
  var count = arr.length
    , end   = count - 1;

  heapify(arr);
  
  while (end > 0){
    utils.swap(arr, end, 0);
    end -= 1;
    sift_down(arr, 0, end);
  }

}

function heapify (arr) {
  var count = arr.length
    , start = Math.floor((count - 1) / 2);

  while (start >= 0) {
    sift_down(arr, start, count - 1);
    start -= 1;
  }
}


function sift_down(arr, start, end){
  var root = start
    , child
    , swap;

  while (root * 2 + 1 < end){
    child = root * 2 + 1;
    swap  = root;

    if (arr[swap] < arr[child]) {
      swap = child;
    }

    if (child + 1 <= end && arr[swap] < arr[child+1]) {
      swap = child + 1;
    }
    if (swap != root){
      utils.swap(arr, root, swap);
      root = swap;
    }else{
      return;
    }
    
  }
}