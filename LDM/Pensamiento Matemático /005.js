"use strict"

const RECIPESFIVE = ["🍔", "🌭", "🍕"];
const RECIPESFOUR = ["🦑", "🥡"];
const RECIPESTHREE = ["🥘", "🥗"];
const RECIPESTWO = ["🥖", "🥨"];

let recipesAll = [RECIPESTWO, RECIPESTHREE, RECIPESFOUR, RECIPESFIVE];

let ingredients = +prompt("How many ingredients do you want to add? (2 -5");

switch (ingredients) {
    case 5:
        showMessage(3, 5);
        break
    case 4:
        showMessage(2, 4);
    case 3:
        showMessage(1, 3);
    case 2:
        showMessage(0, 2);
        break;
    default:
        console.log("Invalid number of ingredients. Please enter a number between 2 and 5.");
        break;
}

function showMessage(index, ingredients) {
    let message = `Recipe with ${ingredients} ingredients: `;
    recipesAll[index].forEach((item) => {
        message += item;
    });
    console.log(message);
}