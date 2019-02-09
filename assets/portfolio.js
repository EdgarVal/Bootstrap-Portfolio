$(document).ready(function() { 
console.log("working");

$("#Portfolio").hide();
$("#contact").hide();


$("#homepageLink").on("click", function() {
    $("#homepage").fadeIn("slow");
    $("#Portfolio").hide();
    $("#contact").hide();
});

$("#portfolioLink").on("click", function() {
    $("#Portfolio").fadeIn("slow");
    $("#masthead").show();
    $("#homepage").hide();
    $("#contact").hide();
});

$("#contactLink").on("click", function() {
    $("#contact").fadeIn("slow");
    $("#masthead").show();
    $("#homepage").hide();
    $("#Portfolio").hide();
});

$(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
 });

 


// const page = 0;

// $(".nav-item").on('click', function(command) {
//     switch(command){
//         case $("#homepageLink"):
//             $("#homepage").show();
//             $("#Portfolio").hide();
//             $("#contact").hide();
//         break;
//         case $("#portfolioLink"):
//             $("#Portfolio").show();
//             $("#masthead").show();
//             $("#homepage").hide();
//             $("#contact").hide();
//         break;
//         case $("#contactLink"):
//             $("#contact").show();
//             $("#masthead").show();
//             $("#homepage").hide();
//             $("#Portfolio").hide();
//         break;
//         default:
//     }
// })


});
