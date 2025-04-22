"use strict"

let arraySet = new Set();

addValueArray();

console.log(arraySet)

/**
 * Añadimos un número random ( generateRandom()), comprobando el tamaño del 
 * arraySet para verificar que hemos agregado un valor no repetido
 */
function addValueArray() {
    while (arraySet.size < 7) {
        arraySet.add(generateRandom());        
    };
};


// Generamos un número random del 0 al 9
function generateRandom() {
    return Math.floor(Math.random() * 10);
};