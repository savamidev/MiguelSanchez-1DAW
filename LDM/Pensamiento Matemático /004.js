"use strict"

const DAYBIR = 8;
const MONTHBIR = 2;

let oportunities = 0;

while (oportunities !== 10) {
    let dayUser = +prompt("What is my birthday day?");
    let monthUser = +prompt("What is my birthday month?");

    oportunities = (
        (dayUser === DAYBIR && monthUser === MONTHBIR) ? showWin() :
        (oportunities === 9) ? showLose() : ++oportunities
    );
}

function showWin () {
    alert("You win!");
    return 10
};

function showLose () {
    alert("You lose!");
    return 10
};