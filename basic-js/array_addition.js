// array tring
var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (i = 0; i < randomArray.length; i++) {
    arrayElement = randomArray[i];
    sum = sum + arrayElement;
}
console.log(sum);

// function trying
function arrayTotal() {
    var sum = 0;
    for (i = 0; i < randomArray.length; i++) {
        arrayElement = randomArray[i];
        sum = sum + arrayElement;
    }
    return sum;
}
var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var elementPassing = arrayTotal(randomArray);
