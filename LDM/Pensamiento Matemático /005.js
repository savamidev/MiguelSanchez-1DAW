"use strict"

const RECIPESFIVE = [" Burger 🍔", "Hotdog 🌭", " Pizza 🍕"];
const RECIPESFOUR = ["Octopus taiwan 🦑", " Ramen 🥡"];
const RECIPESTHREE = ["Rice 🥘", " Salad 🥗"];
const RECIPESTWO = ["Bread 🥖", " Swett bow 🥨"];

let recipesAll = [RECIPESTWO, RECIPESTHREE, RECIPESFOUR, RECIPESFIVE];

let ingredients = +prompt("How many ingredients do you want to add? (2 -5)");

/*
* Seleccionamos la opción insertada por el usuario y llamamos a la función showMessage() para construirlo.
* Los parámetros que espera la función seleccionan el index de los array.
*/
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

/**
 * 
 * @param {number} index Posiciones del array recipiesAll para obtener todas las recetas posibles
 * @param {number} ingredients numero de ingredientes según cara caso
 * 
 */
function showMessage(index, ingredients) {
    let message = `Recipe with ${ingredients} ingredients: `;
    recipesAll[index].forEach((item) => {
        message += item; // Usamos foreach para recorrer recipiesAll y añadirlo a String de salida.
    });
    console.log(message);
}