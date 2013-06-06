/**
 * Time complexity
 * +++++++++++++++++++++++++++++++++++++++
 * Best:      O(n log(n))
 * Average:   O(n log(n))
 * Worst:     O(n log(n))
 *
 * Worst case auxiliary space complexity
 * ++++++++++++++++++++++++++++++++++++++++
 * O(n)
 *
 * Data structure
 * +++++++++++++++++++++++++++++++++++++++++
 * Array
 */

var merge_sort = module.exports = function (arr) {
  var sort_array = arr.slice(0);
  msort(sort_array);
  return sort_array;
};

function msort (arr, start, end) {
  var middle, i, len;

  start = start || 0;
  end   = end || arr.length;
  len   = end - start;

  if (len <= 1) {
    return;
  }
  middle = start + Math.floor(len/2);
  msort(arr, start, middle);
  msort(arr, middle, end);

  merge(arr, start, end);
}


function merge (arr, start, end) {
  var len     = end-start
    , middle  = start + Math.floor(len/2)
    , aindex  = start
    , lindex  = 0
    , rindex  = 0
    , left
    , right;

  left  = arr.slice(start, middle);
  right = arr.slice(middle, end);

  while (left.length > lindex && right.length > rindex) {

    if (left[lindex] < right[rindex]) {
      arr[aindex++] = left[lindex++];
    } else {
      arr[aindex++] = right[rindex++];
    }

  }

  while (left.length > lindex) {
    arr[aindex++] = left[lindex++];
  } 

  while (right.length > rindex) {
    arr[aindex++] = right[rindex++];
  }

  left = right = undefined;
}



