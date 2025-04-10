"use strict"

let disney = [

    { nombre: "Hércules", pelicula: "Hércules" },
 
    { nombre: "Megana", pelicula: "Hércules" },
 
    { nombre: "Hades", pelicula: "Hércules" },
 
    { nombre: "Campanilla", pelicula: "Peter Pan" },
 
    { nombre: "Wendy", pelicula: "Peter Pan" }
 
 ];
 
 //Meter a Peter Pan al final del array disney.
disney.push({ nombre: "Peter Pan", pelicula: "Peter Pan" });
console.log(disney);

//Pintar el array
console.log(disney);

//Meter a El capitán Garfio al principio del array, no olvides la película
disney.unshift({ nombre: "Capitán Garfio", pelicula: "Peter Pan" });
console.log(disney);

//Meter al cocodrilo detrás del capitán, no olvides la película
disney.splice(1, 0, { nombre: "Cocodrilo", pelicula: "Peter Pan"});
console.log(disney);

//Obtener los personajes de la película de "Peter Pan"; y mostrarlos uno a uno.
disney.forEach((item) => {
    console.log(item)
});

//Encontrar el índice de Campanilla.
let indice = disney.findIndex(personaje => personaje.nombre === "Campanilla")
console.log(`El índice de Campanilla es ${indice}`);

//Buscar al cocodrilo.
let cocoFind = disney.find(personaje => personaje.nombre === "Cocodrilo");
console.log(`Datos buscados: ${cocoFind.nombre}`);

//Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los elementos del array.

/**
 * 
 * Esta función desordena el array como parámetro de entrada.
 * Uso de sort() para ordenar, pero le pasamos una generación de número ramdom. Si el ramdon es positivo
 * la segunda posición de comparación pasa a ser la primera, si es negativo las posiciones no se alteran.
 * 
 * @param {object} array 
 * @returns valores negativos o positivos entre el -0.5 al 0.5
 */
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
