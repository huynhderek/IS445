/* HW 4 Problem 1 
*/
// program for a simple calculator

// program for a simple calculator



// take the operand input
let number1 = prompt('Enter first number: ');
let number2 = prompt('Enter second number: ');
number1 = parseInt(number1);
number2 = parseInt(number2);
// take the operator input
let operator = prompt('Enter operator ( either +, -, * or / ): ');
let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);

