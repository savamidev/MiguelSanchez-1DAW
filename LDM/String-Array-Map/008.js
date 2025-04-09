"use strict";

// Declaración de perro como objeto
const perro = new Object();

// Mostramos al objeto perro por consola
console.log(perro);

// Asigamos variables y valores al objeto perro
perro.name = "Bora";
perro.legs = 4;
perro.color = "Blanco y marrón";
perro.age = 13;
perro.bark = function () {
  console.log("Woof ".repeat(2));
};

// Llamada al método bark()
perro.bark();


// Imprimimos valores de interés del objeto perro
console.log(`Name: ${perro.name}\nColor: ${perro.color}\nAge: ${perro.age}\nPerro lara: ${perro.bark()}`);

// Establecer nuevas propiedades
perro.breed = "Braco Alemán"
perro.getInfor = function () {
    console.log(`Name: ${perro.name}\nNumero de patas: ${perro.legs}\nColor: ${perro.color}\nAge: ${perro.age}\nRaza: ${perro.breed}`);
};

perro.getInfor();