// jQuery Events - click(), keypress(), on()

// clicking
$("button").click(function(){
    var text = $(this).text();
    alert("button clicked!");
    console.log("you clicked " + text);
});

/*
// clicking with DOM manipulation
var button = document.querySelectorAll("button");
for(var i =0; i < button.length; i++){
    button[i].addEventListener("click",function(){
        alert("button clicked");
    });
}
*/

// keypress
$("input").keypress(function(event){
    if(event.which === 13){
        alert("you hit enter");
    }
});

// on
$("h1").on("click", function(){
    $(this).css("color", "purple");
});

$("input").on('keypress',function(){
    console.log("keypressed");
});

$("button").on("mouseenter",function(){
    $(this).css("font-weight","bold");
});

$("button").on("mouseleave",function(){
    $(this).css("font-weight","normal");
});