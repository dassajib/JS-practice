var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 7, 9, 5];
function findUnique() {
    var unique = [];
    for (var elements of numbers) {
        if (unique.indexOf(elements) == -1) {
            unique.push(elements);
        }
    }
    return unique;
}


var result = findUnique(numbers);
console.log(result);