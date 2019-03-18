// Simple express app, testing routing without HTML

var express = require("express");
var app = express();

// "/" => Hello
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye" => Good bye
app.get("/bye", function(req, res){
   res.send("Good bye!"); 
});

// "/dog" => AUAU
app.get("/dog", function(req, res) {
    console.log("SOMEONE MADE A RESQUEST TO /DOG")
   res.send("AUAU!") 
});


app.get("/r/:subredditName", function(req, res) {
   var subreddit = req.params.subredditName;
   res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT" )
});

app.get("/r/:subredditName/comments/:id/:postname", function(req, res){
    console.log(req.params);
   res.send("This is a comments page"); 
});

app.get("*", function(req, res){
    res.send("This request does not exist!");
});

app.listen(3000, function(){
    console.log("server has started!");
});