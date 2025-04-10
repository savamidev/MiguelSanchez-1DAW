"use strict";

const years = ["Primer año", "Segundo año", "Tercer año", "Cuarto año"];

const howgwartsStudent = {
  nombre: "Hermione Granger",
  casa: "Gryffindor",
  mascota: "Crookshanks",
  asignaturas: ["Pociones", "Transformaciones", "Encantamientos"],
  año: 3,
  sangre: "mestiza",
  prefecto: true,
};

const howgwartsStudent2 = {
  nombre: "Ginny Weasley",
  casa: "Gryffindor",
  mascota: "Arnol",
  asignaturas: ["Encantamientos", "Vuelo", "Pociones", "Defensa contra las Artes Oscuras"],
  año: 3,
  sangre: "mestiza",
  prefecto: true,
  patrunus: "Caballo"
};

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
    } año. Tiene una mascota llamada ${student.mascota} y su patronus es una ${
      student.patronus
    }. Sus asignaturas son: ${student.asignaturas.join(", ")}.`
  );
}

printHogwartsStudent(howgwartsStudent);
printHogwartsStudent(howgwartsStudent2);


