// for(var i=0;i<12;i++){//a loop to create 12 elements
//     var output = document.getElementById("output");
//     var tr = document.createElement("tr");//create row
//     var td = document.createElement("td");//create column
//     td.innerText=i+1;//put value
//     tr.appendChild(td);//append column to row
//     output.appendChild(tr);//append row to main element
//     if((i+1)%4==0){//if element number is divisible by 4 
    
//         td.classList.add("four")//then add it to the class
        
//     }
// }
//Prof Solution 
//Create a tanle with 12 rows


//create a table elements
const tblElements = document.createElement("table");

//loop to create rows
for (let i = 1; i<=12; i++){
    //create a row
    const rowElements = document.createElement("tr");
    
    //create table data
    const tdElement = document.createElement("td");
    tdElement.innerHTML = i;
    
    //Check if divis by 4 if yes add class for blue background
    if(i % 4 ===0){
        tdElement.classList.add("bgBlue")
    }
    //add the td to the tr. then tr to the table
    rowElements.appendChild(tdElement);
    tblElements.append(rowElements);


}
//add table to document
document.getElementById("output").appendChild(tblElements);