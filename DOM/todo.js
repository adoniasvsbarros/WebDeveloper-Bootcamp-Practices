// Hoover exercise - hover or click in names and change properties 
var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
    });
    lis[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });
    lis[i].addEventListener("click",function(){
        this.classList.toggle("done");
    })
}

/*
var firstLi = document.querySelector("li");

firstLi.addEventListener("mouseover", function(){
    firstLi.style.color = "green";
});

firstLi.addEventListener("mouseout", function(){
    firstLi.style.color = "black";
});
*/