var unsorted_array
  ,	sorted_array=[1,1,1,2,2,2,3,3,4,4,4,5,6,6,7,7,23,43,52,65,123];

describe("Sort",function(){
	beforeEach(function(){
		unsorted_array=[2,1,4,65,1,43,2,6,7,3,2,1,123,4,52,4,6,7,3,23,5];
	});

	
	it("buble sort should sort an array",function(){
		var bubble_sort=require("../lib/sort/bubble-sort");
		expect(bubble_sort(unsorted_array))
			.toEqual(sorted_array);
	});


	it('merge sort should sort an array',function(){
		var merge_sort=require("../lib/sort/merge-sort");
		expect(merge_sort(unsorted_array))
			.toEqual(sorted_array);
	})

});