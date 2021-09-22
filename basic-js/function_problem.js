// // check even number function
// function isEven() {
//     if (number % 2 == 0) {
//         return true;
//     }
//     return false;
// }

// var number = 88;
// var inputNummber = isEven(number);
// console.log("is the number is even?", inputNummber);

// // check odd number function
// function isOdd() {
//     if (number % 2 != 0) {
//         return true;
//     }
//     return false;
// }

// var number = 77;
// var inputNumber = isOdd(number);
// console.log("is the number is odd?", inputNumber);


// // check simple leap year function.
// function isThisYearLeapYear() {
//     if (year % 4 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// var year = 2020;
// var inputYear = isThisYearLeapYear(year);
// console.log("this year is leapyear?", inputYear);


// Factorial function

function factorialOutput(input) {
    var factorial = 1;
    for (i = 1; i <= input; i++) {
        factorial = factorial * i;
    }
    return factorial;
}


var result = factorialOutput(3);
console.log("The result: ", result);