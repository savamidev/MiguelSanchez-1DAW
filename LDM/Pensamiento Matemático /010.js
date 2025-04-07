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

    checkGameStatus();

  } while (optionUser != 4 && isGameFinish == false);


  console.log(
    (userLife <= 0) ? "You lose..." : "You win!!"
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

    default:
      console.log(userLife > 0 ? "You win!!" : "You lose!");
  }
}



function playerAttack() {
  let playerAttack = generateRandom(attackPlayer);

  monsterLife = monsterLife - playerAttack < 0 ? 0 : monsterLife - playerAttack;

  console.log(
    `The player attack is ${playerAttack}, and the moster life is ${((monsterLife < 0) ? 0 : monsterLife)}`
  );
}



function findPotion() {
  let luckyFind = generateRandom(4);

  stockPotion = luckyFind === 1 ? stockPotion + 1 : stockPotion;

  console.log(
    (luckyFind === 1) ? "You hace recived a potion." : "Bad lucky, no potion found."
  );
}



function usePotion() {
  if (stockPotion < 1) {
    
    console.log("There are no potion.");
  
} else {
    let lifeAdd = generateRandom(healingPotion);
    
    userLife = ((userLife + lifeAdd) > 100) ? 100 : userLife + lifeAdd;
    
    stockPotion--;
    
    console.log(`Potion life add ${lifeAdd} to life player, ${userLife}`);
  }
}



function mosterAttack() {
  let attack = generateRandom(attackMoster);
  userLife = userLife - attack;

  console.log(
    `Attack moster is ${attack}, life user is ${((userLife < 0) ? 0 : userLife)}`
  );
}


function checkGameStatus() {
    isGameFinish = (userLife < 0 || monsterLife <= 0) ? true : false;
}



function generateRandom(value) {
  return Math.floor(Math.random() * value);
}



function showMenuGame() {
  console.log("1. Attack the moster.\n2. Use potion\n3. Find potion\n4. Exit");
}

