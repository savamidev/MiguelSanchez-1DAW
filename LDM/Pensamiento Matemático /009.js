"use strict"

const COLOR = ["red🔴","blue🔵", "green🟢", "yellow🟡"]

let userOption;
let loop = 1;

playGame();



function playGame() {
    
    let win = true;
    let round = 1; 
    
    while (userOption != "salir" && win == true) {

        let sequence = generateSequenceColor();

        alert(sequence);
        
        userOption = prompt("Enter the color sequence:").toLowerCase();

        win = (userOption == sequence) ? true : false;

        showMessage(win, round);

        round++;
    }
}


function showMessage (result, round) {
    (result == true) ? alert(`Your win, round ${round}`) : alert(`You lost, round ${round}`)
}


function generateSequenceColor() {

    let message = "";

    for (let i = 0; i < loop; i++) {
        message += COLOR[selectIndexColor()];
    }

    loop++;

    return message;
}


function selectIndexColor() {
    return Math.floor(Math.random() * COLOR.length); 
}
