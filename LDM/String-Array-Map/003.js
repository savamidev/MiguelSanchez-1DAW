"use strict"

let disney = [

    { nombre: "Hércules", pelicula: "Hércules" },
 
    { nombre: "Megana", pelicula: "Hércules" },
 
    { nombre: "Hades", pelicula: "Hércules" },
 
    { nombre: "Campanilla", pelicula: "Peter Pan" },
 
    { nombre: "Wendy", pelicula: "Peter Pan" }
 
 ];
 
disney.push({ nombre: "Peter Pan", pelicula: "Peter Pan" });
console.log(disney);

disney.unshift({ nombre: "Capitán Garfio", pelicula: "Peter Pan" });
console.log(disney);

disney.splice(1, 0, { nombre: "Cocodrilo", pelicula: "Peter Pan"});
console.log(disney);

disney.forEach((item) => {
    console.log(item)
});

let indice = disney.findIndex(personaje => personaje.nombre === "Campanilla")
console.log(`El índice de Campanilla es ${indice}`);

let cocoFind = disney.find(personaje => personaje.nombre === "Cocodrilo");
console.log(`Datos buscados: ${cocoFind.nombre}`);


disney.forEach(personaje => console.log(personaje));
