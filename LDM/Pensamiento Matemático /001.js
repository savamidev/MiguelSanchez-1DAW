"use strict"

// Uso de bucle para iterar del 1 al 100, comprobando el resultado de la impresión.
for (let i = 1; i <= 100; i++) {
    console.log(
       (i % 3 === 0 && i % 5 === 0) ? "meloso🐻" :
       (i % 3 === 0) ? "miel🍯" :
       (i % 5 === 0) ? "oso🐻" :
       i);
   }
