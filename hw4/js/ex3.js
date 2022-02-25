const values = [3,11,7,2,9,10]

function accumulate(values)
    {
        let sum = 0;
        for(let i = 0; i < values.length; i++)
        {
            sum = sum + values[i];
        }
        return sum;
    }

console.log("Sum of all arrays = ", accumulate(values));
console.log("Min = ", Math.min(...values));
console.log("Max = ", Math.max(...values));