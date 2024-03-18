const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const button = document.querySelector('.difficulty');

let result = 0;
let counter = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function difficulty() {
  button.addEventListener('mousedown', () => {
    if(button.textContent == 'simple') {
      button.textContent = 'hard';
    } else {
      button.textContent = 'simple';
    }
  })
}

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')
  counter++;
  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole() {
  if(button.textContent == 'simple') {
    timerId = setInterval(randomSquare, 1000)
  } else {
    timerId = setInterval(randomSquare, 500)
  }
}

moveMole()

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('GAME OVER! Your final score is ' + result + '\n' + 'Success ratio: '+ (result/counter)*100 + '%')
 }

}

let countDownTimerId = setInterval(countDown, 1000)
difficulty();