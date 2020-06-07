
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
    $(this).addClass("border border-primary rounded-lg").siblings().removeClass("border border-primary rounded-lg");
    var name = $(this).attr("name");
    var id = $(this).attr("id");
    navbar_colour = name.slice(0,7);
    body_colour = name.slice(8,);
    paint(navbar_colour,body_colour,id);
    console.log("Navbar colour : "+navbar_colour+"\n"+"Body colour : "+body_colour+"\n"+"Image name : "+id+"\n");
});

// $("img.colour").on("mouseover", function () {
//     $(this).addClass("border border-dark-lg rounded-circle");
//  });

// $("img.colour").on("mouseout", function () {
//     $(this).removeClass("border border-dark-lg rounded-circle");
// });


$(".player").on("click",function()
{
    if ($(this).attr("id") == "P1")
    {
        $(this).addClass("selected selected-dark box-shadow-left");
        $("#P2").removeClass("selected selected-dark box-shadow-right");
    }
    else if ($(this).attr("id") == "P2"){
        $(this).addClass("selected selected-dark box-shadow-right");
        $("#P1").removeClass("selected selected-dark box-shadow-left");
    }
});
    
function paint(navcol, bodycol, image_id)
{
    $(".navbar").css("background-color", navcol);
    $("body").css("background-color", bodycol);
    
    switch (image_id)
    {
        case "image1":
            individualPaint("default","light","black","white","white","black","white");
            break;
        case "image2":
            individualPaint("dark","dark","black","black","black","black","black");
            break;
        case "image3":
            individualPaint("white","light","white","white","white","white","white");
            break;
        case "image4":
            individualPaint("black", "primary", "black", "black", "black", "black", "black");
            break;
        case "image5":
            console.log("Hello, image5"+ "\n");
            break;
        case "image6":
            console.log("Hello, image6"+ "\n");
            break;
        case "image7":
            console.log("Hello, image7"+ "\n");
            break;
        case "image8":
            console.log("Hello, image8"+ "\n");
            break;
        case "image9":
            console.log("Hello, image9"+ "\n");
            break;

    }
        
}

function individualPaint(navHeading, buttonColour, mainAreaText, mainAreaBorder, mainAreaPlayerMode, scoreBoardText, gameBoardBorder){
    
    // heading colour

    if (navHeading == "black")
    {
        $("#navbarHeading").attr("class","text-dark");
    }
    else if(navHeading == "white" || navHeading == "default")
    {
        $("#navbarHeading").attr("class", "text-white");
    }

    // Button

    if(buttonColour == "dark" || buttonColour == "black")
    {
        $("#navbarButton").attr("class", ".btn .btn-outline-dark .navbar-button");
    }
    else if (buttonColour == "light" || buttonColour == "white") {
        $("#navbarButton").attr("class", ".btn .btn-outline-light .navbar-button");
    }
    else if (buttonColour == "success") {
        $("#navbarButton").attr("class", ".btn .btn-outline-success .navbar-button");
    }
    else if (buttonColour == "warning") {
        $("#navbarButton").attr("class", ".btn .btn-outline-warning .navbar-button");
    }
    else if (buttonColour == "info") {
        $("#navbarButton").attr("class", ".btn .btn-outline-info .navbar-button");
    }
    else if (buttonColour == "primary") {
        $("#navbarButton").attr("class", ".btn .btn-outline-primary .navbar-button");
    }

    // Main area text

    if(mainAreaText == "white"){

        // main area border

        if (mainAreaBorder == "black") {
            $("#mainArea").attr("class", "row content main-area text-white border-dark");
        }
        else if(mainAreaBorder == "white"){
            $("#mainArea").attr("class", "row content main-area text-white"); // border colour is white by default
        } 
    

    }
    else if(mainAreaText == "black"){


        // main area border

        if (mainAreaBorder == "black") {
            $("#mainArea").attr("class", "row content main-area border-dark");
        }
        else if (mainAreaBorder == "white") {
            $("#mainArea").attr("class", "row content main-area"); // border colour is white and text is black by default
        }

        // Black by default
    }

    //P1 And P2

    if(mainAreaPlayerMode == "black")
    {
        $(".player").css({ "border-color": "black" }); //,"color":"black"
    }
    else if (mainAreaPlayerMode == "white"){
        $(".player").css({ "border-color": "white" }); //,"color":"white"
    }
    // $(".selected-dark").addClass("text-dark");
    // Score heading

    if(scoreBoardText == "white"){
        $(".score-board").css("color","white");
    }
    else if (scoreBoardText == "black") {
        $(".score-board").css("color", "black");
    }

    /// Board colour and symbols

    if(gameBoardBorder == "black"){
        $(".main-table .main-td").css("border-color","black");
        $("#gameBoard").css("color","black");
    }
    else if (gameBoardBorder == "white") {
        $(".main-table .main-td").css("border-color", "white");
        $("#gameBoard").css("color", "white");
    }
}

