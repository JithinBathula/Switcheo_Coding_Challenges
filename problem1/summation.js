//The first implementation involves running a for loop from 0 to n and summing all the integers
var sumation_a = function(n){
    let sum = 0;
    for (let i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}
// the second implementation involves using the summation formula which is sum = n * (n+1)/2
var sumation_b = function(n){
    return (n * (n+1))/2;
}

//The third implementation involves using recursion for finding the sum
var sumation_c = function(n){
    if (n <= 1){
        return n
    }
   return n + sumation_c(n-1)
}


//Bonus implementation is using String Manipulation and `eval` because why not
var summation_d = function(n) {
    if (n === 0) return 0;
    let numbers = Array.from({ length: n }, (_, i) => i + 1);
    return eval(numbers.join('+'));
};

//TEST CASES GENERATED USING GITHUB COPILOT

// Test cases for sumation_a
console.log(sumation_a(0)); // Expected output: 0
console.log(sumation_a(1)); // Expected output: 1
console.log(sumation_a(5)); // Expected output: 15
console.log(sumation_a(10)); // Expected output: 55

// Test cases for sumation_b
console.log(sumation_b(0)); // Expected output: 0
console.log(sumation_b(1)); // Expected output: 1
console.log(sumation_b(5)); // Expected output: 15
console.log(sumation_b(10)); // Expected output: 55

// Test cases for sumation_c
console.log(sumation_c(0)); // Expected output: 0
console.log(sumation_c(1)); // Expected output: 1
console.log(sumation_c(5)); // Expected output: 15
console.log(sumation_c(10)); // Expected output: 55

// Test cases for summation_d
console.log(summation_d(0)); // Expected output: 0
console.log(summation_d(1)); // Expected output: 1
console.log(summation_d(5)); // Expected output: 15
console.log(summation_d(10)); // Expected output: 55