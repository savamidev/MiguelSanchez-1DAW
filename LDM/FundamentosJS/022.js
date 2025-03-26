"use strict"

const NUM = +prompt("Introduce el índice máximo para calcular los números primos hasta este:")
let contaWhile = 2;

// for

function isPrimoFor(n) {

    const limite = Math.sqrt(n);

    if (n < 2) return false;

    for (let i = 2; i <= limite; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
    
}

for (let i = 2; i <= NUM; i++) {
    if (isPrimoFor(i)) {
        console.log(i);
    }
}


// while

function isPrimoWhile(n) {
    
    const limite = Math.sqrt(n);
    let i = 2;

    if (n < 2) return false;


    while (i <= limite) {

        if (n % i === 0 ) {
            return false;
        }
        i++;
    }

    return true;
}


while(contaWhile <= NUM) {
    if(isPrimoWhile(contaWhile)) {
        console.log(contaWhile);
    }
    contaWhile++;
}
