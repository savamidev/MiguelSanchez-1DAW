"use strict"

let numb;

do {
    numb = prompt("Ingresa tu número:");
} while (numb == "" && numb <= 100); 

alert(numb);