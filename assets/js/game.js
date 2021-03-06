// dom elements
var questionEl = document.querySelector ("#question");
var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progress-text');
var scoretext = document.querySelector('.score');
var progressBarFull = document.querySelector('#progressBarFull');
var game = document.querySelector('#game');
var start = document.querySelector ("#start-end");
var startButton = document.querySelector ("#start-button");
var timer = document.querySelector("#timer");
var choiceContainer = document.querySelectorAll('choice-container');
var finalScore = document.querySelector ("#final-score");
var nameInput = document.querySelector("#name")
var emailInput = document.querySelector("#email");
var submitButton = document.querySelector("#submit");
var score2 = document.querySelector(".score2")
var timeContent = document.querySelector("#time-content");

//java elements
var time = 75;
var timeInterval;
var questionIndex = 0 
var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];


//questions array 

var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choice1:"strings",
      choice2:"booleans",
      choice3:"alerts",
      choice4:"numbers",
      answer: 3,
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choice1:"quotes",
      choice2:"curly brackets",
      choice3:"parentheses",
      choice4:"square brackets",
      answer: 3,
    },
    {
      question: "Arrays in JavaScript can be used to store ____.",
      choice1:"numbers and strings",
      choice2:"other arrays",
      choice3:"booleans",
      choice4:"all of the above",
      answer: 4,
    },
    {
      question: "String values must be enclosed within ____ when being assigned to variables.",
      choice1:"commas",
      choice2:"curly brackets",
      choice3:"quotes",
      choice4:"parentheses",
      answer: 3,
    },
    {
      question:  "A tool for printing content to the debugger is:",
      choice1:"JavaScript",
      choice2:"terminal / bash",
      choice3:"for loops",
      choice4:"console.log",
      answer: 4,
    }
  ];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;


startButton.addEventListener("click", function(event){
  event.preventDefault();

  startQuiz();
})

//start quiz function
function startQuiz () {
    timeInterval = setInterval(countdown,1000);
    timer.textContent = time;
    game.style.display = "block";
    start.style.display ="none";
    timeContent.style.display = "block";
    questionCounter =0;
    score =0;
    availableQuestions = [...questions]
    getNewQuestion ();

}
//get new question function
function getNewQuestion(){
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
      endQuiz();
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    questionEl.innerText =currentQuestion.question;

    

    choices.forEach(choice => {
          const number = choice.dataset['number']
          choice.innerText = currentQuestion["choice" + number]
    })

    availableQuestions.splice(questionsIndex, 1)
    

    acceptingAnswers = true
}


choices.forEach(choice => {

     choice.addEventListener('click', e => {
      if(!acceptingAnswers) return

      acceptingAnswers = false
      const selectedChoice = e.target
      const selectedAnswer = selectedChoice.dataset['number']

      var classToApply = selectedAnswer ==currentQuestion.answer ? 'correct' :
      'incorrect'

     if(classToApply === 'correct') {
        incrementScore(SCORE_POINTS)
      }
      if(classToApply==='incorrect'){
        subtractTime(time)
      }

     selectedChoice.parentElement.classList.add(classToApply)

     setTimeout (() => {
       selectedChoice.parentElement.classList.remove(classToApply);
       getNewQuestion();


     },1000)

    })
})

//subtract time if incorrect function
function subtractTime() {
  time -= 5;
  if(time <= 0){
    endQuiz()
  }
}

//increment score if correct function
function incrementScore(num) {
  score += num;
  scoretext.innerText =score
}
  
//countdown function
function countdown () {
    time --;
    timer.textContent = time;
    if (time <= 0){
      clearInterval(timer);
        endQuiz()
    }
    if(time <= 15){
      timeContent.style.background = "red";
    }
}

//end quiz function
function endQuiz () {
  score2.textContent = score;
   clearInterval(timeInterval);
   finalScore.style.display = "block";
   game.style.display= "none";
   timeContent.style.display ="none";

}

//submit score event listener function
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  var highScores = JSON.parse(localStorage.getItem("highScores")) || []
  var user = {
    name: nameInput.value.trim(),
    score: score,
  };
  highScores.push(user)

  localStorage.setItem("highScores", JSON.stringify(highScores));

  window.location.href="high-score.html"
  
});

