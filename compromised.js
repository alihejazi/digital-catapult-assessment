/*
  You are given an array (length >= 3, could be very large) containing integers.
  The array is either entirely odd integers or entirely even integers except for a single integer N.

  Write a method that takes the array as an argument and returns this 'outlier' N.
*/

export const findCompromised = (arr) => {
  let oddsCount = 0;
  let evensCount = 0;
  let firstOddSeen;
  let firstEvenSeen;

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const searchForEven = oddsCount > 2;
    const searchForOdd = evensCount > 2;
    if (el % 2 === 0) {
      // don't do ! check because if firstEvenSeen is 0 it will be overriden
      if (firstEvenSeen === undefined) {
        firstEvenSeen = el;
      }
      if (searchForEven) {
        return el;
      }
      evensCount ++;
    }
    else {
      // don't do ! check because if firstOddSeen is 0 it will be overriden
      if (firstOddSeen === undefined) {
        firstOddSeen = el;
      }
      if (searchForOdd) {
        return el;
      }
      oddsCount ++;
    }
  }

  if (oddsCount === 1) {
    return firstOddSeen;
  }

  return firstEvenSeen;
}

console.log(findCompromised([2, 4, 0, 100, 4, 11, 2602, 36, 22, 2, 4, 10, -20, -10300])) // expected result - 11 (the only odd number)
console.log(findCompromised([160, 3, 1719, 19, 11, 13, -21, -1, 20001])) // expected result - 160 (the only even number)
