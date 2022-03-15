//Write a java program that shows on the page a list of newspapaer defined in a javascript array.
//each link must be clickable

// Newspaper list
const newspapers = ["https://www.nytimes.com", 
"https://www.washingtonpost.com", "http://www.economist.com"];


//get div element (will use in loop)
const divContent= document.createElement("a");
//loop to create link element, set properties, and add to HTML page
newspapers.forEach(paper => {
  //create a link
  const linkElement = document.createElement("a");
  //set properties
  linkElement.href = paper;
  linkElement.textContent = paper;
  //add to div (get the element and add in the loop. 
  //Could also get element outside of loop and then add only here
document.getElementById("content").appendChild(linkElement);
//add a break <br>
divContent.appendChild(linkElement);
divContent.appendChild(document.createElement("br"))



})