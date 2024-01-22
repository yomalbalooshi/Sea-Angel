// maze is generated using numbers to minimize memory usage
// 0 signifies path
// 1 signifies wall
// 2 signifies player
// 3 signifies exit
// 4 signifies trap
// 5 signifies points
// 6 signifies keys
let levelOneDayDream = {
  startPosition: [3, 3],
  totalKeys: 2,
  totalScore: 7,
  trapPower: 0.5,
  board: [
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0,
      0, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0,
      6, 1
    ],
    [
      1, 0, 0, 2, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 5, 1, 0, 0, 0, 0, 1, 1, 1, 0,
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
}
let levelTwoDayDream = {
  startPosition: [1, 1],
  totalKeys: 4,
  totalScore: 8,
  trapPower: 0.5,
  board: [
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1
    ],
    [
      1, 2, 1, 0, 1, 0, 6, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0,
      0, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 0, 0, 5, 4, 0, 4, 5, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0,
      6, 1
    ],
    [
      1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 5, 1, 0, 0, 0, 0, 1, 1, 1, 0,
      0, 1
    ],
    [
      1, 0, 0, 0, 0, 1, 0, 0, 1, 5, 0, 4, 4, 1, 0, 0, 1, 4, 0, 0, 0, 1, 0, 0, 0,
      0, 1
    ],
    [
      1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 5, 4, 1, 1, 1, 1, 0, 4, 0, 0, 1, 0, 0, 0,
      0, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 5, 0, 4, 0, 0, 1, 0, 0, 0,
      0, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 1, 4, 0, 1, 1, 1, 4, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0,
      0, 1
    ],
    [
      1, 1, 1, 1, 1, 1, 0, 0, 1, 4, 0, 0, 0, 5, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
      0, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 1, 4, 0, 0, 0, 4, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1,
      1, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0,
      0, 1
    ],
    [
      1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0,
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
      1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
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
      1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,
      0, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 4, 0, 0, 1, 0, 6, 0, 0, 1, 0,
      0, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,
      0, 1
    ],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
      3, 1
    ]
  ]
}
let levelThreeDayDream = {
  startPosition: [1, 1],
  totalKeys: 2,
  totalScore: 7,
  trapPower: 0.5,
  board: [
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1
    ],
    [
      1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0,
      0, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 0, 0, 5, 4, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0,
      6, 1
    ],
    [
      1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 1, 1, 1, 0,
      0, 1
    ],
    [
      1, 0, 0, 0, 0, 1, 0, 0, 1, 5, 0, 4, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,
      0, 1
    ],
    [
      1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 5, 0, 1, 1, 1, 1, 0, 4, 0, 0, 1, 0, 0, 0,
      0, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 4, 1, 0, 0, 5, 0, 0, 0, 0, 1, 0, 0, 0,
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
      1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0,
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
      1, 1, 1, 1, 1, 0, 1, 0, 0, 4, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
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
      1, 0, 1, 0, 0, 0, 1, 0, 0, 4, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1,
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
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,
      0, 1
    ],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
      3, 1
    ]
  ]
}
let levelOneNightmare = {
  startPosition: [3, 3],
  totalKeys: 2,
  totalScore: 7,
  trapPower: 1,
  board: [
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0,
      0, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0,
      6, 1
    ],
    [
      1, 0, 0, 2, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 5, 1, 0, 0, 0, 0, 1, 1, 1, 0,
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
}
let levelTwoNightmare = {
  startPosition: [1, 1],
  totalKeys: 4,
  totalScore: 3,
  trapPower: 1,
  board: [
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1
    ],
    [
      1, 2, 1, 0, 1, 0, 6, 0, 4, 0, 0, 0, 0, 0, 6, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0,
      0, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 0, 0, 5, 4, 0, 0, 5, 4, 0, 0, 1, 1, 1, 4, 4, 1, 0, 0, 0,
      6, 1
    ],
    [
      1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 4, 5, 1, 0, 4, 0, 0, 1, 1, 1, 0,
      0, 1
    ],
    [
      1, 0, 0, 0, 0, 1, 0, 0, 1, 5, 4, 4, 0, 1, 4, 4, 1, 0, 0, 0, 0, 1, 0, 0, 0,
      0, 1
    ],
    [
      1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 4, 5, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0,
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
      1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
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
      1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,
      0, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 4, 0, 0, 1, 0, 6, 0, 0, 1, 0,
      0, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,
      0, 1
    ],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
      3, 1
    ]
  ]
}
let levelThreeNightmare = {
  startPosition: [1, 1],
  totalKeys: 2,
  totalScore: 7,
  trapPower: 0.5,
  board: [
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1
    ],
    [
      1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0,
      0, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 0, 0, 5, 4, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0,
      6, 1
    ],
    [
      1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 1, 1, 1, 0,
      0, 1
    ],
    [
      1, 0, 0, 0, 0, 1, 0, 0, 1, 5, 0, 4, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,
      0, 1
    ],
    [
      1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 5, 0, 1, 1, 1, 1, 0, 4, 0, 0, 1, 0, 0, 0,
      0, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 4, 1, 0, 0, 5, 0, 0, 0, 0, 1, 0, 0, 0,
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
      1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0,
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
      1, 1, 1, 1, 1, 0, 1, 0, 0, 4, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
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
      1, 0, 1, 0, 0, 0, 1, 0, 0, 4, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1,
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
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,
      0, 1
    ],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
      3, 1
    ]
  ]
}

