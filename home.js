
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
var cellsClicked = [];
var cellsNotClicked = ["cell1", "cell2", "cell3", "cell4", "cell5", "cell6", "cell7", "cell8", "cell9"];
var scoreX = 0, scoreO = 0;

updateScore();

$("#resetScore").on("click",function(){
    scoreX = 0;
    scoreO = 0;
    updateScore();

});

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
$("#scoreO").addClass("score-cell-selected box-shadow-right");
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
    // ! IMPORTANT 
    if ($("#P1").hasClass("player-selected") && gameOver)
    {

        // var clickedID = "#P1";
        console.log("----------------------------------------------");
            console.log("Going to play single player game");
            clearBoard();
            singlePlayerGame();
            console.log("Clicked P1");
        
        console.log("Game Over : " + gameOver+"\n");
        console.log("----------------------------------------------");

    }

    else if ($("#P2").hasClass("player-selected") && gameOver) 
    {
        // var clickedID = "#P2";
        console.log("----------------------------------------------");
            console.log("Going to play two player game");
            clearBoard();
            twoPlayerGame();
            console.log("Clicked on P2");
        console.log("Game Over : " + gameOver+"\n");
        console.log("----------------------------------------------");

    }
    else if(!gameOver){
        console.log("----------------------------------------------");
        console.log("Game Over : "+gameOver+"\n");

            console.log("You have entered into !gameOver section");
            console.log("The id before changing is "+$(this).attr("id"));
            var clickedID = $(this).attr("id");
            if(clickedID == "P2")
            {
                console.log("You have clicked on P1");
                midGamePlayerModeChangeError("#P1");
        
            }
            else if (clickedID == "P1")
            {
                console.log("You have clicked on P2");
                midGamePlayerModeChangeError("#P2");
            }
        
        console.log("----------------------------------------------");
        alert("Please finish the game before changing the mode");
    }
});
    

function midGamePlayerModeChangeError(playerId)
{
    if (playerId == "#P1")
    {
        console.log("Highlights remain with P1");
        $("#P1").removeClass("player-unselected").addClass("player-selected box-shadow-left");
        $("#P2").removeClass("player-selected box-shadow-right").addClass("player-unselected");
    }
    else if (playerId == "#P2")
    {
        console.log("Highlights remain with P2");
        $("#P2").removeClass("player-unselected").addClass("player-selected box-shadow-right");
        $("#P1").removeClass("player-selected box-shadow-left").addClass("player-unselected");
    }
    alert("Please finish the game before changing the mode");
}
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
        $("#navbarButton").attr("class", "btn btn-outline-dark navbar-button");
    }
    else if (buttonColour == "light" || buttonColour == "white") {
        $("#navbarButton").attr("class", "btn btn-outline-light navbar-button");
    }
    else if (buttonColour == "success") {
        $("#navbarButton").attr("class", "btn btn-outline-success navbar-button");
    }
    else if (buttonColour == "warning") {
        $("#navbarButton").attr("class", "btn btn-outline-warning navbar-button");
    }
    else if (buttonColour == "info") {
        $("#navbarButton").attr("class", "btn btn-outline-info navbar-button");
    }
    else if (buttonColour == "primary") {
        $("#navbarButton").attr("class", "btn btn-outline-primary navbar-button");
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
    console.log("This is single player game");
    var id;
    
    cellsClicked = [];
    cellsNotClicked = ["cell1", "cell2", "cell3", "cell4", "cell5", "cell6", "cell7", "cell8", "cell9"];
    var turn = 0;
    gameOver = false;
    $(".cell").on("click", function () 
    {
        if ($("#P1").hasClass("player-selected")) 
        {
            id = $(this).attr("id");
            if (search(cellsClicked,id) >= 0)
            {
                console.log("Already clicked : "+id);
            }
            else{
                turn+=1;
                console.log("The current value of the turn is "+turn);
                insertSymbol(id,turn);
                cellsClicked.push(id);
                cellsNotClicked.splice(search(cellsNotClicked, id),1);
                gameOver = checkBoard(id, turn - 1);
                console.log("Cells : " + cellsClicked + "\n" + "ID : " + id);
                console.log("Current contents of cellsNotClicked are : " + cellsNotClicked);

                if((!gameOver) && turn !=9)
                {   
                turn+=1;
                    console.log("The current value of the turn is " + turn);
                console.log("Before entering into insertInRandomCell function");
                insertInRandomCell(turn);
                console.log("Inserted X in random cell");
                console.log("Cells : " + cellsClicked + "\n" + "ID : " + id);
                console.log("Current contents of cellsNotClicked are : " + cellsNotClicked);
                }

                if ((turn == 9) && !gameOver) {
                    alert("Game is a draw!");
                    console.log("Game is a draw!");
                    gameOver = true;
                }
                if (gameOver) {
                    console.log("Thank You! Game Over");
                    clearBoard();
                    cellsClicked = [];
                    cellsNotClicked = ["cell1", "cell2", "cell3", "cell4", "cell5", "cell6", "cell7", "cell8", "cell9"];
                    turn = 0;
                    $("#scoreX").removeClass("score-cell-selected box-shadow-left").addClass("score-cell-unselected");
                    $("#scoreO").addClass("score-cell-selected box-shadow-right").removeClass("score-cell-unselected");
                    // singlePlayerGame();
                }

            }
            

        }
    }
    );
    clearBoard();
}


