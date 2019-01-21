// selecting in jQuery $("selectorGoesHere")
// changing style &("selector").css(property,value) or $("selector").css(variable)

// example
$("h1").css("color","yellow");

// example using styles 
var styles = {
    color: "red",
    background: "pink",
    border: "2px solid purple"
}
$("#weird").css(styles);

// example using styles with built in variable
$("li").css({
    fontSize: "10px",
    border: "3px dashed purple",
    background: "rgba(89,45,20,0.5)"
})

// comparing with old DOM manipulation
var weird = document.querySelector("#adorable");
weird.style.color = "red";
weird.style.background = "pink";
weird.style.border = "2px solid purple";

