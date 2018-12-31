<!-- Guessing a number -->

// create secret number
var secretNumber = 7;

// ask user for guess
var guess = Number(prompt("Guess a number"));

// check if guess is right
if(guess < secretNumber){
    alert("the number is too low, guess again");
}
else if(guess > secretNumber){
    alert("the number is too high, guess again");
}
else{
    alert("You guessed the number! Congratulations!");
}

var number = 5;

while(number <= 50){
    if(number % 5 == 0 && number % 3 == 0){
        console.log(number);
    }
    number = number + 1;
}