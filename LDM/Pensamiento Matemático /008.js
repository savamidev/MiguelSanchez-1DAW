"use strict";

let userOption;
let contadorMax = 0;

/**
 * Actualiza el contador máximo de victorias consecutivas si el valor actual supera el histórico.
 *
 * @param {number} n - Número de victorias consecutivas obtenidas en la ronda actual.
 */
let updateConta = (n) => {
    if (n > contadorMax) {
        contadorMax = n;
    }
};


luckyGame();

/**
 * Controla el flujo principal del juego.
 *
 * Utiliza un bucle do...while para solicitar repetidamente la entrada del usuario.
 * El ciclo se repite hasta que el usuario introduce "salir".
 */
function luckyGame() {

    do {
        userOption = prompt("Enter cara 🪙, cruz ✖︎ o salir 🚪:").toLowerCase()

        playGame();

    } while(userOption != "salir");
}



function playGame() {
    let contaTmp = 0;
    
    while (getLucky() == userOption) {
        contaTmp++;
    }

    // Actualiza el contador máximo si esta ronda supera el récord.
    updateConta(contaTmp);

    // Muestra el resultado actual junto con el récord histórico.
    showGameResult(contaTmp);

}

/**
 * Muestra el resultado de la ronda.
 *
 * Imprime el número de victorias consecutivas obtenidas en la ronda actual y el máximo histórico
 * de victorias consecutivas alcanzadas durante la sesión.
 *
 * @param {number} tempConta - Número de victorias consecutivas de la ronda actual.
 */
function showGameResult(tempConta) {
    console.log(`You win 🏆 ${tempConta}, and your max history win is 🎯: ${contadorMax}`)
}


/**
 * Simula el lanzamiento de una moneda.
 *
 * Genera un número aleatorio, redondeándolo a 0 o 1. Si el valor es 0 retorna "cara",
 * de lo contrario retorna "cruz".
 *
 * @return {string} El resultado del lanzamiento: "cara" o "cruz".
 */
function getLucky() {
    return ((Math.round(Math.random()) === 0) ? "cara" : "cruz");
}