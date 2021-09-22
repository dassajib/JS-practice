var products = [
    { name: "samsung galaxy note phone", price: 50000 },
    { name: "asus laptop D70", price: 100000 },
    { name: "bluetooth box", price: 1000 },
    { name: "bluetooth yearphone", price: 2000 },
    { name: "charger", price: 400 },
    { name: "cable", price: 300 },
];

function searchProduct(products, searchText) {
    var matched = [];
    for (var product of products) {
        var name = product.name;
        if (name.indexOf(searchText) != -1) {
            matched.push(name);
        }
    }
    return matched;
}


var result = searchProduct(products, "phone");
console.log(result);