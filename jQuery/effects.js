// jQuery Effects - fadeOut() fadeIn() fadeToggle() slideUp() slideDown() slideToggle()

// fadeOut && fadeIn && fadeToggle
$("button").on("click",function(){
    $(".fadeOutDiv").fadeOut(1000,function(){
        $(this).remove();
    });
    $("#fadeInDiv").fadeIn(1000);

    // $("div").fadeToggle(500);
});

// slideDown
$("button").on("click",function(){
    $("div").slideDown();
    $("div").slideUp();
    $("div").slideToggle(1000,function(){
        console.log("slide is down");
        $(this).remove();
    });
});


