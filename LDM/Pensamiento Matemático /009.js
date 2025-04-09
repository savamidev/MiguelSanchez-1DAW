"use strict";

const COLOR = ["🔴", "🔵", "🟢", "🟡"];

let userOption;
let loop = 1;

runGame();

function runGame() {
  let optionMenu = +prompt(
    "Welcome to Siman Say🗣️!\nSelect game mode: \n1) InfityMode.\n2)Number roud to win. "
  );

  switch (optionMenu) {
    case 1:
      playGameInfity();
      break;

    case 2:
      playGameRound();
      break;
  }

  alert("Thanks to play 🙏🏻!");
}

//Ejecuta el modo de juego por rondas.
function playGameRound() {
  let win = true;
  let round = +prompt("How many rounds do you want to play 🕹️?");
  let roundPlay = 0;

  while (win == true && round > 0) {
    let sequence = generateSequenceColor();

    alert(`The sequence is: \n${sequence}`);

    userOption = prompt("Enter the color sequence:").toLowerCase();

    win = userOption == sequence ? true : false;

    showMessage(win, roundPlay);

    round--;
    roundPlay++;
  }
}

//Ejecuta el modo de juego infinito.
function playGameInfity() {
  let win = true;
  let round = 1;

  while (userOption != "salir" && win == true) {
    let sequence = generateSequenceColor();

    alert(`The sequence is: \n${sequence}`);

    userOption = prompt("Enter the color sequence:").toLowerCase();

    win = userOption == sequence ? true : false;

    showMessage(win, round);

    round++;
  }
}


/**
 * Muestra un mensaje al usuario indicando el resultado de la ronda.
 *
 * @param {boolean} result - Resultado de la ronda: verdadero si ganó, falso si perdió.
 * @param {number} round - Número de la ronda actual.
 */
function showMessage(result, round) {
  result == true
    ? alert(`Your win 🏆, round ${round}`)
    : alert(`You lost 😭, your have survived ${round} rounds.`);
}

/**
 * Genera una secuencia de colores aleatoria.
 *
 * La longitud de la secuencia está determinada por la variable global 'loop', que se incrementa después
 * de cada iteración, haciendo que la secuencia se alargue en cada ronda.
 *
 * @return {string} La secuencia de colores generada.
 */
function generateSequenceColor() {
  let message = "";

  for (let i = 0; i < loop; i++) {
    message += COLOR[selectIndexColor()];
  }

  // Incrementa la longitud de la secuencia para la siguiente ronda.
  loop++;

  return message;
}

/**
 * Selecciona de forma aleatoria un índice válido del array COLOR.
 *
 * @return {number} Un índice aleatorio entre 0 y 1.
 */
function selectIndexColor() {
  return Math.floor(Math.random() * COLOR.length);
}
