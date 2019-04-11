// 6. Given a non-negative integer n as a string, i.e. “1234”, remove m digits from n so the new n is the smallest possible number.
//
// For example,
// “1234”, 2  -> ”12”
// “332”, 3 -> “0”
// “10230”, 1 -> “230”
//
// k <= n <= 10000
//
// Write your solution in any language that you prefered. Please explain your thought process clearly in between your code.



function minimalist(n, m) {
  let numArr = n.split('');
  if (numArr.length === m) return 0;

  numArr = numArr.map( number => parseInt(number));


  numArr.sort((a, b) => a - b);

  console.log(numArr);
}

minimalist('48521', 3);
// function findNumber(values) {
//   let result = [];
//
//   for (let i = 0; i < values.length; ++i) {
//     if (0 <= values[i]) {
//       result[values[i]] = true;
//     }
//   }
//
//   for (let i = 1; i <= result.length; ++i) {
//     if (undefined === result[i]) {
//       return i;
//     }
//   }
//
//   return 1
// }
