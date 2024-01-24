// maze is generated using numbers to minimize memory usage
// 0 signifies path
// 1 signifies wall
// 2 signifies player
// 3 signifies exit
// 4 signifies trap
// 5 signifies points
// 6 signifies keys
// 7 signifies switch
// 8 signifies trap door
let gameMode = document.querySelector('#daydreamMode')
gameMode.addEventListener('click', () => {
  window.location.href = './index.html'
})
let gameLevel
let hearts
let playerScore
let playerKeys
let movementPermission

import { Game } from './dataStore.js'

let game = new Game('nightmare')

const player = {
  //boardLocation syntax: [up/down, left/right]
  boardLocation: [],
  lives: 3,
  score: 0,
  keys: 0
}

const movePlayer = (updown = 0, leftright = 0) => {
  if (
    // not at the top wall
    player.boardLocation[0] + updown !== 0 &&
    // not at the bottom wall
    player.boardLocation[0] !== game.boardArray.length - 1 &&
    // not at the right wall
    player.boardLocation[1] !== game.boardArray[0].length &&
    // not at the left wall
    player.boardLocation[1] + leftright !== 0 &&
    // not moving into a wall
    game.boardArray[player.boardLocation[0] + updown][
      player.boardLocation[1] + leftright
    ] !== 1 &&
    // not moving into a switch
    game.boardArray[player.boardLocation[0] + updown][
      player.boardLocation[1] + leftright
    ] !== 7 &&
    //not moving into a trap door
    game.boardArray[player.boardLocation[0] + updown][
      player.boardLocation[1] + leftright
    ] !== 8
  ) {
    // check if next location is an exit
    if (
      checkIfExit(
        player.boardLocation[0] + updown,
        player.boardLocation[1] + leftright
      ) == true
    ) {
      // check if exit allowed
      if (canExitMaze()) {
        game.boardArray[player.boardLocation[0]][player.boardLocation[1]] = 0
        player.boardLocation[0] = player.boardLocation[0] + updown
        player.boardLocation[1] = player.boardLocation[1] + leftright
        // register the move on the board
        game.boardArray[player.boardLocation[0]][player.boardLocation[1]] = 2
        endGame('exit')
      } else {
        document.querySelector('.game-info').innerText = 'Missing some keys!'
      }
    } else {
      game.boardArray[player.boardLocation[0]][player.boardLocation[1]] = 0
      player.boardLocation[0] = player.boardLocation[0] + updown
      player.boardLocation[1] = player.boardLocation[1] + leftright
      checkLocation()
      // register the move on the board
      game.boardArray[player.boardLocation[0]][player.boardLocation[1]] = 2
      displayBoard()
    }
  }
}
const openSwitch = () => {
  if (
    game.boardArray[player.boardLocation[0] - 1][player.boardLocation[1]] ==
      7 ||
    game.boardArray[player.boardLocation[0]][player.boardLocation[1] - 1] ==
      7 ||
    game.boardArray[player.boardLocation[0]][player.boardLocation[1] + 1] ==
      7 ||
    game.boardArray[player.boardLocation[0] + 1][player.boardLocation[1]] == 7
  ) {
    game.boardArray[game.trapDoorPosition[0]][game.trapDoorPosition[1]] = 0
    document.querySelector('.game-info').innerText = 'Opened a trap door!'
    displayBoard()
  } else {
    document.querySelector(
      '.game-info'
    ).innerText = `Stand infront of a switch to use it!`
  }
}
// key down listener syntax taken from: https://www.tutorialspoint.com/detecting-arrow-key-presses-in-javascript
document.addEventListener('keydown', function (e) {
  if (e.code == 'KeyW') {
    // move Player Up
    movePlayer(-1)
  } else if (e.code == 'KeyS') {
    // move Player Down
    movePlayer(1)
  } else if (e.code == 'KeyD') {
    // move Player Right
    movePlayer(0, 1)
  } else if (e.code == 'KeyA') {
    // move Player Left
    movePlayer(0, -1)
  } else if (e.code === 'Space') {
    openSwitch()
  }
})
const displayBoardShowAll = () => {
  let gameBoard = document.querySelector('#game-board-div')
  gameBoard.innerHTML = ''
  document.querySelector('.game-info').innerText = 'Lights on!'

  let size
  switch (game.boardArray.length) {
    case 11:
      size = 54
      break
    case 21:
      size = 28
      break
    case 31:
      size = 19
      break
    case 41:
      size = 14
      break
    default:
      size = 20
  }
  document
    .querySelector('#game-board-div')
    .style.setProperty(
      'grid-template-rows',
      `repeat(${game.boardArray.length}, 1fr)`
    )
  document
    .querySelector('#game-board-div')
    .style.setProperty(
      'grid-template-columns',
      `repeat(${game.boardArray.length}, 1fr)`
    )
  for (let i = 0; i < game.boardArray.length; i++) {
    for (let j = 0; j < game.boardArray[i].length; j++) {
      const boardElement = document.createElement('div')
      boardElement.classList.add('board-element')
      boardElement.style.setProperty('width', `${size}px`)
      boardElement.style.setProperty('height', `${size}px`)
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
      } else if (game.boardArray[i][j] === 7) {
        boardElement.classList.add('board-switch-light')
      } else if (game.boardArray[i][j] === 8) {
        boardElement.classList.add('board-trapdoor-light')
      }
      gameBoard.appendChild(boardElement)
    }
  }
}

