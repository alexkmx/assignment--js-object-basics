/**
 * createNameObject()
 *
 * Write a function called `createNameObject` that takes a full first
 * & last name string and returns an object with `firstName`
 * and `lastName` properties that have string values.
 *
**/
function createNameObject(takeString) {

var separar = takeString.split(' ')
var firstNameString = separar[0]
var lastNameString = separar[1]

var myObject = {}

myObject.firstName = separar[0]
myObject.lastName = separar[1]

  return myObject
}






//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var nameObj1 = createNameObject("Benzo Lorenzo")
console.assert(nameObj1.firstName === 'Benzo')
console.assert(nameObj1.lastName === 'Lorenzo')

var nameObj2 = createNameObject("Felipe Tortuga")
console.assert(nameObj2.firstName === 'Felipe')
console.assert(nameObj2.lastName === 'Tortuga')

var nameObj3 = createNameObject("Lupe Maria")
console.assert(nameObj2.firstName === 'Lupe')
console.assert(nameObj2.lastName === 'Maria')
