/**
 * makeNamesObject()
 *
 * Create a function that accepts 3 strings with first + last names as arguments
 * The function should return an object with 3 properties:
 * The first name will be a property-name and the last name will be the value
 *
 * EXAMPLE:
 * makeNamesObject("George Washington", "John Adams", "Kanye West")
 *   =>
 *   {
 *      George: "Washington",
 *      John: "Adams",
 *      Kanye: "West"
 *   }
 *
 * HINT: You may need to review `object bracket notation` to dynamically
 *       set an object's property name.
 *
*/


// funcion que acepte 3 cadenas como argumentos; nombre y apellido
function makeNamesObject(primeraCadena,segundaCadena,terceraCadena) {
// debera regresar un objeto con 3 propiedades: name: 1st name; value: last name
nombre1 = primeraCadena.split(" ")
nombre2 = segundaCadena.split(" ")
nombre3 = terceraCadena.split(" ")


var objetoUno = {}

objetoUno = nombre1[0],nombre1[1]


console.log(objetoUno);
// objetoUno.push(nombre1[0])
}

// console.log(objetoUno);







//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj.Abe === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
