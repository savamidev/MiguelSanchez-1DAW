"use strict"

let userLife = 100;
let monsterLife = 100;

let stockPotion = 1;
let healingPotion = 20;

let attackPlayer = 20;
let attackMoster = 30;










function mosterAttack() {
    let attack = generateRandom(attackMoster);
    userLife = userLife - attack;
}


function generateRandom(value) {
    return Math.floor(Math.random() * value);
}
