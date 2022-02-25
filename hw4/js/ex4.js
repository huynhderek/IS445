


arr1 = []
while(true)
{
    let str =prompt("Enter a word until stop is inputted " );
    
    if(str.toLowerCase() === "stop" && arr1.length === 0 ){   
      console.log("No words to display, Stop was the first word entered.");
      break;
    }
    else if(str.toLowerCase() === "stop"){

        console.log(`The output: ${arr1}`);
        break;
    
    
    } else {
      arr1.push(str);
    }
  }