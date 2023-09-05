//---quiz state variables---
let currentQuestionIndex = 0; //used to reference the question array.
let timePerQuestion = 20; //modify this to make the game more or less difficult.
let time = questions.length * timePerQuestion; //used for the countdown function
let timerID;

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

function startQuiz()
{
    alert("Quiz started");
}

function quizEnd()
{

}

function timer()
{

}

function saveHighScore()
{

}

function checkForEnter(event)
{

}

startButton.addEventListener("click", startQuiz);