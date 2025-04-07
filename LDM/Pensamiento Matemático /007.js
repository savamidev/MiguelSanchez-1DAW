"use strict"


// reorganizar la verificación  

let numCard = prompt("Enter your card number: (XXXX-XXXX-XXXX-XXXX)").replace(/\D/g, "");
let card = numCard.split("").map(Number);

console.log(
    (calcLuhn() % 10 === 0) ? `Your type of card is ${calcCardType()} 💳 ✅` : "Invalid card ❌"
);

function calcLuhn() {
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

function calcCardType() {

    switch(true) {
        case IsCardAExpr():
            return "American Express";

        case IsCardVisa():
            return "Visa";

        case IsCardMCard():
            return "Master Card";

        default:
            return "Does not belong to any type of card."
    }
}


function IsCardAExpr() {
    let firstNum = Number(card.slice(0, 2).join(""));
    return card.length === 15 && [34, 37].includes(firstNum);
}

function IsCardVisa() {
    return (card.length === 13 || card.length === 16) && card[0] === 4;
}

function IsCardMCard() {
    let firstNum = Number(card.slice(0, 2).join(""));
    return card.length === 16 && [51, 52, 53, 54, 55].includes(firstNum);
}

