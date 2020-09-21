// Constructor

const buttonRoll = document.querySelector('.btn-roll')
const buttonHold = document.querySelector('.btn-hold')
const dice1 = document.getElementById('dice-1')
// const dice2 = document.getElementById('dice-2')
const player1Score = document.getElementById('score-0')
const player1Current = document.getElementById('current-0')
const player2Score = document.getElementById('score-1')
const player2Current = document.getElementById('current-1')
const player1Panel = document.querySelector('.player-0-panel')
const player2Panel = document.querySelector('.player-1-panel')

let scores, roundScore, activePlayer

scores = [0, 0]
roundScore = 0
activePlayer = 0

player1Score.textContent = '0';
player2Score.textContent = '0';
player1Current.textContent = '0';
player2Current.textContent = '0';

dice1.style.display = 'none'
// dice2.style.display = 'none'

// Events
buttonRoll.addEventListener('click', function () {
    let dice = Math.floor(Math.random() * 6) + 1
    dice1.style.display = 'block'
    dice1.src = '/assets/images/dice-' + dice + '.png'

    if (dice !== 1) {
        roundScore += dice
        activePlayer == 0
            ? player1Current.textContent = roundScore
            : player2Current.textContent = roundScore
    } else {
        nextPlayer()
    }
})

buttonHold.addEventListener('click', function () {
    scores[activePlayer] += roundScore
    activePlayer == 0
        ? player1Score.textContent = scores[activePlayer]
        : player2Score.textContent = scores[activePlayer]

    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
        if (activePlayer == 0) {
            player1Panel.classList.add('winner')
            player1Panel.classList.remove('active')
        } else {
            player2Panel.classList.add('winner')
            player2Panel.classList.remove('active')
        }

        dice1.style.display = 'none'
    } else {
        nextPlayer()
    }

})

// Functions
function nextPlayer() {
    activePlayer === 0
        ? activePlayer = 1
        : activePlayer = 0

    roundScore = 0

    player1Current.textContent = '0';
    player2Current.textContent = '0';

    player1Panel.classList.toggle('active')
    player2Panel.classList.toggle('active')

    dice1.style.display = 'none'
}



//document.querySelector('#current-' + activePlayer).textContent = dice
