// Exercise 8 - Array of movie objects

//print a list of movie objects

// list of movies
var movies = [
    {
        title: "Batman",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Superman",
        rating: 4,
        hasWatched: false
    },
    {
        title: "Birdbox",
        rating: 2,
        hasWatched: true
    }
]

// print movies
function printProperties(movies){
    movies.forEach(function(movie){
        console.log(buildStringMovie(movie));
    });
}

// build string which describes movies
function buildStringMovie(movie){
    var result = "You have ";
    if(movie.hasWatched){
        result+= "watched ";
    }
    else{
        result+= "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}
