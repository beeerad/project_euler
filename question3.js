let number_to_factor = 600851475143;
let divisor = 2;
let greatest_prime = 1;

while (number_to_factor != 1){
	if (number_to_factor % divisor == 0){
		number_to_factor = number_to_factor / divisor;
		greatest_prime = divisor;
		divisor = 2;
	}
	else{
		divisor++;
	}
}

console.log(greatest_prime);