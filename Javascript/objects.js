// Objects in Javascript

// initialization 1
var person = {
    name: "Cindy",
    age: 32,
    city: "Minessota"
};

// initialization 2
var person2 = {}
person2.name = "Cindy";
person2.age = 32;
person2.city = "Minessota";

// initialization 3
var person3 = new Object();
person3.name = "Cindy";
person3.age = 32;
person3.city = "Minessota";

// access property
person["name"];
person["age"];
person["city"];
person.name;
person.age;
person.city;

// update values
person.name = "Joe";
person.age +=1;
person.city = "Quebec";

// nested objects and arrays (a list with objects)
var posts = [
    {
        title: "Cats are great",
        author: "Adonias",
        comments: ["Awesome post", "Terrible post"]
    },
    {
        title: "Dogs are wonderful",
        author: "Dog lover",
        comments: ["I dont agree", "I agree"]
    }
]


//methods
var obj = {
    name: "chuck",
    age: 45,
    add: function(x,y){
        return x+y;
    }
}

// different methods for different objects with the same name
var dog = {}
var cat = {}

dog.speak = function(){
    return "WOOF!";
}

cat.speak = function(){
    return "MEOW!";
}

dog.speak();
cat.speak();

// keyword this
var comments = {}
comments.data = ["Good job", "Bye", "Hello"];

// defining function separately
function print(arr){
    arr.forEach(function(el){
        console.log(el);
    });
}

// defining functions as method
comments.print = function(){
    this.data.forEach(function(el){
        console.log(el);
    });
}
comments.print();    