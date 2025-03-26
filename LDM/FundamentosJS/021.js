"use strict"

let nameUser = prompt("Introduce tu rol en la empresa");
let passAdmin;

if (nameUser == "Admin") {

    passAdmin = prompt("Ingresa la consaseña:")

    if (passAdmin == "TheBoss") {
        alert("Bienvenido a tu reino, jefe.")

    } else if (passAdmin == "" || passAdmin == null) { 
        alert("No te conozco");
    
    } else {
        alert("Contraseña incorrecta.")
    }

} else {
    alert("No te conozco de nada.")
}