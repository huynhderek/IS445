const password = "secret"
let tries = 0;
let input = prompt("Enter password: ");

while ((input !== password && tries <= 3)) { 
    if (tries === 3) {
        console.log(`Your account is locked! You failed to enter the correct password ${tries} times.`);
        tries++;
    } else {
        input = prompt("Enter password: ");
        tries++
    }
}
if (input === password) {
    console.log(`You entered the correct password after ${tries} attempts.`)
}