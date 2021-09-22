//  Function is a statement, where it solve a work. We are able to call it when we need
function totalCost(cost) {
    console.log("product cost", cost);
    // we can return a value when we need
    var singleProductPrice = 50;
    var receiveProduct = (cost / singleProductPrice);

    return receiveProduct;
}
// here we can pass a variable also or a value.
var money = 200;
var gotProd = totalCost(money);
console.log("Hat e peyechi", gotProd);

// two numbers addition by using function
function additionNumbers(number1, number2) {
    console.log("addition numbers: ", number1, number2);
    total = (number1 + number2);
    return total;
}

var totalResult = additionNumbers(50, 50);
console.log("Total Result: ", totalResult);

// multiply nubers using function.
function multiplyNumbers(number1, number2) {
    console.log("multiply numbers: ", number1, number2);
    total = (number1 * number2);
    return total;
}

var totalResult = multiplyNumbers(90, 80);
console.log("total result: ", totalResult);


// inch to feet.
function inchToFeet(inch) {
    var total = (inch / 12);
    return total;
}

var result = inchToFeet(544);
console.log("total: ", result, "inches");