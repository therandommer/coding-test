//---quiz state variables---
let currentQuestionIndex = 0; //used to reference the question array.
let timePerQuestion = 20; //modify this to make the game more or less difficult.
let time = questions.length * timePerQuestion; //used for the countdown function
let timerID = 0;

//---HTML Elements---
let questionsElement = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choicesElement = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialElement = document.getElementById("initials");
let feedbackElement = document.getElementById("feedback");

//---Audio Element---
let correctSound = new Audio("assets/sfx/correct.wav");
let wrongSound = new Audio("assets/sfx/incorrect.wav");

//---Functionality of application---
function getQuestion()
{

}

function questionClick()
{

}

function quizEnd()
{
    clearInterval(timerID); //stops countdown

    let endScreenElement = document.getElementById("end-screen");
    endScreenElement.removeAttribute("class"); //display the end screen element
    
    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time; //final score equal to time 
    questionsElement.setAttribute("class", "hide"); //hides the questions element
}

function timer()
{
    time --;
    timerElement.textContent = time;
    if(time <= 0)
    {
        quizEnd();
    }
}

function startQuiz()
{
    let startScreenElement = document.getElementById("start-screen");
    startScreenElement.setAttribute("class", "hide"); //removes initial screen to make way for future questions
    questionsElement.removeAttribute("class");

    timerID = setInterval(timer, 1000); //will call the timer function once every 1000ms or 1s to countdown
}




function saveHighScore()
{

}

function checkForEnter(event)
{

}

//---Enent initialisers---
startButton.addEventListener("click", startQuiz); //starting the quiz
submitButton.addEventListener("click", saveHighScore);//finishing the game and submitting to high score
initialElement.addEventListener("keyup", checkForEnter)//submitting initials on enter press