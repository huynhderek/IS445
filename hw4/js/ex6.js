var num1 = Math.floor((Math.random() * 100) +1 );
let user= prompt("Enter a number between 1-100 ");
var tries = 0;

function check(user){
    while(true){
      if(user > num1) {
        tries++;
        user=prompt("Input is too high. Please try again. ")
      
      }   
      else if(user<num1) {
        tries++;
        user = prompt("Input is too low. Please try again. ")

      }
    else {
      console.log(`You got it correct! It took you ${tries} tries to get it right.`)
      break;
    }
  }
}
console.log(num1);
console.log(check(user));