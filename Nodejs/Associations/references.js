// Creating relationships with reference

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/blog_demo_2", { useNewUrlParser: true });

var Post = require('./models/post');
var User = require('./models/user');

// Create user
User.create({
    name: "Bob",
    email: "bob@gmail.com"
});

// Create post, find user, and add post to user (show post's id)
Post.create({
    title: "Any title pt 4",
    content: "Any content"
}, function(err, post){
    User.findOne({name: "Bob"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});


// Create post, find user, and add post to user (show post's object)
User.findOne({name: "Bob"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});
