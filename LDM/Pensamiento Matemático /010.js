"use strict";

let optionUser;
let isGameFinish = false;

let userLife = 100;
let monsterLife = 100;

let stockPotion = 1;
let healingPotion = 20;

let attackPlayer = 20;
let attackMoster = 25;



runGame();


function runGame() {
  do {
    showMenuGame();

    optionUser = +prompt("Choose your option ♟️:");

    menuOption();

    showStatusLife();

    checkGameStatus();

  } while (optionUser != 4 && isGameFinish == false);

  // Muestra el mensaje de finalizar el juego según la condición de salida.
  console.log(
    optionUser === 4
      ? "Thanks for playing 😊!"
      : monsterLife < userLife
      ? "You win🏆!!"
      : "You lost...💀"
  );
}



function menuOption() {
  switch (optionUser) {
    case 1:
      playerAttack();
      mosterAttack();
      break;

    case 2:
      usePotion();
      mosterAttack();
      break;

    case 3:
      findPotion();
      mosterAttack();
      break;

    case 4:
      isGameFinish = true;
      break;

    default:
      console.log(`Incorrect option value ❌, ${optionUser}. Option 1-4.`);
  }
}


/**
 * Realiza el ataque del jugador al monstruo.
 *
 * La función genera de forma aleatoria un valor de ataque basado en attackPlayer
 * y disminuye la vida del monstruo en esa cantidad. Si la vida resultante es menor que 0,
 * se establece en 0 para evitar valores negativos.
 */
function playerAttack() {
  let playerAttack = generateRandom(attackPlayer);

  monsterLife = monsterLife - playerAttack < 0 ? 0 : monsterLife - playerAttack;

  console.log(`The player attack is ${playerAttack} 👊🏻💥.`);
}



/**
 * Simula el ataque del monstruo al jugador.
 *
 * Se genera un valor de ataque de forma aleatoria basado en attackMoster
 * y se reduce la vida del jugador en esa cantidad. Se muestra el valor de ataque realizado.
 */
function mosterAttack() {
  let attack = generateRandom(attackMoster);
  userLife = userLife - attack;

  console.log(`Attack moster is ${attack} 👹💥.`);
}



/**
 * Permite al jugador usar una poción para recuperar puntos de vida.
 *
 * Si no hay pociones disponibles, muestra un mensaje indicándolo.
 * De lo contrario, genera aleatoriamente la cantidad de vida a recuperar hasta healingPotion
 * y se suma a la vida actual del jugador, sin exceder el máximo de 100.
 * Se decrementa el stock de pociones.
 */
function usePotion() {
  if (stockPotion < 1) {
    console.log("There are no potion 😶‍🌫️.");
  } else {
    let lifeAdd = generateRandom(healingPotion);

    // Asegura que la vida del jugador no supere 100 después de la curación.
    userLife = userLife + lifeAdd > 100 ? 100 : userLife + lifeAdd;

    stockPotion--;

    console.log(`Potion life add ${lifeAdd} 🍯 to life player 🧸, ${userLife}`);
  }
}



/**
 * Intenta encontrar una poción durante el juego.
 *
 * Se genera aleatoriamente un número entre 0 y 4. Si el valor obtenido es 1,
 * se incrementa la cantidad de pociones en el inventario. Se muestra un mensaje
 * indicando si se encontró una poción o no.
 */
function findPotion() {
  let luckyFind = generateRandom(5);

  // Si luckyFind es igual a 1, se incrementa el stock de pociones.
  stockPotion = luckyFind === 1 ? stockPotion + 1 : stockPotion;

  console.log(
    luckyFind === 1
      ? "You hace recived a potion 🍯."
      : "Bad lucky, no potion found 🥲."
  );
}


/**
 * Verifica el estado de la partida para determinar si se debe finalizar el juego.
 *
 * El juego se finaliza si la vida del jugador o del monstruo es menor o igual a 0.
 */
function checkGameStatus() {
  isGameFinish = userLife <= 0 || monsterLife <= 0 ? true : false;
}


/**
 * Genera un número aleatorio entero en el rango 0 a 1.
 *
 * @param {number} value - Valor superior para generar el número aleatorio.
 * @return {number} valor aleatorio
 */
function generateRandom(value) {
  return Math.floor(Math.random() * value);
}



function showStatusLife() {
  console.log(
    `The player life is ${userLife <= 0 ? 0 : userLife} 💙\nThe moster life is ${
      monsterLife <= 0 ? 0 : monsterLife
    } 🖤`
  );
}



function showMenuGame() {
  console.log("1. Attack the moster 🦾.\n2. Use potion 🍯\n3. Find potion 🔍\n4. Exit 🚪");
}
