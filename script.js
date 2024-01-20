// maze is generated using numbers to minimize memory usage
// 0 signifies path
// 1 signifies wall
// 2 signifies player
// 3 signifies exit
// 4 signifies trap
// 5 signifies points
// 6 signifies keys

let gameLevel = document.querySelector('#currentlevel')
let hearts = document.querySelector('#currentLivesLeft')
let basicArray = [
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1
  ],
  [
    1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0,
    0, 1
  ],
  [
    1, 0, 1, 0, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0,
    6, 1
  ],
  [
    1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 5, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 0, 1, 0, 0, 1, 5, 0, 4, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 1
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 5, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 5, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0,
    0, 1
  ],
  [
    1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1,
    1, 1
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0,
    0, 1
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0,
    0, 1
  ],
  [
    1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1
  ],
  [
    1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1,
    1, 1
  ],
  [
    1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0,
    0, 1
  ],
  [
    1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1
  ],
  [
    1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0,
    0, 1
  ],
  [
    1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4, 0, 0, 1, 0, 6, 0, 0, 1, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,
    0, 1
  ],
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
    3, 1
  ]
]

const game = {
  level: 1,
  mode: 'daydream',
  boardArray: structuredClone(basicArray),
  playerStartPosition: [1, 1],
  trapPower: 1,
  totalScore: 5,
  totalKeys: 2
}
const player = {
  //boardLocation syntax: [up/down, left/right]
  boardLocation: [],
  lives: 3,
  score: 0,
  keys: 0
}

const movePlayerUp = () => {
  if (
    player.boardLocation[0] !== 1 &&
    game.boardArray[player.boardLocation[0] - 1][player.boardLocation[1]] !== 1
  ) {
    game.boardArray[player.boardLocation[0]][player.boardLocation[1]] = 0
    player.boardLocation[0] = player.boardLocation[0] - 1
    checkLocation()
    game.boardArray[player.boardLocation[0]][player.boardLocation[1]] = 2
    displayBoard()
  }
}
const movePlayerDown = () => {
  if (
    player.boardLocation[0] !== game.boardArray.length - 1 &&
    game.boardArray[player.boardLocation[0] + 1][player.boardLocation[1]] !== 1
  ) {
    game.boardArray[player.boardLocation[0]][player.boardLocation[1]] = 0
    player.boardLocation[0] = player.boardLocation[0] + 1
    checkLocation()
    game.boardArray[player.boardLocation[0]][player.boardLocation[1]] = 2
    displayBoard()
  }
}
const movePlayerRight = () => {
  if (
    player.boardLocation[1] !== game.boardArray[0].length &&
    game.boardArray[player.boardLocation[0]][player.boardLocation[1] + 1] !== 1
  ) {
    game.boardArray[player.boardLocation[0]][player.boardLocation[1]] = 0
    player.boardLocation[1] = player.boardLocation[1] + 1
    checkLocation()
    game.boardArray[player.boardLocation[0]][player.boardLocation[1]] = 2
    displayBoard()
  }
}
const movePlayerLeft = () => {
  if (
    player.boardLocation[1] !== 1 &&
    game.boardArray[player.boardLocation[0]][player.boardLocation[1] - 1] !== 1
  ) {
    game.boardArray[player.boardLocation[0]][player.boardLocation[1]] = 0
    player.boardLocation[1] = player.boardLocation[1] - 1
    checkLocation()
    game.boardArray[player.boardLocation[0]][player.boardLocation[1]] = 2
    displayBoard()
  }
}

// key down listener syntax taken from: https://www.tutorialspoint.com/detecting-arrow-key-presses-in-javascript
document.addEventListener('keydown', function (e) {
  if (e.code == 'KeyW') {
    movePlayerUp()
  } else if (e.code == 'KeyS') {
    movePlayerDown()
  } else if (e.code == 'KeyD') {
    movePlayerRight()
  } else if (e.code == 'KeyA') {
    movePlayerLeft()
  }
})

const displayBoard = () => {
  let gameBoard = document.querySelector('#game-board-div')
  gameBoard.innerHTML = ''
  for (let i = 0; i < game.boardArray.length; i++) {
    for (let j = 0; j < game.boardArray[i].length; j++) {
      const boardElement = document.createElement('div')
      boardElement.classList.add('board-element')
      if (game.boardArray[i][j] === 2) {
        boardElement.classList.add('board-player')
      } else if (game.boardArray[i][j] === 0) {
        boardElement.classList.add('board-floor-light')
      } else if (game.boardArray[i][j] === 1) {
        boardElement.classList.add('board-wall-light')
      } else if (game.boardArray[i][j] === 3) {
        boardElement.classList.add('board-exit-light')
      } else if (game.boardArray[i][j] === 4) {
        boardElement.classList.add('board-trap-light')
      } else if (game.boardArray[i][j] === 5) {
        boardElement.classList.add('board-score-light')
      } else if (game.boardArray[i][j] === 6) {
        boardElement.classList.add('board-key-light')
      }
      gameBoard.appendChild(boardElement)
    }
  }
}

const startGame = () => {
  document.querySelector('#game-container-div').innerHTML = ''
  game.boardArray = structuredClone(basicArray)
  player.boardLocation = structuredClone(game.playerStartPosition)
  gameLevel.innerText = game.level
  player.lives = 3
  hearts.innerText = player.lives
  let displayGameBoard = document.createElement('div')
  displayGameBoard.setAttribute('id', 'game-board-div')
  document.querySelector('#game-container-div').appendChild(displayGameBoard)
  displayBoard()
}
const endGame = (gameStatus) => {
  if (gameStatus === 'death') {
    startGame()
  } else if (gameStatus === 'exit') {
    if (player.keys < game.totalKeys) {
      alert('missing some stuff')
    } else alert('collected all keys')
  }
}

const checkIfExit = () => {
  if (game.boardArray[player.boardLocation[0]][player.boardLocation[1]] === 3) {
    endGame('exit')
  }
}

const checkIfTrap = () => {
  if (game.boardArray[player.boardLocation[0]][player.boardLocation[1]] === 4) {
    player.lives -= game.trapPower
    hearts.innerText = ''
    hearts.innerText = player.lives
    if (player.lives === 0) {
      endGame('death')
    }
    // alert('trap')
  }
}

const checkIfScore = () => {
  if (game.boardArray[player.boardLocation[0]][player.boardLocation[1]] === 5) {
    player.score++
    document.querySelector('#currentPoints').innerText = player.score
  }
}
const checkIfKey = () => {
  if (game.boardArray[player.boardLocation[0]][player.boardLocation[1]] === 6) {
    player.keys++
    document.querySelector('#currentKeys').innerText = player.keys
  }
}

const checkLocation = () => {
  checkIfExit()
  checkIfTrap()
  checkIfScore()
  checkIfKey()
}
document.querySelector('#game-container-div').innerHTML = ''
startGame()
