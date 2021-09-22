//  we can find max by using simple if else loop
var first = 3;
var second = 5;
var third = 7;
if (first > second && first > third) {
    console.log("Max value is: ", first);
}
else if (second > first && second > third) {
    console.log("Max value is: ", second);
}
else {
    console.log("Max value is: ", third);
}


//  We can find the max value using max
var largeValue = Math.max(first, second, third);
console.log("The maxx vaule is: ", largeValue);


//  We can find the max value using function.

function findLarge(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else {
        return third;
    }
}

var result = findLarge(5000, 25000, 55000);
console.log("The Max value is: ", result);
