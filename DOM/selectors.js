// DOM Selectors

// document.getElementsById() - select by id
var tag = document.getElementById("highlight");

// document.getElementByClassName() - select by class
var tags = document.getElementsByClassName("bolded");
console.log(tags);

// document.getElementsByTagName - select by tag
var tags2 = document.getElementsByTagName("li");
console.log(tags2);

// document.querySelector - select first element with CSS syntax
var tag2 = document.querySelector("#highlight");
var tag2 = document.querySelector(".bolded");

// document.querySelectorAll - select all elements with CSS syntax
var tags3 = document.querySelectorAll("li");

// Ways to select the first paragraph
document.querySelector("#first");
document.querySelector(".special")
document.querySelectorAll(".special")[0];
document.getElementById("first");
document.getElementsByClassName("special")[0];
document.getElementsByTagName("p")[0];