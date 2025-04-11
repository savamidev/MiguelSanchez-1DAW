"use strict";

const years = ["primer año", "segundo año", "tercer año", "cuarto año"];

function HogwartsStudent(nombre, casa, mascota, asignaturas, año, sangre, prefecto) {
  this.nombre = nombre;
  this.casa = casa;
  this.mascota = mascota;
  this.asignaturas = asignaturas;
  this.año = año;
  this.sangre = sangre;
  this.prefecto = prefecto;
};

var hermione = new HogwartsStudent(
  "Hermione Granger",
  "Gryffindor",
  "Crookshanks",
  ["Pociones", "Transformaciones", "Encantamientos"],
  3,
  "mestiza",
  true
);


// Mostramos los atributos de nombre, casa y mascota
console.log(
  `Nombre: ${howgwartsStudent.nombre}, Casa: ${howgwartsStudent.casa}, Mascota: ${howgwartsStudent.mascota}`
);

// Añadimos una nueva propiedad llamada patronus y le asignamos un valor "Nutria"
howgwartsStudent.patronus = "Nutria";

// Agregamos una nueva asignatura a la lista de asignaturas "Defensa contra las Artes Oscuras"
howgwartsStudent.asignaturas.push("Defensa contra las Artes Oscuras");

// Cambiar el valor de la propiedad año a 4
howgwartsStudent.año = 4;

// Eliminar la propiedad sangre del objeto
delete howgwartsStudent.sangre;

//Crea una función printHogwartsStudent que reciba el objeto hogwartsStudent y muestre por consola un resumen como este:
//Hermione Granger es una estudiante de Gryffindor en su cuarto año. Tiene una mascota llamada Crookshanks y su patronus es una Nutria. Sus asignaturas son: Pociones, Transformaciones, Encantamientos, Defensa Contra las Artes Oscuras.
function printHogwartsStudent(student) {
  console.log(
    `${student.nombre} es una estudiante de ${student.casa} en su ${
      years[student.año - 1]
    }. Tiene una mascota llamada ${student.mascota} y su patronus es una ${
      student.patronus
    }. Sus asignaturas son: ${student.asignaturas.join(", ")}.`
  );
}

printHogwartsStudent(howgwartsStudent);
printHogwartsStudent(howgwartsStudent2);


