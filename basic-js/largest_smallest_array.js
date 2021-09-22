// here the process of finding a largest value from an array by using a function.
function largestValue() {
    maxValue = 0;
    for (i = 0; i < arrayVariable.length; i++) {
        arrayElememt = arrayVariable[i];
        if (arrayElememt > maxValue) {
            maxValue = arrayElememt;
        }
    }
    return maxValue;
}
var arrayVariable = [31, 32, 33, 34, 35, 36, 37, 38, 39];
var result = largestValue(arrayVariable);
console.log(result);


// here the process of finding a largest value for negative numbers from an array by using a function.
function negativeArray() {
    var largest = arrayVariable[0];
    for (i = 0; i < negativeArray.length; i++) {
        elementArray = negativeArray[i];
        if (elementArray > largest) {
            largest = elementArray;
        }
    }
    return largest;
}
arrayVariable = [-10, -11, -12, -14, -20];
var result = negativeArray(arrayVariable);
console.log(result);



// smallest value
function smallestValue() {
    var smallest = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        var elements = numbers[i];
        if (elements < smallest) {
            smallest = elements;
        }

    }
    return smallest;
}

var numbers = [4, 5, 7, 2, 1];
var result = smallestValue(numbers);
console.log(result);