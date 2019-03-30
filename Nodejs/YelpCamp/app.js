// YelpCamp application

// REQUIREMENTS
var express         =    require('express'),
    app             =    express(),
    bodyParser      =    require("body-parser"),
    mongoose        =    require("mongoose"),
    passport        =    require("passport"),
    LocalStrategy   =    require("passport-local"),
    methodOverride   =    require("method-override"),
    Campground      =    require("./models/campground"),
    Comment         =    require("./models/comment"),
    User            =    require("./models/user"),
    seedDB          =    require("./seeds");

var commentRoutes     = require("./routes/comments"),
    campgroundRoutes  = require("./routes/campgrounds"),
    indexRoutes       = require("./routes/index");

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
//seedDB();

// Passport configuration
app.use(require("express-session")({
    secret: "adonias secret-key",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// middleware for passing user information to views
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

// requiring routes
app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

// server listening
app.listen(3000,function(){
    console.log('YelpCamp server has started!');
});