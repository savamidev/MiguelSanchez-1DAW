"use strict"

5 > 4

"apple" > "microsoft"

"2" > "12"

undefined == null

undefined === null

null == "\n0\n"

null === +"\n0\n"

console.log(5 > 4) // true
console.log("apple" > "microsoft") // false
console.log("2" > "12") // true porque recoge el primer caracter de cada apartado. Se compara el 2 con el 1, dando true
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log(null == "\n0\n") // false
console.log(null === +"\n0\n") // false
