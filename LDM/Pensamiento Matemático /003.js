"use strict"

let foodUser = prompt("Are you going to eat lunch or dinner?");

let isVegetarian = prompt("Are you vegetarian?") === "yes" ? true : false;

console.log(
    (foodUser === "lunch") ? (isVegetarian) ? "🥗" : "🍔" :
    (isVegetarian) ? "🍝" : "🍕" 
);