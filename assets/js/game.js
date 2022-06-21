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
var questions = document.querySelector ("#questions");
var questionsTitle = document.querySelector ("#questions-title");
var answers = document.querySelector ("#answers");
var finalScore = document.querySelector ("#final-score");
var time = 75;
var timeInterval;
var questionIndex = 0 
var timer = document.querySelector("#timer");




//start quiz functinon
function startQuiz () {
    timeInterval = setInterval(countdown,1000);
    timer.textContent = time;
    displayQuestions ()
}

function displayQuestions () {
    var currentQuestion = questions [questionIndex];
    questionsTitle.textContent = currentQuestion.title;
    currentQuestion.choices.forEach(function(choice){
        var choiceButton = document.createElement
        choiceButton.setAttribute("value", choice);
        choiceButton.onclick = checksAnswer;
    })

}

function countdown () {
    time -- 
    timer.textContent = time;
    if (time <= 0){
        endQuiz()
    }
}

function endQuiz () {
    clearInterval(timer)
}

startQuiz ();

//one function that shows the question 

//one function that checks the answer 

//function to start the quiz and hide the header set attribute display-none 


