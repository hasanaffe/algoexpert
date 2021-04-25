function minimumWaitingTime(queries) {
	queries.sort(function(a, b) {
		return a - b;
	});
	let c = queries.length;
	let intCount = 0;
	let finalCount = 0;
	let idx = 0;
	for(i = 1; i < c; i++){
		intCount = intCount + queries[idx];
		finalCount = intCount + finalCount;
		idx++;
	}
	return finalCount;
}
