// Created variable to test variable scope
let num1 = 7;
console.log(`num1 at start of program is: ${num1}`);

// Commented out method 1 and method 2 below for testing variable scope

// // Function using method 1
// function addNumbers(num1, num2) {
//   return num1 + num2;
// }

// console.log(addNumbers(5, 3));

// // Function using method 2
// const addNumbers2 = function(num1, num2) {
//   return num1 + num2;
// }

// console.log(addNumbers2(5, 3));

// Function using method 3

// Used x instead of num1 in the function parameter when testing varialbe scope
//   
//const addNumbers3 = (x, num2) => {
const addNumbers3 = (num1, num2) => {  
  // Experiment with incrementing variable prior to computing sum.
  //   See effect on global and local variables
  //
  //x++;
  //return x + num2;
  //num1++;
  return num1 + num2;  
}

// Test passing a variable rather than a literal number
//console.log(addNumbers3(5, 5));
console.log(addNumbers3(num1, 5));

console.log(`num1 at end of program is: ${num1}`);

let str1 = "ABC";
let str2 = "abc"
let str3 = "Abc"
let str4 = "ABC";
console.log(str1 ==str2);
console.log(str1 ==str3);
console.log(str1 ==str4);
console.log(str2 ==str3);
console.log(str2 ==str4);
console.log(str3 ==str4);