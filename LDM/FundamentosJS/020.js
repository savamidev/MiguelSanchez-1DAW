"use strict"

let numb;

do {
    numb = prompt("Ingresa tu número:");
} while (numb == "" && numb == null && numb <= 100); 

alert(numb);