// Fibonacci series is a series where the next number will be the addition of the imidiate last two numbers.its start with 0.

// var fibo = [0, 1];
// // we start the loop with two because, its befores two numbers(0,1) has no imidiate 2 numbers.So we can not make an addition.
// for (i = 2; i <= 10; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

//  using function
function fibonacciSeries(number) {
    if (number < 2) {
        return "Enter a number which is greater than 2.Thank you";
    }
    var fibonacci = [0, 1];
    for (i = 2; i < number; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
}


var number = 50;
var result = fibonacciSeries(number);
console.log(result);