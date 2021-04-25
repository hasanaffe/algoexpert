function getNthFib(n) {
  	let arr = [0,1];
		for(i = 2; i < n; i++){
			arr[i] = arr[i-2] + arr[i-1];
		}
		return(arr[n-1]);
	}
