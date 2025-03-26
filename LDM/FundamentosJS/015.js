"use strict"

let login = prompt("Introduce si eres Alumno o Profesor:");

alert(
    (login == "Alumno") ? "Hola estudiante, tiene 10 tareas pendientes" :
    (login == "Profesor") ? "Buenos días, tiene que calificar 1000 actuvidades" :
    (login == "") ? "Sin sesión, estudie algo" : ""
);