const displayBoard = () => {
  let gameBoard = document.querySelector('#game-board-div')
  gameBoard.innerHTML = ''
  document.querySelector('.game-info').innerText = 'Lights off!'

  let size
  switch (game.boardArray.length) {
    case 11:
      size = 54
      break
    case 21:
      size = 28
      break
    case 31:
      size = 19
      break
    case 41:
      size = 14
      break
    default:
      size = 20
  }
  document
    .querySelector('#game-board-div')
    .style.setProperty(
      'grid-template-rows',
      `repeat(${game.boardArray.length}, 1fr)`
    )
  document
    .querySelector('#game-board-div')
    .style.setProperty(
      'grid-template-columns',
      `repeat(${game.boardArray.length}, 1fr)`
    )
  for (let i = 0; i < game.boardArray.length; i++) {
    for (let j = 0; j < game.boardArray[i].length; j++) {
      const boardElement = document.createElement('div')
      boardElement.classList.add('board-element')
      boardElement.style.setProperty('width', `${size}px`)
      boardElement.style.setProperty('height', `${size}px`)
      if (
        (i === player.boardLocation[0] ||
          i - 1 === player.boardLocation[0] ||
          i + 1 === player.boardLocation[0]) &&
        (j === player.boardLocation[1] ||
          j - 1 === player.boardLocation[1] ||
          j + 1 === player.boardLocation[1])
      ) {
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
        } else if (game.boardArray[i][j] === 7) {
          boardElement.classList.add('board-switch-light')
        } else if (game.boardArray[i][j] === 8) {
          boardElement.classList.add('board-trapdoor-light')
        }
      } else {
        boardElement.classList.add('board-other-dark')
      }

      gameBoard.appendChild(boardElement)
    }
  }
}

