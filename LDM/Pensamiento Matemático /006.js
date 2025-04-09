"use strict"

let numCard = prompt("Enter your card number: (XXXX-XXXX-XXXX-XXXX)").replace(/-/g, "");
let card = numCard.split("").map(Number);

console.log(
    (card.length === 16) ? (calcSumCard() % 10 === 0) ? "Card is correct" : "Card invalid composition." : "Error length."
);


/**
 * Calcula la suma de los dígitos de la tarjeta según el algoritmo de Luhn.
 *
 * @returns {number} La suma total calculada de los dígitos de la tarjeta.
 */
function calcSumCard() {
    let sumNumCard = 0;
    
    for (let i = (card.length - 1); i >= 0; i--) {
        
        let num;

        if (i % 2 === 0) {
            num = (card[i] * 2 < 9) ? (card[i] * 2) : ((card[i] * 2) - 9)
        
        } else {
            num = card[i];
        }

        sumNumCard += num;
    }

    return sumNumCard;
}


