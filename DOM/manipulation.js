// DOM Manipulation



// MANIPULATING STYLE

// Style property
var tag = document.getElementById("highlight");

// Manipulate style directly
tag.style.color = "blue";
tag.style.border = "10 px solid red";
tag.style.fontSize = "50px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

// adding a style class to a tag
var p = document.querySelector("p");
p.classList.add("big");

// removing a style from a tag
p.classList.remove("big");

// toggling style - if style is applied, remove it, if it is not, add it
p.classList.toggle("big");




// MANIPULATING TEXT AND CONTENT

// textContent - returns a string of all the text contained in a given element
var lastPtextContent = document.getElementById("textContentExample");
lastPtextContent.textContent = "Another text instead of the first one defined in the HTML";

// innerHTML - similar to textContent, except it returns a string of all the HTML contained in a given element
var lastPinnerHTML = document.getElementById("innerHTMLExample");
lastPinnerHTML.innerHTML = "Another text instead of the first one defined in the HTML";


// obs: textContent treats everything like a text, so if you try to use a tag inside it, it will not work
// obs: innerHTML treats tags



// MANIPULATING ATTRIBUTES

// use getAttribute() and setAttribute() to read and write attributes like src or href
var link = document.querySelector("a");
link.getAttribute("href");
link.setAttribute("href","http://www.globo.com");

