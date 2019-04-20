// check off specific todos by clicking over them
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// click on X to delete to do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// create new element and append to todos
$("input[type='text']").keypress(function(event){
    // check enter key
    if(event.which === 13){
        // grabbing new to do text from input
        var todoText = $(this).val();
        $(this).val("");
        // create new li and add to ul
        $("ul").append("<li><span class='fa fa-trash'></span> " + todoText + "</li>")
    }
});

// fade in and out input by clicking the + 
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});