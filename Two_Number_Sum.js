function twoNumberSum(array, targetSum) {
	let c = array.length;
	let arr = [];
  for(i = 0; i < c; i++){
		for(j = 0; j < c; j++){
			if(i == j){
				break;
			}
			if(array[i] + array[j] == targetSum){
				let a = array[i];
				let b = array[j];
				return [a, b];
			}
		}
	}
		if(array[i] + array[j] != targetSum){
		return arr;
	}
}
