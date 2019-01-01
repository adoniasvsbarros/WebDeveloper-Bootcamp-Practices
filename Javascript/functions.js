// Functions in Javascript

// function declarations

// function
function doSomething(){
    console.log("Welcome to functions!");
}

//function with argument
function doSomethingWithArgument(argument){
    console.log("Hello " + argument);
}

//function with many arguments
function doSomethingWithManyArguments(argument1, argument2, argument3){
    console.log("Hello " + argument1);
    console.log("Hello " + argument2);
    console.log("Hello " + argument3);
}

//function with return
function square(x){
    return x * x;
}

//even
function isEven(x){
    return x % 2 == 0;
}

//factorial
function factorial(x){
    var result = 1;
    for(var i = 2; i <= x; i++){
        result *= i;
    }
    return result;
}

//changing kebab-cae to snake_case
function kebabToSnake(kebabStr){
    var newChar = "_";
    return kebabStr.split("-").join(newChar);
}
function kebabToSnake2(kebabStr){
    var newStr = kebabStr.replace(/-/g , "_");
    return newStr;
}

//function expression
var capitalize = function(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

doSomething();
doSomethingWithArgument("Adonias");
doSomethingWithManyArguments("Adonias", "Caio", "Jhon");
var x = 5;
console.log (x + " squared is equals to " + square(x));