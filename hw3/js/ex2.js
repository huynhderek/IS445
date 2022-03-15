/* Tutorial 4
   Example 2 JavaScript code
*/

console.log("Derek's Output for #2 on homework");

let dayEntered = prompt("Enter a day of the week: ");

console.log(`You entered: ${dayEntered}`);
//Make a switch statement to set the day entered to lowercase. 
switch(dayEntered.toLowerCase()){
   case "mon" : //The case set for user's input to output the next coming day
      nextDay = "tue";
      break;
   case "tue":  //break if user's input is met
      nextDay = "wed";
      break;
   case "wed": 
      nextDay = "thu";
      break;   
   case "thu": 
      nextDay = "fri";
      break;
   case "sat": 
      nextDay = "sun";
      break;
   case "sun": 
      nextDay = "mon";
      break;
}
console.log(`The following day is: '${nextDay}.`);
//output the next day corresponding to user's input day