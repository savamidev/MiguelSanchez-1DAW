"use strict"

//# Nivel 2 🍭

//### Ejercicio 1 - Inventario de Productos 

//Tienes un array de objetos productos, por ejemplo:
let productos = [
  { id: 1, categoria: "bebida", precio: 1.5, cantidad: 100 },
  { id: 2, categoria: "comida",   precio: 3.2, cantidad: 52 },
  { id: 3, categoria: "bebida", precio: 2.0, cantidad: 80 },
  { id: 4, categoria: "bebida", precio: 1.59, cantidad:  96 },
  { id: 5, categoria: "hogar", precio: 5.99, cantidad:  12 }
];

//Crea:
//a) Devuelve el valor total del inventario sumando precio × cantidad de cada producto.
//calcularValorInventario(productos)

/**
 * Función devuelve la suma total de los precios por las catidades de cada producto
 * 
 * @param {array} productos, array como parámetro de entrada para su manipulación
 * @return {number}, nos devuelve la suma de la cantidad de prodctos por sus precios
*/

function calcularValorInventario(productos) {
  let sumaTotal = 0;
  
  productos.forEach(item => {
    sumaTotal += item.precio * item.cantidad;
  });

  return sumaTotal;
};


//b) Devuelve un Map donde la clave es la categoría y el valor es un array de objetos de esa categoría.
//grupoPorCategoria(productos)

/**
 * Función que transforma un array de productos en un mapa.
 * 
 * @param {Array} productos
 * @returns {Map} usando categoría como clave y precio como valor
*/

function grupoPorCategoria(productos) {
  let mapaProductos = new Map();
  
  productos.forEach(producto => {
    mapaProductos.set(producto.categoria, producto.precio)
  });
  
  return mapaProductos;
};



//c) Aplica un descuento (por ejemplo, 10 %) sobre el precio de todos los productos de la categoría dada, y devuelve un nuevo array con los precios actualizados (sin mutar el original).
//descontarCategoria(productos, categoria, porcentaje)


/**
 * Función que procesa un array, modificando los valores de sus precios según
 * su categoría
 * 
 * @param {Array} productos
 * @param {string} categoriaDesc, categoría a la que aplicar el descuento
 * @param {number} porcentaje 
 * @returns {Array}, nuevo array con todos los objetos (clonados)
*/

function descontarCategoria(productos, categoria, porcentaje) {
  let newArray = productos.map(item => ({ ...item }));

  newArray.forEach(item => {

    if (item.categoria === categoria) {

     item.precio = item.precio * (1 - (porcentaje / 100));
    };

  });

  return newArray;
};


//d)Devuelve un Set con todas las categorías únicas presentes.
//categoriasDisponibles(productos)


/**
 * Función que recibe un array y añade la catería de cada producto a un Set.
 * 
 * @{array} productos, conjunto de datos del que queremos obtener la categría.
 * @{return} arraySetm, conjunto Set que contiene las categoría (no duplicadas).
*/

function categoriasDisponibles(productos) {
  return new Set(productos.map(producto => producto.categoria));
}




//### Ejercicio 2 -  “Bestiario Mágico”
//Descripción
//Vas a crear distintos “objetos mágicos” (por ejemplo, varitas, pociones y artefactos) empleando varias formas de instanciación en JavaScript. Al final, agruparás todos en un array y usarás métodos de Map y Set para extraer información.

//a) Objeto literal

//Declara una variable varitaLiteral que represente una varita.

//Debe tener propiedades: nombre (string), poder (string), nivel (número).

let varitaLiteral = {
    nombre: "",
    poder: "",
    nivel: 0
};



//b) Función fábrica

//Crea una función crearPocion(nombre, efecto, cantidad) que devuelva un objeto con esas tres propiedades.

//Usa la función para generar al menos dos pociones distintas.

function crearPocion(nombre, efecto, cantidad) {
    return {
      nombre: nombre,
      efecto: efecto,
      cantidad: cantidad
    };
  };

let pocionSubirVida = crearPocion("Subir vida", "Aumenta la salud del jugador", 2); 
let pocionAumentaAtaque = crearPocion("Explosión de ataque", "Sube las estadísticas de ataque del jugador de su arma principal", 2); 


