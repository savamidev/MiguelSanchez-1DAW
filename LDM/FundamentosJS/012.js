"use strict";

/*
*012nombreJS.js/.html: Usando el constructor if..else, escribe el código que pregunta: ‘¿Cuál es el nombre “oficial” de JavaScript?’ 
*Si el visitante escribe “ECMAScript”, entonces muestra: “¡Correcto!”, de lo contrario muestra: “¿No lo sabes? ¡ECMAScript!”
*/

let nameOficial = prompt("Cual es el nombre oficial de JavaScript");

if (nameOficial == "ECMAScript") {
    alert("¡Correcto!");

    } else {
        alert("¿No lo sabes? ¡ECMAScript!")
    }
