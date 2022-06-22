// list of all questions, choices, and answers
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];

var start = document.querySelector ("#start");
var startButton = document.querySelector ("#start-button");
var questionsEl = document.querySelector ("#questions");
var questionsTitle = document.querySelector ("#question-title");
var answers = document.querySelector ("#answers");
var finalScore = document.querySelector ("#final-score");
var time = 10;
var timeInterval;
var questionIndex = 0 
var timer = document.querySelector("#timer");




//start quiz functinon
function startQuiz () {
    timeInterval = setInterval(countdown,1000);
    timer.textContent = time;
    start.style.display = "none";
    displayQuestions ();
}

function displayQuestions () {
     var currentQuestion = questions[questionIndex];
     questionsTitle.textContent = currentQuestion.title;
      questions.forEach(function(choices){
      var choiceButton = document.createElement(choiceButton)
      choiceButton.setAttribute("value", choices);
      console.log(choiceButton);
      answers.textContent = choices;
     }
     )}



function countdown () {
    time --;
    timer.textContent = time;
    if (time === 0){
      clearInterval(timer);
        endQuiz()
    }
}

function endQuiz () {
    clearInterval(timeInterval);
    questionsEl.style.display = "none";
    finalScore.style.display = "block";

}

startButton.addEventListener("click",startQuiz);


if(event.target.matches(answer)) {
  correct.textContent = ("Correct")
}

//one function that shows the question 

//one function that checks the answer 

//function to start the quiz and hide the header set attribute display-none 


