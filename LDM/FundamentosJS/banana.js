"use strict"

// La lista se debe de rellanar con 🐵 y 🍌

let monos = ["🐵", "🐵"];
let bananas = ["🍌", "🍌", "🍌"];
let comida = [];

if (monos.length == bananas.length) {
    console.log(("🐵🍌").repeat(monos.length));

} else if (bananas.length < monos.length) {
    console.log("Lo sentimos! No hay suficientes bananas para los monos!");

} else {
    let minComida = Math.floor(bananas.length / monos.length);
    let resto = Math.floor(bananas.length / monos.length);

    addComida(minComida, resto);
    let message = creatorMessage("");
    console.log(message);
    
}

function addComida(minComida, resto) {
    for (let i = 0; i < monos.length; i++) {
        if (i < resto) {
            comida.push(minComida + 1);
        } else {
            comida.push(minComida);
        } 
    }
}

function creatorMessage(message) {
    for (let i = 0; i < monos.length; i++) {
        message += `🐵 ${("🍌").repeat(comida[i])}`
    }
    return message;
}