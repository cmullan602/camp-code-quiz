var highScoresList = document.querySelector("#list");

function printHighScores () {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || []
    highScores.sort(function(a,b){
        return b.score - a.score
    })
    highScores.forEach(element => {
        var li = document.createElement("li");
        li.textContent = element.name + "-" + element.score
        highScoresList.appendChild(li)
    });
}

printHighScores()