const startLevel = (board) => {
  document.querySelector('#game-container-div').innerHTML = ''
  document.querySelector('.game-info').innerText = ''
  game.boardArray = structuredClone(board)
  player.boardLocation = structuredClone(game.playerStartPosition)
  player.lives = 3
  player.keys = 0
  player.score = 0

  // The div containing all of the game - board and player information
  let fullGameDisplay = document.createElement('div')
  fullGameDisplay.setAttribute('id', 'game-full-display-div')
  fullGameDisplay.innerHTML = ''

  // The div containing all of the player information
  let displayGameVariables = document.createElement('div')
  displayGameVariables.classList.add('game-variables-div')

  // The elements containing the player information

  //Current Level
  let gameVariablesLevelSpan = document.createElement('span')
  gameVariablesLevelSpan.innerText = 'Lvl. '
  let gameVariablesLevelSpanInfo = document.createElement('span')
  gameVariablesLevelSpanInfo.setAttribute('id', 'currentlevel')
  gameVariablesLevelSpan.appendChild(gameVariablesLevelSpanInfo)

  //Lives Left
  let gameVariablesHeartsSpan = document.createElement('span')
  gameVariablesHeartsSpan.innerText = 'Hearts: '
  let gameVariablesHeartsSpanInfo = document.createElement('span')
  gameVariablesHeartsSpan.appendChild(gameVariablesHeartsSpanInfo)
  gameVariablesHeartsSpanInfo.setAttribute('id', 'currentLivesLeft')

  //Keys collected
  let gameVariablesKeySpan = document.createElement('span')
  gameVariablesKeySpan.innerText = 'Keys: '
  let gameVariablesKeySpanInfo = document.createElement('span')
  gameVariablesKeySpan.appendChild(gameVariablesKeySpanInfo)
  gameVariablesKeySpanInfo.setAttribute('id', 'currentKeys')

  // Points Collected
  let gameVariablesPointsSpan = document.createElement('span')
  gameVariablesPointsSpan.innerText = 'Points:'
  let gameVariablespointsSpanInfo = document.createElement('span')
  gameVariablesPointsSpan.appendChild(gameVariablespointsSpanInfo)
  gameVariablespointsSpanInfo.setAttribute('id', 'currentPoints')

  displayGameVariables.appendChild(gameVariablesLevelSpan)
  displayGameVariables.appendChild(gameVariablesHeartsSpan)
  displayGameVariables.appendChild(gameVariablesKeySpan)
  displayGameVariables.appendChild(gameVariablesPointsSpan)

  // The div containing the board of the game
  let displayGameBoard = document.createElement('div')
  displayGameBoard.setAttribute('id', 'game-board-div')

  document.querySelector('#game-container-div').appendChild(fullGameDisplay)
  document
    .querySelector('#game-full-display-div')
    .appendChild(displayGameVariables)
  document.querySelector('#game-full-display-div').appendChild(displayGameBoard)
  gameLevel = document.querySelector('#currentlevel')
  gameLevel.innerText = game.level
  hearts = document.querySelector('#currentLivesLeft')
  hearts.innerText = player.lives
  playerKeys = document.querySelector('#currentKeys')
  playerKeys.innerText = player.keys
  playerScore = document.querySelector('#currentPoints')
  playerScore.innerText = player.score

  displayBoard()
}

const displayNextLevelMenu = (currentLevel) => {
  document.querySelector('#game-container-div').innerHTML = ''
  document.querySelector('.game-info').innerText = ''

  let nextLevelMenu = document.createElement('div')
  nextLevelMenu.setAttribute('id', 'game-next-level-div')

  let nextLevelHeader = document.createElement('h3')
  nextLevelHeader.setAttribute('id', 'next-level-header')
  nextLevelHeader.innerText = 'Level Complete!'

  let nextLevelStatsKeys = document.createElement('h4')
  nextLevelStatsKeys.setAttribute('id', 'next-level-stats-keys')
  nextLevelStatsKeys.innerText = `Keys Collected: ${
    player.keys
  }/${game.getLevelTotalKeys()}`

  let nextLevelStatsScore = document.createElement('h4')
  nextLevelStatsScore.setAttribute('id', 'next-level-stats-score')
  nextLevelStatsScore.innerText = `Points Collected: ${
    player.score
  }/${game.getLevelTotalScore()}`

  let nextLevelStatsLivesLeft = document.createElement('h4')
  nextLevelStatsLivesLeft.setAttribute('id', 'next-level-stats-lives-left')
  nextLevelStatsLivesLeft.innerText = `Lives left: ${player.lives}`

  let restartLevelButton = document.createElement('button')
  restartLevelButton.setAttribute('id', 'restart')
  restartLevelButton.innerText = 'Restart Level'

  let nextLevelButton = document.createElement('button')
  nextLevelButton.setAttribute('id', 'next-level-button')
  nextLevelButton.innerText = 'Next Level'

  nextLevelMenu.appendChild(nextLevelHeader)
  nextLevelMenu.appendChild(nextLevelStatsLivesLeft)
  nextLevelMenu.appendChild(nextLevelStatsKeys)
  nextLevelMenu.appendChild(nextLevelStatsScore)

  nextLevelMenu.appendChild(restartLevelButton)
  nextLevelMenu.appendChild(nextLevelButton)
  document.querySelector('#game-container-div').appendChild(nextLevelMenu)

  restartLevelButton.addEventListener('click', () => {
    startLevel(game.gameBoards[game.level - 1].board)
  })
  nextLevelButton.addEventListener('click', () => {
    game.updateLevel()
    game.updateAccumTotals(player.score, player.keys)
    startLevel(game.gameBoards[game.level - 1].board)
  })
}

