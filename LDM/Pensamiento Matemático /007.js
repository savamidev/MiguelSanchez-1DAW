"use strict"


// reorganizar la verificación  

let numCard = prompt("Enter your card number: (XXXX-XXXX-XXXX-XXXX)").replace(/\D/g, "");
let card = numCard.split("").map(Number);

console.log(
    (calcCardType() !== "") ? (calcLuhn() % 10 === 0) ? `Your ${calcCardType()} is valide 💳 ✅` : "The composition is wrong" : "Your card number is invalid."
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

/**
 * Determina el tipo de tarjeta de crédito según la longitud y los dígitos iniciales.
 *
 * Utiliza funciones auxiliares para comprobar si la tarjeta es American Express, Visa o MasterCard.
 *
 * @return {string} Un string descriptivo del tipo de tarjeta
 */
function calcCardType() {

    switch(true) {
        case IsCardAExpr():
            return "American Express Card";

        case IsCardVisa():
            return "Visa Card";

        case IsCardMCard():
            return "Master Card";

        default:
            return ""
    }
}


/**
 * Comprueba si la tarjeta es American Express.
 *
 * @return {boolean} true o false tras la comprobación de longitud y posibles dígitos de inicio.
 */
function IsCardAExpr() {
    let firstNum = Number(card.slice(0, 2).join(""));
    return card.length === 15 && [34, 37].includes(firstNum);
}

/**
 * Comprueba si la tarjeta es Visa.
 *
 * @return {boolean} true o false tras la comprobación de longitud y posibles dígitos de inicio.
 */
function IsCardVisa() {
    return (card.length === 13 || card.length === 16) && card[0] === 4;
}


/**
 * Comprueba si la tarjeta es Master Card.
 *
 * @return {boolean} true o false tras la comprobación de longitud y posibles dígitos de inicio.
 */
function IsCardMCard() {
    let firstNum = Number(card.slice(0, 2).join(""));
    return card.length === 16 && [51, 52, 53, 54, 55].includes(firstNum); // Definimos un conjunto de número posibles de inicio y comproblamos si se incluye alguno.
}

