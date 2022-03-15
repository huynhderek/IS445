// function AddLink()
// {
//   document.getElementById("COB").innerHTML=
//   "<a href='https://www.csulb.edu/college-of-business'>College of Business</a>";
// }
// AddLink();

//Professor's Method meant to have ID's on link to make it easy
//working as the hard solution
//line item
const liElement = document.createElement("li");
//link
const cobLink = document.createElement("a");
cobLink.textContent = "https://www.csulb.edu/college-of-business";
cobLink.href = "https://www.csulb.edu/college-of-business";

//add link to line
liElement.appendChild(cobLink);
//console.log(liElement);
//add line item to the end of document for testing
//document.body.appendChild(liElement);
//above solution worked, now add
//add to the last ul and 2nd li
const ulElements = document.getElementsByTagName("ul");
const lastUl = ulElements[ulElements.length - 1];
console.log(lastUl);

lastUl.childNodes