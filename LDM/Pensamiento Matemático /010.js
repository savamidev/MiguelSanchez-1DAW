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

    optionUser = +prompt("Choose your option:");

    menuOption();

    showStatusLife();

    checkGameStatus();

  } while (optionUser != 4 && isGameFinish == false);

  console.log(
    optionUser === 4
      ? "Thanks for playing!"
      : monsterLife < userLife
      ? "You win!!"
      : "You lost..."
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
      console.log(`Incorrect option value, ${optionUser}. Option 1-4.`);
  }
}



function playerAttack() {
  let playerAttack = generateRandom(attackPlayer);

  monsterLife = monsterLife - playerAttack < 0 ? 0 : monsterLife - playerAttack;

  console.log(`The player attack is ${playerAttack}.`);
}



function findPotion() {
  let luckyFind = generateRandom(4);

  stockPotion = luckyFind === 1 ? stockPotion + 1 : stockPotion;

  console.log(
    luckyFind === 1
      ? "You hace recived a potion."
      : "Bad lucky, no potion found."
  );
}



function usePotion() {
  if (stockPotion < 1) {
    console.log("There are no potion.");
  } else {
    let lifeAdd = generateRandom(healingPotion);

    userLife = userLife + lifeAdd > 100 ? 100 : userLife + lifeAdd;

    stockPotion--;

    console.log(`Potion life add ${lifeAdd} to life player, ${userLife}`);
  }
}



function mosterAttack() {
  let attack = generateRandom(attackMoster);
  userLife = userLife - attack;

  console.log(`Attack moster is ${attack}.`);
}



function checkGameStatus() {
  isGameFinish = userLife < 0 || monsterLife <= 0 ? true : false;
}



function generateRandom(value) {
  return Math.floor(Math.random() * value);
}



function showStatusLife() {
  console.log(
    `The player life is ${userLife <= 0 ? 0 : userLife}\nThe moster life is ${
      monsterLife <= 0 ? 0 : monsterLife
    }`
  );
}



function showMenuGame() {
  console.log("1. Attack the moster.\n2. Use potion\n3. Find potion\n4. Exit");
}
