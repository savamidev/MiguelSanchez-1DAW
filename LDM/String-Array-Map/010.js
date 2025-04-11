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

// Obtén y muestra el rol del personaje "Dug" con get().
console.log(miMapa.get("Dug"));

//Actualiza el valor asociado a "Russell" a "Explorador leal y valiente" y muestra el nuevo valor.
miMapa.set("Russell", "Explorador leal y valiente");
console.log(miMapa);

//Elimina al personaje "Charles Muntz" del Map usando delete() y muestra el contenido restante.
miMapa.delete("Charles Muntz");
console.log(miMapa);

//Itera sobre los personajes y sus descripciones con forEach() y muestra cada par formateado así:
miMapa.forEach((clave, valor) => 
    console.log(`"${clave}: ${valor}"`)
);

//Muestra cuántos personajes hay actualmente en el Map utilizando size.
console.log(miMapa.size);

//Vacía el Map usando clear() y verifica que esté vacío mostrando su contenido y tamaño.
miMapa.clear();
console.log(miMapa);