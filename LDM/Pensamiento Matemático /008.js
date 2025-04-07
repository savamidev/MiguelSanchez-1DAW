"use strict";

let userOption;
let contadorMax = 0;
let updateConta = (n) => {
    if (n > contadorMax) {
        contadorMax = n;
    }
};


luckyGame();


function luckyGame() {

    do {
        userOption = prompt("Enter cara, cruz o salir:")

        playGame();

    } while(userOption != "salir");
}

function playGame() {
    let contaTmp = 0;
    
    while (getLucky() == userOption) {
        contaTmp++;
    }

    updateConta(contaTmp);
    showGameResult(contaTmp);

}

function showGameResult(tempConta) {
    console.log(`You win ${tempConta}, and your max history win is: ${contadorMax}`)
}


function getLucky() {
    return ((Math.round(Math.random()) === 0) ? "cara" : "cruz");
}