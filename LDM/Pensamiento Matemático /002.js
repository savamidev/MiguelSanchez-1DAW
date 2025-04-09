"use strict"

// Ejemplo de lista insertada.
let monkeyBanana = ["🐵", "🍌", "🐵", "🍌", "🍌", "🍌", "🐵", "🍌", "🍌", "🍌", "🍌", "🍌", "🐵", "🍌", "🍌", "🍌", "🍌", "🍌", "🐵"];

let monkey = calcNumMonkey();

let banana = calcNumBanana();

// Calculamos el número mínimo de bananas que come cada mono.
let minBananasMonkey = Math.floor(banana / monkey);
// Calculamos las bananas restantes a repartir.
let restBananas = banana % monkey;

showMessage();


// Calculo de número de monos existentes en el array.
function calcNumMonkey() {
    let numberOfMonkeys = 0;
    monkeyBanana.forEach((item) => {
        if (item === "🐵") {
            numberOfMonkeys++;
        }
    }
    );
    return numberOfMonkeys;
}


// Calculo de número de bananas existentes en el array.
function calcNumBanana() {
    let numberOfBananas = 0;
    monkeyBanana.forEach((item) => {
        if (item === "🍌") {
            numberOfBananas++;
        }
    }
    );
    return numberOfBananas;
}


// Construcción del resultado final, comprobando si existen suficientes bananas para los monos.
function showMessage() {
    let message = "";

    if (monkey <= banana) {

        for (let i = 0; i < monkey; i++) {
            if (i < restBananas) {
                message += `🐵${("🍌").repeat(1 + minBananasMonkey)}`
            } else {
                message += `🐵${("🍌").repeat(minBananasMonkey)}`
            }
        }
    
    } else {
        message = `No hay suficientes bananas ${banana}, para los monos ${monkey}`;
    }
    console.log(message);
}

