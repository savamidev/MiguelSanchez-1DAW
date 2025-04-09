"use strict"

let fruits = ["Banana", "Manzana", "Fresa"];

//Añadimos cereza al principio
fruits.unshift("Cereza");
console.log(fruits);

//Añadimos melocotón al final
fruits.push("Melocotón");
console.log(fruits);

//Mostrar el array elemento a elemento con forEach
fruits.forEach((item) => console.log(item));

//Eliminamos el primer elemento.
fruits.shift();
console.log(fruits);

//Eliminamos el último elemento.
fruits.pop();
console.log(fruits);

//Mostrar cada elemento con for of o for in, lo que considere más adecuado.
for (let fruit of fruits) {
    console.log(fruit)
};

