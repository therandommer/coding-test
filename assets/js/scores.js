function printHighScore()
{
    let newHighScore = JSON.parse(localStorage.getItem("highscores")) || []; //load highscores from the local memory

    newHighScore.sort(function(firstScore, secondScore) //sorts the scores by highest to lowest
    {
        return secondScore.score - firstScore.score; 
    });

    newHighScore.forEach(function(score){ //creating list for high score table
        let newLi = document.createElement("li");
        newLi.textContent = `${score.initials} - ${score.score}`;

        let olElement = document.getElementById("highscores"); //appends each li element to the ol as a new child
        olElement.appendChild(newLi);
    });
}

function clearHighScore()
{
    localStorage.removeItem("highscores");
    printHighScore();//updates the highscore table
    location.reload(); //reloads the browser to show the updated table
}

let clearButton = document.getElementById("clear"); //reference to the clear button for future use. Referenced in highscores.html
clearButton.addEventListener("click", clearHighScore); //when relevant button clicked, clear the high score.

printHighScore();