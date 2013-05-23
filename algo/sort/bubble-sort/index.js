

module.exports=function(arr){
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
}