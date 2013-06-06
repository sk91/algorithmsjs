
var utils = module.exports = {};


utils.swap = function (arr, i, j) {
  var temp;
  
  if (
    !  Array.isArray(arr)
    || i >= arr.length || i < 0 
    || j >= arr.length || j < 0
  ) {

    throw new Error("Incorrect input");
  }

  if (i == j) {
    return;
  }

  temp   = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}