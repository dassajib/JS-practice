// The Math. abs() function returns the absolute value of a number. That is, it returns x if x is positive or zero, and the negation of x if x is negative.

var myNumber = -4;
var outputNumber = Math.abs(myNumber);
console.log(outputNumber);


// The Math. floor() function returns the largest integer less than or equal to a given number.
var myNumber = 6.6;
var outputNumber = Math.floor(myNumber);
console.log(outputNumber);


// The Math. floor() function returns the largest integer less than or equal to a given number.
var myNumber = 6.9;
var outputNumber = Math.ceil(myNumber)
console.log(outputNumber);


// The Math. round() function returns the value of a number rounded to the nearest integer.
var myNumber = 7.6;
var outputNumber = Math.round(myNumber);
console.log(outputNumber);

// The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user. 

var outputNumber = Math.random();
console.log(outputNumber);