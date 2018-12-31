// global variable
var list = [];

// start app after 0.5 seconds
window.setTimeout( function(){
    // choose option
    var option = prompt("Choose the option");

    // app
    while(option !== "quit"){
        if(option === "new"){
            addToList(list);
        }
        else if (option === "list"){
            printList(list);
        }
        else if(option === "delete"){
            deleteFromList(list);
            printList(list);
        }
        var option = prompt("Choose the option");
    }
    console.log("You quit the app");
}, 500);

//functions

function printList(list){
    console.log("******************************************");
    list.forEach(function(element, i){
        console.log(i + " : " + element);
    })
    console.log("******************************************");
}

function deleteFromList(list){
    var index = prompt("What is the index?");
    list.splice(index,1);
    console.log("deleted todo")
}

function addToList(list){
    var newItem = prompt("What do you want to add?");
    list.push(newItem);
    console.log(newItem +" added");
}