"use strict"

let fruits = ["Banana", "Manzana", "Fresa"];

fruits.unshift("Cereza");
console.log(fruits);

fruits.push("Melocotón");
console.log(fruits);

fruits.forEach((item) => console.log(item));

fruits.shift();
console.log(fruits);

fruits.pop();
console.log(fruits);

for (let fruit of fruits) {
    console.log(fruit)
};

