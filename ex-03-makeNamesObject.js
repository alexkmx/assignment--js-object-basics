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

var separarPrimeraCadena = primeraCadena.split(' ')
var separarSegundaCadena = segundaCadena.split(' ')
var separarTerceraCadena = terceraCadena.split(' ')

var nombrePrimCad = separarPrimeraCadena[0]
var nombreSeguCad = separarSegundaCadena[0]
var nombreTerceCad = separarTerceraCadena[0]

var apellidoPrimCad = separarPrimeraCadena[1]
var appellidoSeguCad = separarSegundaCadena[1]
var apellidoTerceCad = separarTerceraCadena[1]

var newObject = {}
newObject[nombrePrimCad]=apellidoPrimCad
newObject[nombreSeguCad]=appellidoSeguCad
newObject[nombreTerceCad]=apellidoTerceCad
return newObject
}




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj.Abe === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