function twoPlayerGame() {
    console.log("This is two player game");
    
    var id;
    // clearBoard();
    cellsClicked = [];
    // cellsNotClicked = ["cell1", "cell2", "cell3", "cell4", "cell5", "cell6", "cell7", "cell8", "cell9"];
    var turn = 0;
    gameOver = false;
    $(".cell").on("click", function () {
        if ($("#P2").hasClass("player-selected"))
        {
            id = $(this).attr("id");
            if (search(cellsClicked, id) >= 0) {
                console.log("Already clicked : " + id);
            }
            else 
            {
            turn += 1;
            insertSymbol(id, turn);
            cellsClicked.push(id);
            // cellsNotClicked.splice(search(cellsNotClicked, id),1);
            gameOver = checkBoard(id, turn - 1);
            console.log("Cells : " + cellsClicked + "\n" + "ID : " + id);
            // console.log("Current contents of cellsNotClicked are : " + cellsNotClicked);
            if ((turn == 9) && !gameOver) {
                alert("Game is a draw!");
                console.log("Game is a draw!");
                cellsClicked = [];
                // cellsNotClicked = ["cell1", "cell2", "cell3", "cell4", "cell5", "cell6", "cell7", "cell8", "cell9"];
                turn = 0;
                gameOver = true;
            }
            if (gameOver) {
                console.log("Thank You! Game Over");
                clearBoard();
                cellsClicked = [];
                // cellsNotClicked = ["cell1", "cell2", "cell3", "cell4", "cell5", "cell6", "cell7", "cell8", "cell9"];
                turn = 0;
                $("#scoreX").removeClass("score-cell-selected box-shadow-left").addClass("score-cell-unselected");
                $("#scoreO").addClass("score-cell-selected box-shadow-right").removeClass("score-cell-unselected");
                // singlePlayerGame();
                }  
            }

        }
    });
    clearBoard();
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

function checkBoard(id, index)
{
    var row = checkRow(id, index);
    if (!row)
    {
        var col = checkColumn(id, index);
        if (!col)
            var diag = checkDiagonal(id, index);
    }
    return  row || col || diag;
}


function checkRow(id, index) {
    
    var i,j=0,temp = "";
    var rowValue = [];
    for (i = index%2;i<cellsClicked.length;i+=2)
    {
        temp = String(cellsClicked[i]);
        rowValue[j] = parseInt(temp[temp.length - 1]);
        j++;

    }
    console.log('rowValue for this turn : ' + rowValue);
    if (rowValue.length > 2)
    {
        if( (search(rowValue,1) >= 0) && (search(rowValue,2) >= 0) && (search(rowValue,3) >=0) )
           {
            console.log("Row 1 Check Done!");
                if ( index % 2 == 0)
                {
                    alert("O Won");
                    scoreO++;
                    updateScore();
                    console.log("Row 1 , Winner O");
                    return true;
                }

                else if (index % 2 == 1)
                {
                    alert("X Won");
                    scoreX++;
                    updateScore();
                    console.log("Row 1 , Winner X");
                    return true;
                }
                
            }
        else if ( (search(rowValue, 4) % 2 >= 0 ) && (search(rowValue, 5)>=0) && (search(rowValue, 6) % 2 >= 0 ) )
        {
            console.log("Row 2 Check Done!");
            if (index % 2 == 0) {
                alert("O Won");
                scoreO++;
                updateScore();
                console.log("Row 2 , Winner O");
                return true;
            }

            else if (index % 2 == 1) {
                alert("X Won");
                scoreX++;
                updateScore();
                console.log("Row 2 , Winner X");
                return true;
            }
            
        }
        else if ( (search(rowValue, 7) >= 0) && (search(rowValue, 8) >=0 ) && (search(rowValue, 9) >= 0) )
           {
            console.log("Row 3 Check Done!");
            if (index % 2 == 0) {
                    alert("O Won");
                    scoreO++;
                    updateScore();
                    console.log("Row 3 , Winner O");
                return true;
            }

            else if (index % 2 == 1) {
                    alert("X Won");
                    scoreX++;
                    updateScore();
                    console.log("Row 3 , Winner X");
                return true;
            }
        }
    }
    return false;
}


function checkColumn(id, index) {

    var i, j = 0, temp="";
    var columnValue = [];
    for (i = index % 2; i < cellsClicked.length; i += 2) {
        temp = String(cellsClicked[i]);
        columnValue[j] = parseInt(temp[temp.length - 1]);
        j++;
    }
    console.log('Column Value for this turn : ' + columnValue);
    if (columnValue.length > 2) {
        if ( (search(columnValue, 1) >=0) && (search(columnValue, 4) >= 0) && (search(columnValue, 7) >= 0))
        {
            console.log("Column 1 Check Done!");
            if (index % 2 == 0) {
                alert("O Won");
                scoreO++;
                updateScore();
                console.log("Column 1 , Winner O");
                return true;
            }

            else if (index % 2 == 1) {
                alert("X Won");
                scoreX++;
                updateScore();
                 console.log("Column 1 , Winner X");
                return true;
            }
        }
        else if ( (search(columnValue, 2) >= 0) && (search(columnValue, 5) >= 0) && (search(columnValue, 8) >= 0))
           {
            console.log("Column 2 Check Done!");
            if (index % 2 == 0) {
                alert("O Won");
                scoreO++;
                updateScore();
                 console.log("Column 2 , Winner O");
                return true;
            }

            else if (index % 2 == 1) {
                alert("X Won");
                scoreX++;
                updateScore();
                 console.log("Column 2 , Winner X");
                return true;
            }
           }
        else if ( (search(columnValue, 3) >= 0) && (search(columnValue, 6) >= 0) && (search(columnValue, 9) >= 0))
            {
            console.log("Column 3 Check Done!");
            if (index % 2 == 0) {
                alert("O Won");
                scoreO++;
                updateScore();
                 console.log("Column 3 , Winner O");
                return true;
            }

            else if (index % 2 == 1) {
                alert("X Won");
                scoreX++;
                updateScore();
                 console.log("Column 3 , Winner X");
                return true;
            }
            }
        
    }
    return false;
}

function checkDiagonal(id, index) {

    var i, j = 0, temp = "";
    var diagonalValue = [];
    for (i = index % 2; i < cellsClicked.length; i += 2) {
        temp = String(cellsClicked[i]);
        diagonalValue[j] = parseInt(temp[temp.length - 1]);
        j++;
    }
    console.log('Diagonal Value for this turn : ' + diagonalValue);
    if (diagonalValue.length > 2) {
        if ( (search(diagonalValue, 1) >= 0) && (search(diagonalValue, 5) >= 0) && (search(diagonalValue, 9) >= 0))
        {
            console.log("Diagonal 1 Check Done!");
            if (index % 2 == 0) {
                alert("O Won");
                scoreO++;
                updateScore();
                 console.log("Diagonal 1 , Winner O");
                return true;
            }

            else if (index % 2 == 1) {
                alert("X Won");
                scoreX++;
                updateScore();
                 console.log("Diagonal 1 , Winner X");
                return true;
            }
        }
        else if ( (search(diagonalValue, 3) >=0) && (search(diagonalValue, 5) >= 0) && (search(diagonalValue, 7) >= 0))
        {
            console.log("Diagonal 3 Check Done!");
            if (index % 2 == 0) {
                alert("O Won");
                scoreO++;
                updateScore();
                console.log("Diagonal 3 , Winner O");
                return true;
            }

            else if (index % 2 == 1) {
                alert("X Won");
                scoreX++;
                updateScore();
                console.log("Diagonal 3 , Winner X");
                return true;
            }
        }

    }
    return false;
}


function clearBoard()
{
    $(".cell i").removeClass("fa fa-times fa-5x");
    $(".cell i").removeClass("fa fa-circle-o fa-5x");
}

function insertInRandomCell(turn)
{
    var value, idString;
    console.log("Entered into insertInRandomCell() function");
    value = Math.floor(Math.random()*cellsNotClicked.length);
    console.log("Random value is "+value);
    idString = cellsNotClicked[value];
    console.log("The random cell is "+idString);
    if (search(cellsClicked, idString) == -1)
    {
        insertSymbol(idString, turn);
        cellsClicked.push(idString);
        cellsNotClicked.splice(search(cellsNotClicked, idString),1);
        gameOver = checkBoard(idString, turn-1);
        console.log(idString+" is removed from cellsNotClicked");
        console.log("Current contents of cellsNotClicked are : "+cellsNotClicked);
        return idString;
    }
    
}

function updateScore()
{
    $("#Xvalue").html(scoreX);
    $("#Ovalue").html(scoreO);
}