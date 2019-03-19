// YelpCamp application[

var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

var campgrounds = [
    {name: "Jack's Moon", image:"https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104490f2c87ea4e4bdbe_340.jpg"},
    {name: "Mountain People's Rest", image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
    {name: "Salmon Creek", image:"https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
    {name: "Jack's Moon", image:"https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104490f2c87ea4e4bdbe_340.jpg"},
    {name: "Mountain People's Rest", image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
    {name: "Salmon Creek", image:"https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
    {name: "Jack's Moon", image:"https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104490f2c87ea4e4bdbe_340.jpg"},
    {name: "Mountain People's Rest", image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
    {name: "Salmon Creek", image:"https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"}
]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});



app.listen(3000,function(){
    console.log('YelpCamp server has started!');
});