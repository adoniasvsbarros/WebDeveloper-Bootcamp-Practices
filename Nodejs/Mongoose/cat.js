// ODM (Object Data Mapper )

var mongoose = require('mongoose');

// connect to the database
mongoose.connect("mongodb://localhost:27017/cat_app", { useNewUrlParser: true });

// create schema
var catSchema = new mongoose.Schema({
    name: String, 
    age: Number,
    temperament: String
});

// compile schema into a model
var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB
var george = new Cat({
    name: "George",
    age: 11,
    temperament: "Grouchy"
});

george.save(function(err, cat){
    if(err){
        console.log("Something went wrong");
    } else {
        console.log("We just saved a cat to the database");
        console.log(cat);
    }
});

// Create and save at the same time
Cat.create({
    name: "Puppy",
    age: 15,
    temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

// retrive all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
    if(err){
        console.log("Error");
        console.log(err);
    }
    console.log("All the cats");
    console.log(cats);
})