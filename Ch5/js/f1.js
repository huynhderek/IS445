console.log("test output from f1");

function sayHello(name) {
  const message = `Hello, ${name}!`;
  // Comment out the return below and review the output
  return message;
}


let functionValue = sayHello("Baptiste");
console.log(functionValue);

// console.log(sayHello("Baptiste")); // "Hello, Baptiste!"
console.log(sayHello("Thomas"));   // "Hello, Thomas!"

// Play with Random

for (let i = 0; i < 10; i++) {
  console.log(Math.trunc((Math.random() * 10) + 1));
}