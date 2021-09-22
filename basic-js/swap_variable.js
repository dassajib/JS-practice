var firstVariable = 5;
var secondVariable = 7;
console.log(firstVariable, secondVariable);
// now we will swap those values by temp variable.

var tempVariable = firstVariable;
firstVariable = secondVariable;
secondVariable = tempVariable;
console.log(firstVariable, secondVariable);

// destructuring.
var first = 5;
var second = 7;

[first, second] = [second, first];
console.log(first, second);