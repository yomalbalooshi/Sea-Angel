// 0 signifies path
// 1 signifies wall
// 2 signifies player
basicArray = [
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]
]

const game = {
  level: 0,
  time: 0,
  mode: 'daydream'
}
const player = {
  //boardLocation syntax: [up/down, left/right]
  boardLocation: [0, 0],
  score: 0
}

const movePlayerUp = () => {
  if (
    player.boardLocation[0] !== 0 &&
    basicArray[player.boardLocation[0] - 1] !== 1
  ) {
    basicArray[player.boardLocation[0]][player.boardLocation[1]] = 0
    player.boardLocation[0] = player.boardLocation[0] - 1
    basicArray[player.boardLocation[0]][player.boardLocation[1]] = 2
  }
}
const movePlayerDown = () => {
  if (
    player.boardLocation[0] !== basicArray.length - 1 &&
    basicArray[player.boardLocation[0] + 1] !== 1
  ) {
    basicArray[player.boardLocation[0]][player.boardLocation[1]] = 0
    player.boardLocation[0] = player.boardLocation[0] + 1
    basicArray[player.boardLocation[0]][player.boardLocation[1]] = 2
  }
}
const movePlayerRight = () => {
  if (
    player.boardLocation[1] !== basicArray[0].length &&
    basicArray[player.boardLocation[0]][player.boardLocation[1] + 1] !== 1
  ) {
    basicArray[player.boardLocation[0]][player.boardLocation[1]] = 0
    player.boardLocation[1] = player.boardLocation[1] + 1
    basicArray[player.boardLocation[0]][player.boardLocation[1]] = 2
  }
}
const movePlayerLeft = () => {
  if (
    player.boardLocation[1] !== 0 &&
    basicArray[player.boardLocation[0]][player.boardLocation[1] - 1] !== 1
  ) {
    basicArray[player.boardLocation[0]][player.boardLocation[1]] = 0
    player.boardLocation[1] = player.boardLocation[1] - 1
    basicArray[player.boardLocation[0]][player.boardLocation[1]] = 2
  }
}
// key down syntax taken from: https://www.tutorialspoint.com/detecting-arrow-key-presses-in-javascript
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

// console.log(player.boardLocation)
// movePlayerUp()
// movePlayerRight()
// movePlayerRight()
// movePlayerDown()
// movePlayerRight()
// movePlayerDown()
// movePlayerRight()
console.log(player.boardLocation)
console.log(basicArray)
