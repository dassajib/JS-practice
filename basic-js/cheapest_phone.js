var phones = [
    { name: "Samsung", price: 40000, camera: "40Mp", storage: "128Gb" },
    { name: "Saomi", price: 25000, camera: "40Mp", storage: "128Gb" },
    { name: "Oppo", price: 29000, camera: "20Mp", storage: "64Gb" },
    { name: "Sony", price: 50000, camera: "25Mp", storage: "64Gb" },
    { name: "Nokia", price: 32000, camera: "20Mp", storage: "64Gb" }
];

var cheapest = phones[0];
for (var phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);