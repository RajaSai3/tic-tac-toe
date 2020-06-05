
// $(document).ready(function () {

 
//         $("#popoverColoursTable").hide();
//         $(".navbar-button").click(function (){
//             $("#popoverColoursTable").slideDown(400);
//         });


//         $("#popoverColoursTable img").on("mouseover",function ()
//         {
            
//             $(this).addClass("border border-danger rounded");
//             console.log("Mouse Over : " + $(this).attr('id'));
//     });

//     $("#popoverColoursTable img").on("mouseout", function () {
        
//             $(this).removeClass("border border-danger rounded");
//         console.log("Mouse out : " + $(this).attr('id'));
//         });

//         $("#popoverColoursTable img").click(function (){
//             $(this).addClass("border border-primary rounded").siblings().removeClass("border border-primary rounded");
//             $("#popoverColoursTable").slideUp(400);
//             console.log("Clicked : " + $(this).attr("id"));
//         })
     
    
// });



// $("#popoverColoursTable").hide();
// $(".navbar-button").on("click",function () {
//     $("#popoverColoursTable").slideDown("slow")
//  });

var navbar_colour,body_colour;

$("img.colour").on("click", function (){
    $(this).addClass("border border-primary rounded").siblings().removeClass("border border-primary rounded-circle");
    var x = $(this).attr("name");
    navbar_colour = x.slice(0,7);
    body_colour = x.slice(8,);
    $(".navbar").css("background-color", navbar_colour);
    $("body").css("background-color",body_colour);
    console.log("Navbar colour : "+navbar_colour+" "+"Body colour : "+body_colour);
});

$("img.colour").on("mouseover", function () {
    $(this).addClass("border border-dark-lg rounded-circle");
 });

$("img.colour").on("mouseout", function () {
    $(this).removeClass("border border-dark-lg rounded-circle");
});




