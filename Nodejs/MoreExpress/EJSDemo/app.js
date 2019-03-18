// Simple express app, introducing views, templates, static files and embedded javascript in HTML

var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("home");
});

app.get("/fallinlovewith/:dog", function(req, res){
   var dog = req.params.dog;
   res.render("love", {dogVar: dog});
});

app.get("/posts", function(req, res) {
    var posts = [
       {title: "Post 1", author: "Susy"},
       {title: "Post 2", author: "Mark"},
       {title: "Post 3", author: "Doni"}
       ]
       res.render("posts", {posts : posts});
});

app.listen(3000, function(){
    console.log("server is listening");
});