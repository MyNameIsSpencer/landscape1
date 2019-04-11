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
  // split string n into an array of single character strings
  let numArr = n.split('');

  // check for edge case: m is <= the number of digits, if true return 0;
  if (numArr.length <= m) return 0;

  // convert each string element in the array to an integer
  numArr = numArr.map( number => parseInt(number));

  // arrange integer array from lowest to highest
  numArr.sort((a, b) => a - b);

  // take m number of elements, starting with the first
  // because elements are ordered, this will produce smallest m digits
  numArr = numArr.slice(0, m);

  // combine the integer elements into a single string
  numArr = numArr.join('');

  return numArr;
}


minimalist('856463', 4);

//
// <script>
// function myFunction() {
//   var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//   var citrus = fruits.slice(1, 3);
//   document.getElementById("demo").innerHTML = citrus;
// }
// </script>




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