//c) Constructor clásico

//Define un constructor function Artefacto(nombre, material, rareza) que inicialice esas propiedades.

//Añádele un método llamado describir() que devuelva un string tipo:

//"Artefacto: [nombre] (material: [material], rareza: [rareza])".

//Instancia dos artefactos usando new Artefacto(...).


function Artefacto(nombre, material, rareza) {
  this.nombre = nombre;
  this.material = material;
  this.rareza = rareza;
  this.describir = function() {
    return "Artefacto: " + this.nombre +
           " (material: " + this.material +
           ", rareza: " + this.rareza + ")";
  };
};

let capaInvisivilidad = new Artefacto("Capa Invisividad", "Algodón con fibras mágicas", "Alta");

let escoba = new Artefacto("Escoba voladora", "Madera de sauce calcinada con fuego de dragón", "Muy Alta");



//d) Clase Reliquia

//Define una clase Reliquia con constructor (nombre, origen, nivelMágico) y un método toString() que devuelva:

//"Reliquia [nombre] de origen [origen], nivel mágico: [nivelMágico]".

//Crea al menos una instancia de Reliquia.

class Reliquia {

  constructor (nombre, origen, nivelMagico) {
    this.nombre = nombre;
    this.origen = origen;
    this.nivelMagico = nivelMagico;
  };

  toString() {
    return `Reliquia ${this.nombre} de origen ${this.origen}, nivel mágico ${this.nivelMagico}.`;
  };

};

let reliquiaAntigua = new Reliquia(
    "Corazón de Dragón",
    "Montañas de Fuego",
    10
  );


//### PARA CASA, junto con todo hecho decentemente, si te da tiempo en examen hazlo después de entregar y avisar a tu profesora:

//e) Crea un prototipo base let baseMagica = { activar() { return \Activando ${this.nombre}...; } }.

//Usa Object.create(baseMagica) para generar un objeto amuleto al que le asignes luego con “dot notation” las propiedades nombre y poder.

//Llama a amuleto.activar() y comprueba que funciona.


let baseMagica = {
    activar () {
        return `Activando ${this.nombre}...`;
    }
};


let objetoAmuleto = Object.create(baseMagica);

objetoAmuleto.nombre = "Amuleto Sol Radiante";
objetoAmuleto.poder = "Llamarada para romper escudos de matel lunar";

console.log(objetoAmuleto.activar());

//f) Colección y análisis
//Junta todos los objetos anteriores en un array  bestiario = […].

let bestiario = [
    varitaLiteral,
    pocionSubirVida,
    pocionAumentaAtaque,
    capaInvisivilidad,
    escoba,
    reliquiaAntigua,
    objetoAmuleto    
];

//Usa un Map para construir un mapeo de nombre → objeto (clave: nombre de cada objeto).

let mapeo = new Map();

function addValueMap(array, map) {
    array.forEach(item => {
        map.set(item.nombre)
    });
};

addValueMap(bestiario, mapeo);

console.log(mapeo);

//Usa un Set para obtener la lista de todos los “niveles” o “rareza” (la propiedad numérica o de texto que indique fuerza/rango) únicos de tu bestiario.

let unicos = new Set();

function addValueSet(array, set) {
    array.forEach(item => {
        if (item.nivel !== undefined) set.add(item.nivel);
        if (item.rareza !== undefined) set.add(item.rareza);
        if (item.nivelMagico !== undefined) set.add(item.nivelMagico);
    });
};

addValueSet(bestiario, unicos);


//Finalmente, muestra por consola:

//Nombre de cada objeto y su tipo de creación (literal, fábrica, constructor, …).
console.log(`${varitaLiteral.nombre}: objeto literal`);
console.log(`${pocionSubirVida.nombre}: función objeto`);
console.log(`${pocionAumentaAtaque.nombre}: función objeto`);
console.log(`${capaInvisivilidad.nombre}: constructor`);
console.log(`${escoba.nombre}: constructor`);
console.log(`${reliquiaAntigua.nombre}: clase `);
console.log(`${objetoAmuleto.nombre}: Object.create`);
//El tamaño del Set (cuántos niveles/rareza distintos hay).

console.log(`Total de niveles o rareza distintos: ${unicos.size}`);
