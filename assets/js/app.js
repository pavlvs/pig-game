/*
** DOM selection
*/

const buttonRoll = document.querySelector('.btn-roll')
const buttonHold = document.querySelector('.btn-hold')
const buttonNew = document.querySelector('.btn-new')
const dice1 = document.getElementById('dice-1')
// const dice2 = document.getElementById('dice-2')
const player1Score = document.getElementById('score-0')
const player1Current = document.getElementById('current-0')
const player2Score = document.getElementById('score-1')
const player2Current = document.getElementById('current-1')
const player1Panel = document.querySelector('.player-0-panel')
const player2Panel = document.querySelector('.player-1-panel')
const player1Name = document.getElementById('name-0')
const player2Name = document.getElementById('name-1')

let scores, roundScore, activePlayer, gameOn

init()

/*
** Events
*/

buttonRoll.addEventListener('click', function () {
    if (gameOn) {
        let dice = Math.floor(Math.random() * 6) + 1
        dice1.style.display = 'block'
        dice1.src = 'assets/images/dice-' + dice + '.png'

        if (dice !== 1) {
            roundScore += dice
            activePlayer == 0
                ? player1Current.textContent = roundScore
                : player2Current.textContent = roundScore
        } else {
            nextPlayer()
        }
    }
})

buttonHold.addEventListener('click', function () {
    if (gameOn) {
        scores[activePlayer] += roundScore
        activePlayer == 0
            ? player1Score.textContent = scores[activePlayer]
            : player2Score.textContent = scores[activePlayer]

        if (scores[activePlayer] >= 100) {
            gameOn = false
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
    }
})

buttonNew.addEventListener('click', init)

/*
** Functions
*/

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

function init() {
    gameOn = true
    scores = [0, 0]
    roundScore = 0
    activePlayer = 0

    player1Score.textContent = '0';
    player2Score.textContent = '0';
    player1Current.textContent = '0';
    player2Current.textContent = '0';
    player1Name.textContent = 'Player 1';
    player2Name.textContent = 'Player 2';

    player1Panel.classList.remove('winner')
    player1Panel.classList.remove('winner')
    player1Panel.classList.remove('active')
    player2Panel.classList.remove('active')
    player1Panel.classList.add('active')

    dice1.style.display = 'none'
    // dice2.style.display = 'none'
}



//document.querySelector('#current-' + activePlayer).textContent = dice
