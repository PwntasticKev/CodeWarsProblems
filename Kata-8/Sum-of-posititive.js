let positiveSum = (arr) => {
	let answer = 0;
	arr.map((v) => {
		if (Math.sign(v) == 1 || Math.sign(0)) {
			return (answer += v);
		}
	});
	return answer;
};