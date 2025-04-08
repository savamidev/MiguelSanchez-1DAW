"use strict"

let grupos = [

    {nombre: "ACDC", genero: "Rock"},
 
    {nombre: "Cold Play", genero: "Pop"},
 
    {nombre: "NCT Dream", genero: "K-Pop"},
 
    {nombre: "Metallica", genero: "Heavy Metal"}
 
 ];
 

 //filtra los grupos por género obtenido aquellos que son de Heavy Metal.
grupos.forEach(item => {
    if (item.genero === "Heavy Metal") { 
        console.log(item);
    }
});


//Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.
console.log(
    grupos.find(grupo => (grupo.nombre === "Cold Play"))
);

//¿En qué posición del array se encuenta “Cold Play”?
console.log(
    grupos.findIndex(grupo => grupo.nombre === "Cold Play")
);