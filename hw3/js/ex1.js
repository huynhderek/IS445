/* Tutorial 4
   Example 1 JavaScript code
*/

console.log("Derek's Output from Problem #1");

let firstName = prompt("Please enter your first name: ");
let numUnits = prompt("Enter the number of units completed (>= 0): ");

if (Number(numUnits) >= 0) {
   //console.log("valid input");
   units = Number(numUnits);
   let grade;
   if (units <= 30) {
      grade = "Freshman";
   } else if (units <= 60) {
      grade = "Sophomore";
   } else if (units <= 90) {
      grade = "Junior";
   } else {
      grade = "Senior";
   }
   // Print output
   console.log(`Hello ${firstName}`);
   console.log(`Your grade standing is ${grade}`);
} else {
   console.log(`${firstName} you entered ${numUnits}.  You must enter a number >= 0`);
}

