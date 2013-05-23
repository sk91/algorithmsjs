
var bubble_sort=require("../../../lib/sort/bubble-sort");


describe("Bubble sort",function(){
	it("should sort an array",function(){
		var unsorted_array=[2,1,4,65,1,43,2,6,7,3,2,1];

		expect(bubble_sort(unsorted_array))
			.toEqual([1,1,1,2,2,2,3,4,6,7,43,65]);
	});
});