/**
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

var bubble_sort=module.exports=function(arr){
	var arr_lenght=arr.length,
		swapped=true,
		i;
	while(swapped){
		swapped=false;
		for(i=1;i<arr_lenght;i++){
			if(arr[i-1]>arr[i]){
				swap(i-1,i,arr);
				swapped=true;
			}
		}
	};
	return arr;
};



function swap(i,j,arr){
	var temp;

	temp=arr[i];
	arr[i]=arr[j];
	arr[j]=temp;
}