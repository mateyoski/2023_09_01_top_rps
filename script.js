let playerScore = 0
let computerScore = 0
let roundWinner = ''

function getRandomDraw() {
    let randomNumber = Math.floor(Math.random()*3)
    switch(randomNumber) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
        
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

