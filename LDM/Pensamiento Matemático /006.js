"use strict"

let numCard = prompt("Enter your card number: (XXXX-XXXX-XXXX-XXXX)").replace(/-/g, "");
let card = numCard.split("").map(Number);

console.log(
    (calcSumCard() % 10 === 0 && card.length == 16) ? "Valid card number" : "Invalid card number"
);

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


