var string = "Hello, World";
function reverseString(string) {
    var reverse = "";
    for (var letter of string) {
        reverse = letter + reverse;
    }
    console.log(reverse);
}
var result = reverseString(string);
console.log(result);