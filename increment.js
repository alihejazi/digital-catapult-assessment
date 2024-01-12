/*
 Write a function which increments the last number in a string.

  - If the string already ends with a number, the number should be incremented by 1.
  - If the string does not end with a number. the number 1 should be appended to the new string.
*/

const incrementStr = (str) => {
  // implement your solution here
  return 'new string'
}

console.log(incrementStr('dc')) // expected result - dc1
console.log(incrementStr('digiCat23')) // expected result - digiCat24
console.log(incrementStr('digiCat0042')) // expected result - digiCat0043
console.log(incrementStr('dc9')) // expected result - dc10
console.log(incrementStr('dc099')) // expected result - dc100
console.log(incrementStr('digi4cat5')) // expected result - digi4cat6
