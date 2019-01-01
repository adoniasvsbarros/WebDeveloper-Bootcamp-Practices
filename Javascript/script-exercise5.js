// Exercise 5 - Annoy-O-Matic - waiting for one answer "yes"

var answer = prompt("Are we there yet?");
while(answer.indexOf("yes") === -1 ){
    var answer = prompt("Are we there yet?");
}
alert("Yes we made it!");