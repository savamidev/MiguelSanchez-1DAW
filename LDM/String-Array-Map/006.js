"use strict"


let arraySet = new Set();

addValueArray();

console.log(arraySet)


function addValueArray() {
    while (arraySet.size < 7) {
        arraySet.add(generateRandom());        
    };
};



function generateRandom() {
    return Math.floor(Math.random() * 9);
};