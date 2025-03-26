"use strict"

let moneyArray = [500, 200, 100, 50, 20, 10, 5, 2, 1];
let numBilletes = [];

let i = 0;
let cantidadDinero = 999;

while(cantidadDinero > 0) {

numBilletes[i] = ((cantidadDinero / moneyArray[i]) > 0) ? cantidadDinero / numBilletes[i] : 0;

cantidadDinero = cantidadDinero - (numBilletes[i] * moneyArray[i]);

i++;
}

console.log(numBilletes);
console.log(i);