let daydream = [levelOneDayDream, levelTwoDayDream, levelThreeDayDream]
let nightmare = [levelOneNightmare, levelTwoNightmare, levelThreeNightmare]
export class Game {
  constructor(mode) {
    this.level = 1
    this.mode = mode
    this.boardArray = {}
    this.gameBoards = []
    this.playerStartPosition = []
    this.trapPower = 0
    this.levelExitKeys = 0
    this.totalGameScore = 0 //the highest score to get
    this.totalGameKeys = 0 //the total possible no. of keys in the whole game
    this.accumScore = 0
    this.accumKeys = 0
    this.accumDeaths = 0
    this.initializeBoardArrays()
    this.initializeGameVariables()
  }
  updateDeaths() {
    this.accumDeaths++
  }
  updateLevel() {
    this.playerStartPosition = this.gameBoards[this.level].startPosition
    this.trapPower = this.gameBoards[this.level].trapPower
    this.levelExitKeys = this.gameBoards[this.level].totalKeys
    this.level++
  }
  initializeBoardArrays() {
    if (this.mode === 'daydream') {
      this.gameBoards = structuredClone(daydream)
      this.boardArray = structuredClone(daydream[0].board)
      this.playerStartPosition = daydream[0].startPosition
      this.trapPower = daydream[0].trapPower
      this.levelExitKeys = daydream[0].totalKeys
    } else if (this.mode === 'nightmare') {
      this.gameBoards = structuredClone(nightmare)
      this.boardArray = structuredClone(nightmare[0].board)
      this.playerStartPosition = nightmare[0].startPosition
      this.trapPower = nightmare[0].trapPower
      this.levelExitKeys = nightmare[0].totalKeys
    }
  }
  initializeGameVariables() {
    for (let i = 0; i < this.gameBoards.length; i++) {
      this.totalGameScore += this.gameBoards[i].totalScore
      this.totalGameKeys += this.gameBoards[i].totalKeys
    }
  }
  updateAccumTotals(score, key) {
    this.accumScore += score
    this.accumKeys += key
    console.log(this.accumKeys)
    console.log(this.accumScore)
  }
  getLevelTotalKeys() {
    return this.gameBoards[this.level - 1].totalKeys
  }
  getLevelTotalScore() {
    return this.gameBoards[this.level - 1].totalScore
  }
}

// export { Game }
