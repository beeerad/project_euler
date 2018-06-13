let even_sums = 0;
let iteration_counter = 0;
let fib_first = 1;
let fib_second = 2;
while (fib_second < 4000000){
	if (fib_second % 2 === 0){
		even_sums += fib_second;
	}
	let temp = fib_second;
	fib_second += fib_first;
	fib_first = temp;
}
console.log(even_sums);