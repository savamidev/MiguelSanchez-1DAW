"use strict"

let ageUser = +prompt("Introduce tu edad:");

if (!(ageUser => 18 || ageUser <= 99)) {
    alert("Fuera de rango");
}

if (ageUser < 18 || ageUser > 99) {
    alert("Fuera de rango");
}