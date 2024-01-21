// maze is generated using numbers to minimize memory usage
// 0 signifies path
// 1 signifies wall
// 2 signifies player
// 3 signifies exit
// 4 signifies trap
// 5 signifies points
// 6 signifies keys
let gameMode = document.querySelector('#nightmareMode')
gameMode.addEventListener('click', () => {
  window.location.href = './nightmare.html'
})
let gameLevel = document.querySelector('#currentlevel')
let hearts = document.querySelector('#currentLivesLeft')
let playerScore = document.querySelector('#currentPoints')
let playerKeys = document.querySelector('#currentKeys')
import { daydream } from './dataStore.js'
const game = {
  level: 1,
  mode: 'daydream',
  boardArray: structuredClone(daydream[0].board),
  gameBoards: structuredClone(daydream),
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
    if (checkIfExit() == true) {
      endGame('exit')
    } else {
      game.boardArray[player.boardLocation[0]][player.boardLocation[1]] = 2
      displayBoard()
    }
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
    if (checkIfExit() == true) {
      endGame('exit')
    } else {
      game.boardArray[player.boardLocation[0]][player.boardLocation[1]] = 2
      displayBoard()
    }
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
    if (checkIfExit() == true) {
      endGame('exit')
    } else {
      game.boardArray[player.boardLocation[0]][player.boardLocation[1]] = 2
      displayBoard()
    }
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
    if (checkIfExit() == true) {
      endGame('exit')
    } else {
      game.boardArray[player.boardLocation[0]][player.boardLocation[1]] = 2
      displayBoard()
    }
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

const startLevel = (board) => {
  document.querySelector('#game-container-div').innerHTML = ''
  game.boardArray = structuredClone(board)
  player.boardLocation = structuredClone(game.playerStartPosition)
  gameLevel.innerText = game.level
  player.lives = 3
  player.keys = 0
  player.score = 0
  hearts.innerText = player.lives
  playerKeys.innerText = player.keys
  playerScore.innerText = player.score
  let displayGameBoard = document.createElement('div')
  displayGameBoard.setAttribute('id', 'game-board-div')
  document.querySelector('#game-container-div').appendChild(displayGameBoard)
  displayBoard()
}

const displayNextLevelMenu = (currentLevel) => {
  document.querySelector('#game-container-div').innerHTML = ''
  let nextLevelMenu = document.createElement('div')
  nextLevelMenu.setAttribute('id', 'game-next-level-div')
  let nextLevelHeader = document.createElement('h3')
  nextLevelHeader.setAttribute('id', 'next-level-header')
  nextLevelHeader.innerText = 'Level Complete!'
  let restartLevelButton = document.createElement('button')
  restartLevelButton.setAttribute('id', 'restart')
  restartLevelButton.innerText = 'Restart Level'
  let nextLevelButton = document.createElement('button')
  nextLevelButton.setAttribute('id', 'next-level-button')
  nextLevelButton.innerText = 'Next Level'
  nextLevelMenu.appendChild(nextLevelHeader)
  nextLevelMenu.appendChild(restartLevelButton)
  nextLevelMenu.appendChild(nextLevelButton)
  document.querySelector('#game-container-div').appendChild(nextLevelMenu)
  restartLevelButton.addEventListener('click', () => {
    startLevel(game.gameBoards[game.level - 1].board)
  })
  nextLevelButton.addEventListener('click', () => {
    game.level++
    startLevel(game.gameBoards[game.level - 1].board)
  })
}
const displayEndGameMenu = () => {
  document.querySelector('#game-container-div').innerHTML = ''
  let endGameMenu = document.createElement('div')
  endGameMenu.setAttribute('id', 'end-game-div')
  let endGameMenuHeader = document.createElement('h3')
  endGameMenuHeader.setAttribute('id', 'end-game-header')
  endGameMenuHeader.innerText = 'You escaped!'
  let restartLevelButton = document.createElement('button')
  restartLevelButton.setAttribute('id', 'restart')
  restartLevelButton.innerText = 'Restart Level'
  restartLevelButton.addEventListener('click', () => {
    startLevel(game.gameBoards[game.level - 1].board)
  })
  endGameMenu.appendChild(endGameMenuHeader)
  endGameMenu.appendChild(restartLevelButton)
  document.querySelector('#game-container-div').appendChild(endGameMenu)
}

const endGame = (gameStatus) => {
  if (gameStatus === 'death') {
    startLevel(game.boardArray)
  } else if (gameStatus === 'exit') {
    if (player.keys < game.totalKeys) {
      alert('missing some stuff')
    } else {
      if (game.level === game.gameBoards.length) {
        displayEndGameMenu()
      } else {
        displayNextLevelMenu(game.level)
      }
    }
  }
}
const checkIfExit = () => {
  if (game.boardArray[player.boardLocation[0]][player.boardLocation[1]] === 3) {
    return true
  }
}
const checkIfTrap = () => {
  if (game.boardArray[player.boardLocation[0]][player.boardLocation[1]] === 4) {
    player.lives -= game.trapPower
    hearts.innerText = ''
    hearts.innerText = player.lives
    if (player.lives < 0) {
      endGame('death')
    }
  }
}

const checkIfScore = () => {
  if (game.boardArray[player.boardLocation[0]][player.boardLocation[1]] === 5) {
    player.score++
    playerScore.innerText = player.score
  }
}
const checkIfKey = () => {
  if (game.boardArray[player.boardLocation[0]][player.boardLocation[1]] === 6) {
    player.keys++
    playerKeys.innerText = player.keys
  }
}

const checkLocation = () => {
  checkIfTrap()
  checkIfScore()
  checkIfKey()
}
document.querySelector('#game-container-div').innerHTML = ''
console.log(daydream[0].board)
startLevel(game.gameBoards[0].board)
