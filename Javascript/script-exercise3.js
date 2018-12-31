<!-- Conditions in javascript -->
var age = prompt("what is your age? ")

if(age < 0){
    console.log("Error, you provided a negative age");
}

if(age == 21){
    console.log("Happy 21st birthday!!");
}

if(age % 2 != 0){
    print("Your age is odd");
}


if( age % Math.sqrt(age) == 0 ){
    console.log("Age is a perfect square");
}