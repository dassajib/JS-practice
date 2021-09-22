var products = [
    { name: "Laptop", price: 90000, quantity: 1 },
    { name: "Phone", price: 48000, quantity: 1 },
    { name: "Watch", price: 2000, quantity: 4 },
    { name: "Shirt", price: 1600, quantity: 6 }
];

var totalCost = 0;
for (var product of products) {
    totalCost = totalCost + (product.price * product.quantity);
}
console.log(totalCost);