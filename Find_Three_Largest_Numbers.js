function findThreeLargestNumbers(array) {
	let arr = [];
	  array = array.sort(function(a, b){return b-a});
		array.sort(function(a, b){return b-a});
		arr[0] = array[2];
		arr[1] = array[1];
		arr[2] = array[0];
		return arr;
}
