"use strict"

let foodUser = prompt("Are you going to eat lunch or dinner?");

let isVegetarian = prompt("Are you vegetarian?") === "yes" ? true : false;

// Imprimimos el mensaje según las respuestas del usuario
console.log(
    (foodUser === "lunch") ? (isVegetarian) ? "Salad 🥗" : "Burger 🍔" :
    (isVegetarian) ? "Italian paste 🍝" : "Pizza 🍕" 
);