//---quiz state variables---
let currentQuestionIndex = 0; //used to reference the question array.
let timePerQuestion = 20; //modify this to make the game more or less difficult.
let timePenalty = 10; //subtracts this amount of time each time the user makes a mistake
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

//displays the current question in the questions[] array
function getQuestion()
{
    let currentQuestion = questions[currentQuestionIndex]; //will get the current question to be iterated upon elsewhere.

    let titleElement = document.getElementById("question-title"); //referencing the title element to display the question being asked.

    //Populating the text fields
    titleElement.textContent = currentQuestion.title;

    choicesElement.innerHTML = "";//setting each choice element to blank.

    currentQuestion.choices.forEach(function(choice, index) //looping through each choice in the current question
    {
        let choiceButton = document.createElement("button"); // creating a choice button for each choice an answer could have
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);
        choiceButton.textContent = `${index + 1}. ${choice}`; //makes each button display the text of the relevant choice that is refernced by the button
        choiceButton.addEventListener("click", questionClick);

        choicesElement.appendChild(choiceButton); //appending each button as a child of the choicesElement div
    })
}

//checks if the answer clicked is correct or not
function questionClick()
{
    if(this.value != questions[currentQuestionIndex].answer) //if answer is wrong
    {
        time -= timePenalty;
        if(time<0) //checks if time would be negative as a result of penalty
        {
            time = 0; //prevents negative display
        }
        timerElement.textContent = time; //updates the timer to the new correct time.

        feedbackElement.textContent = "Wrong answer"; //displays that it was the wrong answer to the user.
        wrongSound.play(); //plays incorrect sfx
    }
    else //if answer is correct
    {
        feedbackElement.textContent = "Correct answer!"; //displays that it was the correct answer to the user.
        correctSound.play(); //plays correct sfx
    }

    feedbackElement.setAttribute("class", "feedback");

    //hides the text feedback after 2 seconds
    setTimeout(function() {
        feedbackElement.setAttribute("class", "feedback hide");
    }, 2000);
    currentQuestionIndex++; //increment question index to display the next question.
    
    if(currentQuestionIndex >= questions.length) //ends quiz once the end of the array is reached
    {
        quizEnd();
    }
    else //if there is another question, go to the next question.
    {
        getQuestion(); 
    }
    
}

//handles end of quiz logic
function quizEnd()
{
    clearInterval(timerID); //stops countdown

    let endScreenElement = document.getElementById("end-screen");
    endScreenElement.removeAttribute("class"); //display the end screen element

    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time; //final score equal to time 
    questionsElement.setAttribute("class", "hide"); //hides the questions element
}

//ticks down the timer once every interval
function timer()
{
    time --;
    timerElement.textContent = time;
    if(time <= 0)
    {
        quizEnd();
    }
}

//start of quiz logic
function startQuiz()
{
    let startScreenElement = document.getElementById("start-screen");
    startScreenElement.setAttribute("class", "hide"); //removes initial screen to make way for future questions
    questionsElement.removeAttribute("class");

    timerID = setInterval(timer, 1000); //will call the timer function once every 1000ms or 1s to countdown
    timerElement.textContent = time; //sets the timer to the initial value so that it doesn't hang on the default value for a second

    getQuestion(); //getting the questions from questions.js to display on the quiz.
}

//save the high score (time remaining) to local memory
function saveHighScore()
{

}

function checkForEnter(event)
{

}

//---Event listeners---
startButton.addEventListener("click", startQuiz); //starting the quiz
submitButton.addEventListener("click", saveHighScore);//finishing the game and submitting to high score
initialElement.addEventListener("keyup", checkForEnter)//submitting initials on enter press