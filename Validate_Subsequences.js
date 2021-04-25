//21 von 23 Testdurchläufen richtig

function isValidSubsequence(array, sequence) {
  let c = array.length;
	let d = sequence.length;
	let arr = [];
	let e = 0;
	if(c === d){
		for(j = 0; j < c; j++){
			if(array[j] != sequence[j]){
					return false;
				}
			}
		return true;
	}else	if(c > d){
		for(i = 0; i < c; i++){
			for(j = 0; j < d; j++){
				if(array[i] === sequence[j]){
					  arr[e] = sequence[j];
						e++;
					continue;
          }
				}
				if(arr.length === sequence.length){
					break;
				}
			}
		}if(d > c){
			for(i = 0; i < d; i++){
				for(j = 0; j < c; j++){
					if(array[i] === sequence[j]){
							arr[e] = sequence[j];
							e++;
						continue;
					}
				}
				if(arr.length === sequence.length){
					break;
				}
			}
		}if(arr.length !== e){
			return false;
		}else if(e !== d){
      return false;
    }else{
			for(i = 0; i < d; i++){
				if(arr[i] !== sequence[i]){
					return false;
				}
			}
		}
	return true;
}
// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
