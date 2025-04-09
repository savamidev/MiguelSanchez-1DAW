"use strict"

let acdc= { name: "ACDC", age: 25 };

let metallica = { name: "Metallica", age: 30 };

let guns= { name: "Guns and Roses", age: 28 };

let bands = [ acdc, metallica, guns];

/* 
* .map() nos permite crear un nuevo array según ciertas condiciones
* en este caso con los nombres de cada banda
*/
let names = bands.map(bands => bands.name);
    
console.log(names);


