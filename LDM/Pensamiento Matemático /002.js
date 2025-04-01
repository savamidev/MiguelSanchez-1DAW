"use strict"

// Use 🐵 to monkey and 🍌 to banana
let monkeyBanana = ["🐵", "🍌", "🐵", "🍌", "🍌", "🍌", "🐵", "🍌", "🍌", "🍌", "🍌", "🍌", "🐵", "🍌", "🍌", "🍌", "🍌", "🍌", "🐵"];

let monkey = calcNumMonkey();

let banana = calcNumBanana();

// Calculate the number of monkeys and bananas to eat
let minBananasMonkey = Math.floor(banana / monkey);
let restBananas = banana % monkey;

showMessage();


// Function to calculate the number of monkeys and bananas
function calcNumMonkey() {
    let numberOfMonkeys = 0;
    monkeyBanana.forEach((item) => {
        if (item === "🐵") {
            numberOfMonkeys++;
        }
    }
    );
    return numberOfMonkeys;
}


function calcNumBanana() {
    let numberOfBananas = 0;
    monkeyBanana.forEach((item) => {
        if (item === "🍌") {
            numberOfBananas++;
        }
    }
    );
    return numberOfBananas;
}

function showMessage() {
    let message = "";

    for (let i = 0; i < monkey; i++) {
        if (i < restBananas) {
            message += `🐵${("🍌").repeat(restBananas + minBananasMonkey)}`
        } else {
            message += `🐵${("🍌").repeat(minBananasMonkey)}`
        }
    }
    console.log(message);
}

