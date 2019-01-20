// Toggle exercise - Changes page background clicking in one button

var body = document.querySelector("body");

var button = document.querySelector("button");
button.addEventListener("click", changeBodyColor);

// changes background color using toggle
function changeBodyColor(){
    body.classList.toggle("purple");
}

/*
// changes background color using basic logic
var isPurple = false;
function changeBodyColor(){
    if(isPurple){
        body.style.background = "white";
    }
    else{
        body.style.background = "purple";
    }
    isPurple = !isPurple;
}
*/