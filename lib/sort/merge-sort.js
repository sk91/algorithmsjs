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

var merge_sort=module.exports=function(arr){
  var left, right, middle, i;

  if(arr.length <= 1){
    return arr;
  }

  middle = arr.length/2;

  left=arr.slice(0,middle);
  right=arr.slice(middle);

  left=merge_sort(left);
  right=merge_sort(right);

  return merge(left,right);
}


function merge(left,right){
  var result=[];

  while(left.length > 0 || right.length > 0){
    if(left.length > 0 && right.length > 0){
      
      if(left[0] <= right[0]){
        result.push(left.shift());
      }else{
        result.push(right.shift());
      }

    }else if(left.length > 0){
      result.push(left.shift());
    }else if(right.length > 0){
      result.push(right.shift());
    }

  }

  return result;

}



