"use strict"

let code = new Set();

const values = ["JavaScript", "Python", "Java", "JavaScript", "C++"];

let isExist = (value) => {
    if (code.has(value)) {
        console.log(`${value} existe en el Set.`);
    } else {
        console.log(`${value} no existe en el Set.`);
    }
};


addElementSet();

// No se añade "JavaScript" al ser un elemento duplicado
isExist("JavaScript");
isExist("Ruby");

// Eliminar C++
code.delete("C++");
console.log(code);

// Mostramos todos los elemntos del array
printAllSet();

// Mostrar tamaño del arraySet
console.log(code.size);

// Eliminar todos los elementos del arraySet
code.clear();

// Mostrar los elementos del arraySey y su tamaño
console.log(code);
console.log(code.size);




// Funciones generales
function addElementSet() {
    for (const value of values) {
        code.add(value);
    }
}


function printAllSet() {
    code.forEach(item => {
        console.log(item);
    });
}