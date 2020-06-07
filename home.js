
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
var gameOver = true;
var rowValue = [];
var columnValue = [];
var diagonalValue = [];

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
$("#P1").addClass("player-unselected");
$("#P2").addClass("player-unselected");
$("#scoreX").addClass("score-cell-unselected");
$("#scoreO").addClass("score-cell-unselected");
$("#scoreBoard").hide();
$("#gameBoard").hide();
var firstClickOnPlayer = true;
$(".player").on("click",function()
{
    if(firstClickOnPlayer)
    {
        $("#scoreBoard").show("slow");
        $("#gameBoard").show("slow");
        firstClickOnPlayer = false;
    }
    if ($(this).attr("id") == "P1")
    {
        $("#P1").removeClass("player-unselected").addClass("player-selected box-shadow-left");
        $("#P2").removeClass("player-selected box-shadow-right").addClass("player-unselected");
    }
    else if ($(this).attr("id") == "P2"){
        $("#P2").removeClass("player-unselected").addClass("player-selected box-shadow-right");
        $("#P1").removeClass("player-selected box-shadow-left").addClass("player-unselected");
    }
    if($("#P1").hasClass("player-selected") && gameOver)
    {
        singlePlayerGame();
        if (!gameOver) {
            $("#P1").removeClass("player-unselected").addClass("player-selected box-shadow-left");
            $("#P2").removeClass("player-selected box-shadow-right").addClass("player-unselected");
            alert("Please finish the game before changing the mode");
        }
    }
    else if ($("#P2").hasClass("player-selected") && gameOver) {
        twoPlayerGame();
        if (!gameOver) {
            $("#P2").removeClass("player-unselected").addClass("player-selected box-shadow-left");
            $("#P1").removeClass("player-selected box-shadow-right").addClass("player-unselected");
            alert("Please finish the game before changing the mode");
        }
    }
    // else if(!gameOver){
    //     $("#P1").removeClass("player-unselected").addClass("player-selected box-shadow-left");
    //     $("#P2").removeClass("player-selected box-shadow-right").addClass("player-unselected");
    //     alert("Please finish the game before changing the mode");
    // }
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
            individualPaint("black","dark","black","black","black","black","black");
            break;
        case "image3":
            individualPaint("white","light","white","white","white","white","white");
            break;
        case "image4":
            individualPaint("black", "primary", "black", "black", "black", "black", "black");
            break;
        case "image5":
            individualPaint("black","light","black","white","white","black","black");
            break;
        case "image6":
            individualPaint("white","light","white","black","black","white","white");
            break;
        case "image7":
            individualPaint("white", "light", "black", "white", "white", "black", "black");
            break;
        case "image8":
            individualPaint("white", "light", "white", "black", "black", "white", "white");
            break;
        case "image9":
            individualPaint("black", "light", "black", "white", "white", "black", "black");
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
        $("#navbarButton").attr("class", "btn btn-outline-dark .navbar-button");
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
        $("#navbarButton").attr("class", "btn .btn-outline-info navbar-button");
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
        $(".player-unselected").css({ "border-color": "black", "color": "black" }); //
    }
    else if (mainAreaPlayerMode == "white"){
        $(".player-unselected").css({ "border-color": "white", "color": "white" }); //
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

function singlePlayerGame(){
    var id;
    var cellsClicked = [];
    var turn = 0;
    gameOver = false;
        $(".cell").on("click", function () {
            id = $(this).attr("id");
            // $("#"+id+" i").addClass("fa fa-times fa-5x");
            // console.log("Inserted fa fa-times fa-5x in "+id);
            if (search(cellsClicked,id) >= 0)
            {
                console.log("Already clicked : "+id);
            }
            else{
                turn+=1;
                insertSymbol(id,turn);
                cellsClicked.push(id);
                gameOver = checkBoard(cellsClicked);
                console.log("Cells : " + cellsClicked + "\n" + "ID : " + id);
                if (gameOver) {
                    // $("#cell1 i").hide(500).show(500);
                    // $("#cell2 i").hide(500).show(500);
                    // $("#cell3 i").hide(500).show(500);
                    console.log("Thank You! Game Over");
                    clearBoard();
                    cellsClicked = [];
                    singlePlayerGame();
                }
            }

        });
    if (turn == 9 || turn == 0) {
        gameOver = true;
        cellsClicked = [];
    }

}


function twoPlayerGame() {
    var id;
    var cellsClicked = [];
    var turn = 0;
    gameOver = false;
    $(".cell").on("click", function () {
        id = $(this).attr("id");
        // $("#"+id+" i").addClass("fa fa-times fa-5x");
        // console.log("Inserted fa fa-times fa-5x in "+id);
        if (search(cellsClicked, id) >= 0) {
            console.log("Already clicked : " + id);
        }
        else {
            turn += 1;
            insertSymbol(id, turn);
            cellsClicked.push(id);
            gameOver = checkBoard(cellsClicked);
            console.log("Cells : " + cellsClicked + "\n" + "ID : " + id);
            if (gameOver) {
                // $("#cell1 i").hide(500).show(500);
                // $("#cell2 i").hide(500).show(500);
                // $("#cell3 i").hide(500).show(500);
                console.log("Thank You! Game Over");
                clearBoard();
                cellsClicked = [];
                singlePlayerGame();
            }
        }

    });
    if (turn == 9 || turn == 0) {
        gameOver = true;
        cellsClicked = [];
    }

}




function search(array, element){
    var i;
    for (i=0;i<array.length;i++)
    {
        if( element == array[i])
        return i;
    }
    return -1;
}

function insertSymbol(id, turn){
    if(turn%2 == 0) // even for x
    {
        $("#"+id+" i").addClass("fa fa-times fa-5x");
        $("#scoreO").removeClass("score-cell-unselected").addClass("score-cell-selected box-shadow-right");
        $("#scoreX").removeClass("score-cell-selected box-shadow-left").addClass("score-cell-unselected");
    }
    else // odd for o
    {
        $("#"+id+" i").addClass("fa fa-circle-o fa-5x");
        $("#scoreX").removeClass("score-cell-unselected").addClass("score-cell-selected box-shadow-left");
        $("#scoreO").removeClass("score-cell-selected box-shadow-right").addClass("score-cell-unselected");
    }
}

function checkBoard(array)
{
    var row = checkRow(array);
    var col = checkColumn(array);
    var diag = checkDiagonal(array);

    return  row || col || diag;
}


function checkRow(array) {
    
    var temp = array[array.length - 1];
    rowValue[array.length-1] = parseInt(temp[temp.length - 1]);
    if (rowValue.length > 4)
    {
        if( (search(rowValue,1) >= 0) && (search(rowValue,2) >= 0) && (search(rowValue,3) >=0) )
           {
                if ( (search(rowValue, 1) % 2 == 0) && (search(rowValue, 2) % 2 == 0) && (search(rowValue, 3) % 2 == 0 ))
                {
                    alert("O Won");
                    console.log("Row 1 , Winner O");
                    return true;
                }

                else if ( (search(rowValue, 1) % 2 == 1) && (search(rowValue, 2) % 2 == 1) && (search(rowValue, 3) % 2 == 1 ))
                {
                    alert("X Won");
                    console.log("Row 1 , Winner X");
                    return true;
                }
                
            }
        else if ( (search(rowValue, 4) % 2 >= 0 ) && (search(rowValue, 5)>=0) && (search(rowValue, 6) % 2 >= 0 ) )
        {
            if ((search(rowValue, 4) % 2 == 0) && (search(rowValue, 5) % 2 == 0) && (search(rowValue, 6) % 2 == 0)) {
                alert("O Won"); console.log("Row 2 , Winner O");
                return true;
            }

            else if ((search(rowValue, 4) % 2 == 1) && (search(rowValue, 5) % 2 == 1) && (search(rowValue, 6) % 2 == 1)) {
                alert("X Won"); console.log("Row 2 , Winner X");
                return true;
            }
            
        }
        else if ( (search(rowValue, 7) >= 0) && (search(rowValue, 8) >=0 ) && (search(rowValue, 9) >= 0) )
           {
                if ((search(rowValue, 7) % 2 == 0) && (search(rowValue, 8) % 2 == 0) && (search(rowValue, 9) % 2 == 0)) {
                    alert("O Won"); console.log("Row 3 , Winner O");
                return true;
            }

            else if ((search(rowValue, 7) % 2 == 1) && (search(rowValue, 8) % 2 == 1) && (search(rowValue, 9) % 2 == 1)) {
                    alert("X Won"); console.log("Row 3 , Winner X");
                return true;
            }
        }
    }
    return false;
}


function checkColumn(array) {

    var temp = array[array.length - 1];
    columnValue[array.length - 1] = parseInt(temp[temp.length - 1]);
    if (columnValue.length > 4) {
        if ( (search(columnValue, 1) >=0) && (search(columnValue, 4) >= 0) && (search(columnValue, 7) >= 0))
        {
            if ((search(rowValue, 1) % 2 == 0) && (search(rowValue, 4) % 2 == 0) && (search(rowValue, 7) % 2 == 0)) {
                alert("O Won"); console.log("Column 1 , Winner O");
                return true;
            }

            else if ((search(rowValue, 1) % 2 == 1) && (search(rowValue, 4) % 2 == 1) && (search(rowValue, 7) % 2 == 1)) {
                alert("X Won"); console.log("Column 1 , Winner X");
                return true;
            }
        }
        else if ( (search(columnValue, 2) >= 0) && (search(columnValue, 5) >= 0) && (search(columnValue, 8) >= 0))
           {
            if ((search(rowValue, 2) % 2 == 0) && (search(rowValue, 5) % 2 == 0) && (search(rowValue, 8) % 2 == 0)) {
                alert("O Won"); console.log("Column 2 , Winner O");
                return true;
            }

            else if ((search(rowValue, 2) % 2 == 1) && (search(rowValue, 5) % 2 == 1) && (search(rowValue, 8) % 2 == 1)) {
                alert("X Won"); console.log("Column 2 , Winner X");
                return true;
            }
           }
        else if ( (search(columnValue, 3) >= 0) && (search(columnValue, 6) >= 0) && (search(columnValue, 9) >= 0))
            {
            if ((search(rowValue, 3) % 2 == 0) && (search(rowValue, 6) % 2 == 0) && (search(rowValue, 9) % 2 == 0)) {
                alert("O Won"); console.log("Column 3 , Winner O");
                return true;
            }

            else if ((search(rowValue, 3) % 2 == 1) && (search(rowValue, 6) % 2 == 1) && (search(rowValue, 9) % 2 == 1)) {
                alert("X Won"); console.log("Column 3 , Winner X");
                return true;
            }
            }
        
    }
    return false;
}

function checkDiagonal(array) {

    var temp = array[array.length - 1];
    diagonalValue[array.length - 1] = parseInt(temp[temp.length - 1]);
    if (diagonalValue.length > 4) {
        if ( (search(diagonalValue, 1) >= 0) && (search(diagonalValue, 5) >= 0) && (search(diagonalValue, 9) >= 0))
        {
            if ((search(rowValue, 1) % 2 == 0) && (search(rowValue, 5) % 2 == 0) && (search(rowValue, 9) % 2 == 0)) {
                alert("O Won"); console.log("Diagonal 1 , Winner O");
                return true;
            }

            else if ((search(rowValue, 1) % 2 == 1) && (search(rowValue, 5) % 2 == 1) && (search(rowValue, 9) % 2 == 1)) {
                alert("X Won"); console.log("Diagonal 1 , Winner X");
                return true;
            }
        }
        else if ( (search(diagonalValue, 3) >=0) && (search(diagonalValue, 5) >= 0) && (search(diagonalValue, 7) >= 0))
        {
            if ((search(rowValue, 3) % 2 == 0) && (search(rowValue, 5) % 2 == 0) && (search(rowValue, 7) % 2 == 0)) {
                alert("O Won"); console.log("Diagonal 3 , Winner O");
                return true;
            }

            else if ((search(rowValue,3) % 2 == 1) && (search(rowValue, 5) % 2 == 1) && (search(rowValue, 7) % 2 == 1)) {
                alert("X Won"); console.log("Diagonal 3 , Winner X");
                return true;
            }
        }

    }
    return false;
}

function winningAnimation(id1, id2, id3)
{
    $("#"+id1+" i").hide(500).show(500);
    $("#" + id2 + " i").hide(500).show(500);
    $("#" + id3 + " i").hide(500).show(500);
}

function clearBoard()
{
    $(".cell i").removeClass("fa fa-times fa-5x");
    $(".cell i").removeClass("fa fa-circle-o fa-5x");
}