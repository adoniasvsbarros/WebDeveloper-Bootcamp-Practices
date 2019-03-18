// Simple express app, testing POST request into a list of friends

var express = require("express");
var body = require("body-parser")
var app = express();

app.use(body.urlencoded({extend:true}));
app.set("view engine", "ejs");

var friends = ["Doni", "Gina", "Peralta", "Caio"];

app.get("/", function(req, res){
    res.render("home");
})

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
   res.render("friends", {friends : friends}); 
});


app.listen(3000, function(){
    console.log("Server started!");
});