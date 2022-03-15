//get all body nodes
const bodyElement = document.body;
//test
//console.log(bodyElement);

//iterate through all child nodes
for(let i = 0; i< bodyElement.childNodes.length; i++){
    console.log(bodyElement.childNodes[i]);
}

//methoid 2 convert into array
const bodyElement2 = Array.from(document.body.childNodes);
bodyElement2.forEach(element => {
    console.log("node", element);
})
