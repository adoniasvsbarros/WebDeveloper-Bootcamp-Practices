// Creating relationships with embedding

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/blog_demo", { useNewUrlParser: true });

// Create schemas

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// USER - name, email
var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [postSchema] // Embedding post in user
});

var User = mongoose.model("User", userSchema);

// Create user, add post to user, save user on DB

var newUser = new User({
    name: "Harry",
    email: "harry_potter@hotmail.com"
});

newUser.posts.push({
    title: "How to become strong",
    content: "Just eat more food"

})

newUser.save(function(err, user){
    if(err){
        console.log(err);
    } else{
        console.log(user);
    }
});


var newPost = new Post({
    title: "Reflections on apples",
    content: "they are delicious"
});

newPost.save(function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
})

// Find user, and add post to user (show post's object)
User.findOne({name: "Harry"}, function(err, user){
    if(err){
        console.log(err);
    } else {
        user.posts.push({
            title: "3 things I hate",
            content: "salad, beans, onions"
        });
        user.save(function(err){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});