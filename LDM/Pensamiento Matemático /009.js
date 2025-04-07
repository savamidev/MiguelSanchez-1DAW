"use strict"

const COLOR = ["red🔴","blue🔵", "green🟢", "yellow🟡"]

let userOption;
let loop = 1;



runGame();


function runGame() {

    let optionMenu = +prompt("Select game mode: \n1) InfityMode.\n2)Number roud to win. ")

    switch (optionMenu) {
        case 1:
            playGameInfity();
            break;

        case 2:
            playGameRound();
            break;    
    }

    alert("Thanks to play!")
}


function playGameRound() {
    
    let win = true;
    let round = +prompt("How many rounds do you want to play?"); 
    let roundPlay = 0;
    
    while (win == true && round > 0) {

        let sequence = generateSequenceColor();

        alert(sequence);
        
        userOption = prompt("Enter the color sequence:").toLowerCase();

        win = (userOption == sequence) ? true : false;

        showMessage(win, roundPlay);

        round--;
        roundPlay++;
    }
}


function playGameInfity() {
    
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
    (result == true) ? alert(`Your win, round ${round}`) : alert(`You lost, your have survived ${round}`)
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
