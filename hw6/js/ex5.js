for(var i=0;i<12;i++){//a loop to create 12 elements
    var output = document.getElementById("output");
    var tr = document.createElement("tr");//create row
    var td = document.createElement("td");//create column
    td.innerText=i+1;//put value
    tr.appendChild(td);//append column to row
    output.appendChild(tr);//append row to main element
    if((i+1)%4==0){//if element number is divisible by 4 
    
        td.classList.add("four")//then add it to the class
        
    }
}
