// 0 signifies path
// 1 signifies wall
// 2 signifies player
// 3 signifies exit
let gameBoard = document.querySelector('#game-board-div')
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
    1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 1
  ],
  [
    1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0,
    0, 1
  ],
  [
    1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
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
    1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1
  ],
  [
    1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0,
    0, 1
  ],
  [
    1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,
    0, 1
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 4,
    4, 1
  ],
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 1
  ]
]

const game = {
  level: 0,
  time: 0,
  mode: 'daydream',
  boardArray: basicArray
}
const player = {
  //boardLocation syntax: [up/down, left/right]
  boardLocation: [1, 1],
  score: 0
}

const movePlayerUp = () => {
  if (
    player.boardLocation[0] !== 1 &&
    game.boardArray[player.boardLocation[0] - 1][player.boardLocation[1]] !== 1
  ) {
    game.boardArray[player.boardLocation[0]][player.boardLocation[1]] = 0
    player.boardLocation[0] = player.boardLocation[0] - 1
    checkIfExit()
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
    checkIfExit()
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
    checkIfExit()
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
    checkIfExit()
    game.boardArray[player.boardLocation[0]][player.boardLocation[1]] = 2
    displayBoard()
  }
}

// key down listener syntax taken from: https://www.tutorialspoint.com/detecting-arrow-key-presses-in-javascript
document.addEventListener('keydown', function (e) {
  if (e.key == 'ArrowUp') {
    movePlayerUp()
  } else if (e.key == 'ArrowDown') {
    movePlayerDown()
  } else if (e.key == 'ArrowRight') {
    movePlayerRight()
  } else if (e.key == 'ArrowLeft') {
    movePlayerLeft()
  }
})

const displayBoard = () => {
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
      }
      gameBoard.appendChild(boardElement)
    }
  }
}
const checkIfExit = () => {
  if (game.boardArray[player.boardLocation[0]][player.boardLocation[1]] === 4) {
    alert('game end')
  }
}
displayBoard()
