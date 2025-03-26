"use strict"

let navegador = prompt("Introduce tu navegaodor:");
const palabras = ["Chrome", "Firefox", "Safari", "Opera"];

if (navegador === "Edge") {
    alert("Tienes Edge!");

} else if (navegador === "Explorer") {
    alert("Vuelve a primero no hemos conseguido enseñarte nada");

} else if (palabras.includes(navegador)) {
    alert("Está bien, soportamos estos navegadores también.")

} else {
    alert("Esperamos que esta página se vea bien!")
}