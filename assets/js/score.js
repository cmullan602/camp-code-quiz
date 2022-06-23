var end = document.querySelector("#end");
var finalScore = document.querySelector("#finalScore");
var endForm = document.querySelector("#end-form-container");
var username = document.querySelector("#username");
var saveScoreButton = document.querySelector("#saveScoreButton");
var mostRecentScore = document.querySelector("#mostRecentScore");

var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore

username.addEventListener('key', function(){
    saveScoreButton.disabled = !username.value
})

function saveHighScore () {
    e.preventDefault()

    const score = {
        score:mostRecentScore,
        name: username.value
    }

    highScores.push(score)
    highScores.sort(function(a,b){
        return b.score - a.score;
    })

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/')
}
