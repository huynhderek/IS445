// function highlight() {
    
//     const nodes = document.getElementsByTagName("p");
//     for (let i = 0; i < nodes.length; i++) {
//       nodes[i].style.fontWeight = "bold";
//       nodes[i].style.backgroundColor = "yellow";
//     }

//   }
//   highlight();


//Prof first method
const paraElements = Array.from(document.getElementsByTagName("p"));

paraElements.forEach(para => {
  para.style.backgroundColor = "yellow";
  para.style.fontWeight = "bold";
})