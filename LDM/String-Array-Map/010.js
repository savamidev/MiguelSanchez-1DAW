"use strict"

// Creamos nuestro objeto Map
let miMapa = new Map();

// Añadimos clave-valor al mapa
miMapa.set("Carl Fredricksen", "Protagonista principal");
miMapa.set("Russell", "Explorador entusiasta");
miMapa.set("Dug", "Perro que habla");
miMapa.set("Kevin", "Ave tropical gigante");
miMapa.set("Charles Muntz", "Antagonista");

// Mostramos el mapa
console.log(miMapa);

// Comprobamos si existen "Russell" y "Alpha" con has()
let busqueda = (map, item) => map.has(item);

console.log(busqueda(miMapa, "Russell"));
console.log(busqueda(miMapa, "Alpha"));

// 
