"use strict"

const DAYBIR = 8;
const MONTHBIR = 2;

let oportunities = 0;

// Solicitamos al jugador los datos del juego
while (oportunities !== 10) {
    let dayUser = +prompt("What is my birthday day?");
    let monthUser = +prompt("What is my birthday month?");

   /**
    * Comprobamos si los datos coinciden, retornamos el máximo de oportunidades para romper el bucle, pero si no, 
    * mostramos un mensaje según el número de oportunidades restantes, siempre actualizando el valor de oportunidades
    */
    oportunities = (
        (dayUser === DAYBIR && monthUser === MONTHBIR) ? showWin() :
        (oportunities === 9) ? showLose() : showIncorrect()
    );
}

function showWin () {
    alert("You win!🏆");
    return 10
};

function showLose () {
    alert("You lose!😭");
    return 10
};

function showIncorrect() {
    alert("Incorrect! ❌")
    return ++oportunities;
}