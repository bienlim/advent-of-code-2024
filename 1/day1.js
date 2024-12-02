import { readFile } from "node:fs";

readFile("input", "utf8", (err, data) => {
	const lines = data.split("\n");
	const array1 = [];
	const array2 = [];
	let sumDiff = 0;

	for (const line of lines) {
		const [value1, value2] = line.split(/\s+/);
		if (value1 && value2) {
			array1.push(Number(value1));
			array2.push(Number(value2));
		}
	}

	array1.sort((a, b) => a - b);
	array2.sort((a, b) => a - b);

	for (let i = 0; i < array1.length; i++) {
		sumDiff += Math.abs(array1[i] - array2[i]);
	}
	console.log(sumDiff);
});