const displayEndGameMenu = () => {
  document.querySelector('#game-container-div').innerHTML = ''
  document.querySelector('.game-info').innerText = ''

  let endGameMenu = document.createElement('div')
  endGameMenu.setAttribute('id', 'end-game-div')
  let endGameMenuHeader = document.createElement('h3')
  endGameMenuHeader.setAttribute('id', 'end-game-header')
  endGameMenuHeader.innerText = 'You escaped!'

  let endGameStatsKeys = document.createElement('h4')
  endGameStatsKeys.setAttribute('id', 'end-game-stats-keys')
  endGameStatsKeys.innerText = `Keys Collected: ${game.accumKeys}/${game.totalGameKeys}`

  let endGameStatsScore = document.createElement('h4')
  endGameStatsScore.setAttribute('id', 'end-game-stats-score')
  endGameStatsScore.innerText = `Points Collected: ${game.accumScore}/${game.totalGameScore}`

  let endGameStatsDeaths = document.createElement('h4')
  endGameStatsDeaths.setAttribute('id', 'end-game-stats-deaths')
  endGameStatsDeaths.innerText = `Deaths: ${game.accumDeaths}`

  let restartLevelButton = document.createElement('button')
  restartLevelButton.setAttribute('id', 'restart')
  restartLevelButton.innerText = 'Restart Level'
  restartLevelButton.addEventListener('click', () => {
    startLevel(game.gameBoards[game.level - 1].board)
  })
  endGameMenu.appendChild(endGameMenuHeader)
  endGameMenu.appendChild(endGameStatsKeys)
  endGameMenu.appendChild(endGameStatsScore)
  endGameMenu.appendChild(endGameStatsDeaths)
  endGameMenu.appendChild(restartLevelButton)
  document.querySelector('#game-container-div').appendChild(endGameMenu)
}
const canExitMaze = () => {
  return player.keys === game.levelExitKeys
}
const endGame = (gameStatus) => {
  if (gameStatus === 'death') {
    game.updateDeaths()
    startLevel(structuredClone(game.gameBoards[game.level - 1]).board)
  } else if (gameStatus === 'exit') {
    if (game.level === game.gameBoards.length) {
      game.updateAccumTotals(player.score, player.keys)
      displayEndGameMenu()
    } else {
      displayNextLevelMenu(game.level)
    }
  }
}
const checkIfExit = (x, y) => {
  if (game.boardArray[x][y] === 3) {
    return true
  }
}
const checkIfTrap = () => {
  if (game.boardArray[player.boardLocation[0]][player.boardLocation[1]] === 4) {
    player.lives -= game.trapPower
    hearts.innerText = ''
    hearts.innerText = player.lives
    document.querySelector('.game-info').innerText = 'Bubble trap!'
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
  checkIfScore()
  checkIfKey()
  checkIfTrap()
}
document.querySelector('#game-container-div').innerHTML = ''

function myTimer() {
  displayBoardShowAll()
  setTimeout(displayBoard, 3000)
}

startLevel(game.gameBoards[0].board)
setInterval(myTimer, 10000)
