let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')


function computerMove() {
    let results = ['rock', 'paper', 'scissors']
    return results[Math.floor(Math.random() * results.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function singleRound(playerSelection) {
    let computerSelection = computerMove()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')){
        playerScore += 1
        result = ('You scored! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        if (computerScore == 5) {
               result += '<br><br>You lost the game buhahaha! Reload the page to play again'
               disableButtons()
        }
    }
    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button => {
    button.addEventListener('click', function (){
        singleRound(button.value)
    })
})