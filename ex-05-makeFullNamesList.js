/**
 * makeFullNamesList()
 *
 * Write a function called `makeFullNamesList` that takes an array
 * of objects with first and last names properties and returns
 * an array of strings, where each string is a full title + first & last
 * name.
 *
**/

function getFullNames(takeArrayString) {
var arrayNames = []
var arrayNames2 = []
var arrayNames3 = []
var arrayNames4 = []

  for(var i = 0;i < takeArrayString.length; i++){

if (takeArrayString[i].gender === 'male') {
  takeArrayString[i].gender = 'Mr.'
}  else {
  takeArrayString[i].gender = 'Ms.'
}
arrayNames = takeArrayString[0].gender+takeArrayString[0].first+takeArrayString[0].last
arrayNames2 = takeArrayString[1].gender+takeArrayString[1].first+takeArrayString[1].last
arrayNames3 = takeArrayString[2].gender+takeArrayString[2].first+takeArrayString[2].last
arrayNames4 = takeArrayString[3].gender+takeArrayString[3].first+takeArrayString[3].last


}
console.log(arrayNames.toString());
console.log(arrayNames2.toString());
console.log(arrayNames3.toString());
console.log(arrayNames4.toString());
return arrayNames.toString()
return arrayNames2.toString()
return arrayNames3.toString()
return arrayNames4.toString()
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var customersList = [
    { first: 'Joe', last: 'Blogs', gender: 'male'},
    { first: 'Kate', last: 'Smith', gender: 'female'},
    { first: 'Dave', last: 'Jones', gender: 'male'},
    { first: 'Jacky', last: 'White', gender: 'female'}
]

var moreCustomersList = [
	{ first: 'Ruby', last: 'Scooby', gender: 'female'},
	{ first: 'Jen', last: 'Vin', gender: 'female'},
	{ first: 'Dan', last: 'Theman', gender: 'male'},
]

//===============================
var fullNamesList1 = getFullNames(customersList)
console.assert(typeof fullNamesList1[0] === "string")
console.assert(fullNamesList1[0] === "Mr. Joe Blogs")
console.assert(fullNamesList1[1] === "Ms. Kate Smith")
//-------------------------------
var moreNamesList = getFullNames(moreCustomersList)
console.assert(typeof moreNamesList[1] === "string")
console.assert(moreNamesList[1] === "Ms. Ruby Scooby")
console.assert(moreNamesList[2] === "Mr. Dan Theman")
