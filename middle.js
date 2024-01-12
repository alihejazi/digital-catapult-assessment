/*
  Implement a solution that returns the middle character(s) of a string.
  
  - If the string's length is even, return the middle 2 characters.
  - If the string's length is 1, return itself.
*/

export const getMiddle = (str) => {

  if (str.length === 0) {
    return ''
  }

  if (str.length % 2 === 0) {
    return str.substring((str.length / 2) - 1, (str.length / 2) + 1)
  }

  else {
    return str.charAt((str.length - 1) / 2)
  }

}

console.log(getMiddle('test')) // expected result - 'es'
console.log(getMiddle('testing')) // expected result - 't'
console.log(getMiddle('middle')) // expected result - 'dd'
console.log(getMiddle('A')) // expected result - 'A'
