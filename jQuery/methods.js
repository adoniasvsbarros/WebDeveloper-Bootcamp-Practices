// jQuery methods - val(), text(), attr(), html(), addClass(), removeClass(), toggleClass()
// all methods can be viewed in the jQuery API Documentation


// selecting or changing texts
$("h1").text();
$("h1").text("jQuery Methods Demo Page!!");

// selecting or changing htmls
$("ul").html("<li>Adonias</li><li>Outro</li>");

// selecting or changing attributes
$("input").attr("type", "color");
$("input").attr("type", "text");
// changes only first img
$("img:first-of-type").attr("src","https://i.imgur.com/mTj3ney.jpg");
// changes only last img
$("img").last().attr("src","https://i.imgur.com/mTj3ney.jpg");

$("img").css("width","200px");

// selecting or changing values
$("input").val();

// adding, removing, and toggling classes
$("h1").addClass("correct");
$("h1").removeClass("correct");
$("li").addClass("wrong");
$("li").toggleClass("wrong");