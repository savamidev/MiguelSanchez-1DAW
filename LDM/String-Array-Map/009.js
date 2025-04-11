"use strict";

const years = ["primer año", "segundo año", "tercer año", "cuarto año"];

function HogwartsStudent(
  nombre,
  casa,
  mascota,
  asignaturas,
  año,
  sangre,
  prefecto
) {
  this.nombre = nombre;
  this.casa = casa;
  this.mascota = mascota;
  this.asignaturas = asignaturas;
  this.año = año;
  this.sangre = sangre;
  this.prefecto = prefecto;
}

let hermione = new HogwartsStudent(
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
  `Nombre: ${hermione.nombre}, Casa: ${hermione.casa}, Mascota: ${hermione.mascota}`
);

// Añadimos una nueva propiedad llamada patronus y le asignamos un valor "Nutria"
hermione.patronus = "Nutria";

// Agregamos una nueva asignatura a la lista de asignaturas "Defensa contra las Artes Oscuras"
hermione.asignaturas.push("Defensa contra las Artes Oscuras");

// Cambiar el valor de la propiedad año a 4
hermione.año = 4;

// Eliminar la propiedad sangre del objeto
delete hermione.sangre;

//Crea una función printHogwartsStudent que reciba el objeto hogwartsStudent y muestre por consola un resumen como este:
//Hermione Granger es una estudiante de Gryffindor en su cuarto año. Tiene una mascota llamada Crookshanks y su patronus es una Nutria. Sus asignaturas son: Pociones, Transformaciones, Encantamientos, Defensa Contra las Artes Oscuras.
function printHogwartsStudent(objeto) {
  console.log(
    `${objeto.nombre} es una estudiante de ${objeto.casa} en su ${
      years[objeto.año - 1]
    }.Tiene una mascota llamada ${objeto.mascota} y su patronus es una ${
      objeto.patronus
    }.Sus asignaturas son: ${objeto.asignaturas.join(", ")}.`
  );
}

printHogwartsStudent(hermione);

//Invoca la función printHogwartsStudent() con el objeto modificado.
let ginnyWeasley = new HogwartsStudent(
  "Ginny Weasly",
  "Gryffindor",
  "Arnold",
  ["Encantamientos", "Vuelo", "Pociones", "Defensa contra las Artes Oscuras"],
  4,
  "pura",
  true
);

printHogwartsStudent(ginnyWeasley);
