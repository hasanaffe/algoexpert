function productSum(array, multiplier = 1) {
  let sum = 0;
	for(const element of array){
	if(Array.isArray(element)){
			sum = sum + productSum(element, multiplier + 1);
		}else{
			sum = sum + element;
		}
	}
	return sum * multiplier;
}
