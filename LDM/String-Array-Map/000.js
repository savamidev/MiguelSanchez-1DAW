"use srtict";

// Declara un array vacío.
let arrayEmpty = [];

// Declara un array com mas de 5 elementos.
let arrayElements = [1, 2, 3, 4, 5, 6, 7];

// Encuentra la longitud de tu array.
let longitudArray = (array) => array.length;

console.log(longitudArray(arrayElements));

// Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
let middlePosition = (array) => Math.floor(longitudArray(arrayElements) * 0.5); // IMPORTANTE: USO DE . NO DE , 😜

function showValueArray(array) {
  array.forEach((element, index) => {
    if (index === 0 || index === middlePosition(array) || index === array.length - 1) {
      console.log(`Elemento en la posición ${index}: ${element}`);
    }
  });
}

showValueArray(arrayElements);

// Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
let mixedDataTypes = ["Pelota", 23, 10.55, "Jugar", 2, 0.43];

console.log(longitudArray(mixedDataTypes));

// Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// Imprima el array usando console.log().
console.log(itCompanies);

// Imprima el número de empresas en el array.
console.log(itCompanies.length);

// Imprime la primer empresa , la intermedia y la última empresa
showValueArray(itCompanies);

// Imprime cada empresa.
itCompanies.forEach((item) => {
  console.log(item);
});

// Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
itCompanies.forEach((item) => {
  console.log(item.toUpperCase());
});

// Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
console.log(itCompanies.join(", "));

// Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
let empresa = "Google";

console.log(
  itCompanies.includes(empresa)
    ? `La empresa ${empresa} si se encuentra.`
    : `La empresa ${empresa} no se encuentra.`
);

// Filtre las empresas que tienen más de una 'o' sin el método filter()
const CARACTER = "o";

let arrayMaxO = (array) => {
  let arrayAux = [];

  array.forEach((item) => {
    let isVerify = countO(item);
    if (isVerify) {
      arrayAux.push(item);
    }
  });

  return arrayAux;
};

function countO(item) {
  let letras = item.split("");
  let contador = 0;

  for (let i = 0; i < letras.length; i++) {
    if (letras[i] === CARACTER) {
      contador++;
    }
  }
  return contador > 1 ? true : false;
}

console.log(arrayMaxO(itCompanies));

// Ordene el array usando el método sort()
console.log(itCompanies.sort());

// Invierte la array usando el método reverse()
console.log(itCompanies.reverse());

// Cortar las primeras 3 empresas del array
console.log(itCompanies.slice(0, 3));

// Cortar las últimas 3 empresas del array
console.log(itCompanies.slice(0, (itCompanies.length - 3)));

// Cortar la empresa o empresas intermedias de TI del array
function eliminarIntermedias(array) {
    if (array.length <= 2) {
        return array;
    } else {
        let arrayAux = [];
        array.forEach((item, index) => {
            if (index != 0 && index != (array.length - 1)) {
                arrayAux.push(item);
            }
        });

        return arrayAux;
    }
}

let arrayTI = eliminarIntermedias(itCompanies);
console.log(arrayTI);


// Eliminar la primera empresa de TI del array
itCompanies.shift();
console.log(itCompanies);

// Eliminar la empresa o empresas intermedias de TI del array
itCompanies.splice(1, (itCompanies.length - 2));
console.log(itCompanies);

// Elimine la última empresa de TI del array
itCompanies.pop();
console.log(itCompanies);

// Eliminar todas las empresas de TI
itCompanies = [];
console.log(itCompanies);
