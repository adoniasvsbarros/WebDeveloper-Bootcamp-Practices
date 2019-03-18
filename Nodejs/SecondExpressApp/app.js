// Simple express app, introducing package.json and more complex routing

var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
   var sounds = {
       pig: "oink",
       cow: "moo",
       dog: "woof woof"
   }
   var animal = req.params.animal.toLowerCase();
   var sound = sounds[animal];
 
   res.send("The " + animal + " says '" + sound + "'" ); 
});

app.get("/repeat/:name/:ntimes", function(req, res) {
  var name = req.params.name;
  var n = Number(req.params.ntimes);
  var finalName = "";
  for(var i = 0; i < n; i++){
      finalName+= name + " ";
  }
  res.send(finalName);
});

app.get("*", function(req, res){
    res.send("What the hack are you doing with your life?");
});

app.listen(3000, function(){
    console.log("server has started!");
});