

const r = Number(prompt("Enter the circle radius:"));

const circle = {
    circumference() {
        result =2*Math.PI*r;
        return result
    },
    area() {
        result = Math.PI * (Math.pow(r,r));
        return result
    } 
 }
 
// TODO: create the circle object here

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
