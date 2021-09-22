// In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.
var student = {
    id: 2020,
    stu_name: "Harun",
    class: 10,
    home: "Noakhali",
    result: "A"
};

console.log(student);

// we can get specific properties in 3 different ways
console.log(student.stu_name);
console.log(student["id"]);

var newVar = student["result"];
console.log(newVar);

