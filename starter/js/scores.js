function printHighScore()
{

}

function clearHighScore()
{
    console.log("Clearing high score");
}

let clearButton = document.getElementById("clear"); //reference to the clear button for future use. Referenced in highscores.html
clearButton.addEventListener("click", clearHighScore); //when relevant button clicked, clear the high score.

printHighScore();