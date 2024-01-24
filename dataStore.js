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
let levelOneNormal = {
  startPosition: [1, 1],
  trapDoorPosition: [],
  totalKeys: 1,
  totalScore: 7,
  trapPower: 0.5,
  board: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 0, 0, 4, 0, 0, 5, 1, 0, 3],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 4, 0, 1, 0, 0, 0, 0, 5, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 5, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 6, 1, 0, 1, 4, 1, 5, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 5, 0, 5, 0, 0, 0, 0, 1, 5, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
}
let levelOneNight = {
  startPosition: [1, 1],
  trapDoorPosition: [],
  totalKeys: 1,
  totalScore: 7,
  trapPower: 0.5,
  board: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 5, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 4, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 5, 1, 6, 0, 5, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 4, 1, 0, 1],
    [1, 0, 5, 0, 1, 0, 4, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 3],
    [1, 4, 5, 0, 5, 4, 0, 0, 1, 5, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
}
let levelTwoNormal = {
  startPosition: [19, 1],
  trapDoorPosition: [],
  totalKeys: 2,
  totalScore: 11,
  trapPower: 0.5,
  board: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 6, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 4, 5, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 5, 1, 5, 1, 0, 0, 0, 5, 4, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 5, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 5, 1, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 5, 4, 1, 0, 1, 0, 1, 0, 0, 5, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 3],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 5, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 4, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 4, 1],
    [1, 0, 0, 5, 1, 0, 4, 5, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
}
let levelTwoNight = {
  startPosition: [19, 19],
  trapDoorPosition: [],
  totalKeys: 2,
  totalScore: 11,
  trapPower: 0.5,
  board: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 5, 1, 0, 0, 4, 5, 0, 0, 0, 0, 0, 1, 4, 0, 0, 3],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 5, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 5, 0, 0, 1, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 0, 5, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 6, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 5, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 5, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 5, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 4, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 4, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 5, 4, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 6, 0, 0, 0, 0, 1, 0, 0, 5, 1, 0, 0, 0, 0, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
}
let levelThreeNormal = {
  startPosition: [1, 1],
  trapDoorPosition: [11, 28],
  totalKeys: 3,
  totalScore: 16,
  trapPower: 1,
  board: [
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1
    ],
    [
      1, 2, 1, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 4, 0, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 0, 1, 0, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 1, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 0, 0, 0, 3
    ],
    [
      1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      0, 1, 1, 1, 1, 1
    ],
    [
      1, 0, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
      0, 1, 4, 4, 4, 1
    ],
    [
      1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1,
      0, 1, 4, 1, 1, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 4, 4, 1, 0, 0,
      0, 1, 4, 4, 6, 1
    ],
    [
      1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
      1, 1, 1, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 4, 1, 1,
      1, 1, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 5, 1, 0, 0, 0, 4, 0, 0, 0, 1, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0,
      0, 1, 0, 8, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1,
      0, 0, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1,
      1, 1, 0, 1, 0, 1
    ],
    [
      1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 0, 1
    ],
    [
      1, 5, 1, 0, 4, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0,
      0, 0, 7, 1, 0, 1
    ],
    [
      1, 4, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 5, 1, 0, 1, 1, 1, 0, 1, 0, 1,
      1, 1, 1, 1, 0, 1
    ],
    [
      1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 4, 1, 0, 0, 0, 0, 0, 1, 0, 0,
      0, 1, 5, 0, 0, 1
    ],
    [
      1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
      0, 1, 1, 1, 1, 1
    ],
    [
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 6, 1, 0, 0, 0, 0, 0, 0, 5, 1, 0, 1, 0, 0,
      0, 0, 0, 4, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 0, 1, 0, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 5,
      4, 1, 0, 1, 0, 1
    ],
    [
      1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1,
      1, 1, 0, 1, 0, 1
    ],
    [
      1, 5, 1, 0, 0, 0, 0, 5, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 4, 1,
      0, 1, 5, 1, 1, 1
    ],
    [
      1, 0, 4, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 0, 1, 0, 1, 0, 0, 0, 0, 5, 1, 5, 1,
      0, 1, 4, 0, 0, 1
    ],
    [
      1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1,
      0, 1, 1, 1, 1, 1
    ],
    [
      1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 1,
      0, 0, 0, 0, 6, 1
    ],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1
    ]
  ]
}
let levelThreeNight = {
  startPosition: [1, 29],
  trapDoorPosition: [4, 9],
  totalKeys: 3,
  totalScore: 17,
  trapPower: 0.5,
  board: [
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1
    ],
    [
      1, 0, 1, 6, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 2, 1
    ],
    [
      1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 4, 0, 1, 1, 1, 0, 1,
      1, 1, 1, 1, 0, 1
    ],
    [
      1, 4, 4, 0, 0, 0, 5, 4, 1, 0, 1, 5, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0,
      0, 0, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 1, 1, 1, 1, 8, 1, 1, 1, 0, 1, 4, 1, 0, 1, 1, 1, 0, 1, 1, 1,
      0, 1, 1, 1, 0, 1
    ],
    [
      1, 5, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 4, 1, 0, 0, 0, 1, 0, 1, 0, 0,
      0, 1, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 0, 1, 1, 1, 4, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1,
      1, 1, 0, 1, 0, 1
    ],
    [
      1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 1, 0, 0,
      0, 1, 0, 1, 0, 1
    ],
    [
      1, 1, 1, 1, 1, 4, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
      1, 1, 0, 1, 0, 1
    ],
    [
      1, 5, 0, 0, 1, 4, 1, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
      0, 1, 0, 1, 0, 1
    ],
    [
      1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1,
      1, 1, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 4, 5, 0, 0, 0, 0, 1, 0, 1, 0, 0,
      0, 1, 0, 0, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1,
      1, 1, 1, 1, 0, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 5, 0, 0, 1, 4, 1, 0, 0, 0, 1, 0, 0,
      0, 0, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 4, 1, 1, 1, 0, 1, 0, 1,
      1, 1, 1, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 6, 1, 0, 1, 0, 1,
      0, 4, 0, 0, 5, 1
    ],
    [
      1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1,
      0, 4, 0, 1, 1, 1
    ],
    [
      1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
      5, 0, 0, 0, 0, 1
    ],
    [
      1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1,
      0, 1, 1, 1, 1, 1
    ],
    [
      1, 0, 1, 6, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 5, 1, 0, 1, 0, 0,
      0, 0, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1,
      0, 4, 4, 1, 0, 1
    ],
    [
      1, 5, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1,
      0, 0, 0, 1, 0, 1
    ],
    [
      1, 4, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1,
      1, 1, 0, 1, 0, 1
    ],
    [
      1, 4, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
      0, 0, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1,
      1, 1, 0, 1, 0, 1
    ],
    [
      1, 0, 0, 0, 1, 7, 1, 0, 0, 5, 1, 0, 1, 0, 1, 5, 0, 0, 0, 0, 1, 0, 1, 0, 0,
      4, 1, 0, 0, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1,
      4, 1, 0, 1, 1, 1
    ],
    [
      1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1,
      4, 1, 0, 0, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1,
      4, 1, 0, 1, 0, 3
    ],
    [
      1, 5, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
      4, 1, 0, 0, 0, 1
    ],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1
    ]
  ]
}
let levelFourNormal = {
  startPosition: [1, 1],
  trapDoorPosition: [17, 6],
  totalKeys: 4,
  totalScore: 40,
  trapPower: 1,
  board: [
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ],
    [
      1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 1, 0, 6, 0, 0, 0, 1, 0, 0, 0, 4, 6, 1
    ],
    [
      1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 4,
      1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 4, 0, 4, 0, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 5, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0,
      0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 4, 0, 0, 0, 1
    ],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1
    ],
    [
      1, 5, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 5, 0, 0, 0, 1, 0, 5, 4, 1, 0, 1, 0, 0,
      0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1
    ],
    [
      1, 0, 1, 5, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1,
      1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 4, 0, 4, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
      5, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1,
      0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
      0, 1, 5, 0, 0, 0, 0, 1, 0, 1, 5, 0, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 1, 4, 5, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
      0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 4, 4, 0, 1,
      0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 5, 1
    ],
    [
      1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 4, 4, 1, 1,
      0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1
    ],
    [
      1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
      0, 1, 0, 0, 5, 1, 0, 1, 0, 0, 0, 0, 0, 0, 4, 1
    ],
    [
      1, 1, 4, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
      0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1
    ],
    [
      1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 7, 1, 0, 5, 4, 1, 0, 0, 0, 0, 0, 1, 0, 0,
      5, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      5, 1, 0, 1, 0, 1, 0, 0, 0, 1, 4, 4, 4, 1, 0, 1
    ],
    [
      1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
      0, 4, 0, 1, 0, 1, 1, 1, 0, 1, 4, 1, 1, 1, 0, 1
    ],
    [
      1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 5, 1, 6, 1,
      0, 0, 0, 1, 5, 1, 0, 1, 0, 1, 4, 4, 4, 1, 0, 1
    ],
    [
      1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 4, 1,
      1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 4, 1,
      0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1
    ],
    [
      1, 0, 4, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1,
      1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 5, 1, 0, 0, 0, 0, 0, 1,
      5, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 4, 1, 0, 1
    ],
    [
      1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1,
      0, 1, 1, 1, 0, 4, 0, 1, 0, 1, 0, 4, 4, 4, 0, 1
    ],
    [
      1, 0, 1, 6, 1, 0, 1, 0, 0, 5, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
      0, 1, 4, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 4, 0, 4, 5, 1, 1, 1, 1, 1, 0, 1,
      1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1
    ],
    [
      1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 5, 1, 0, 1, 0, 0, 5, 0, 0, 0,
      0, 0, 0, 0, 5, 1, 0, 0, 0, 5, 0, 0, 0, 0, 0, 1
    ],
    [
      1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 4, 1, 1, 1, 1,
      0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1
    ],
    [
      1, 0, 0, 0, 4, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 5, 1
    ],
    [
      1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
      0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 5, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1,
      5, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 4, 0, 1, 1, 1,
      1, 1, 0, 1, 0, 4, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 0, 4, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0,
      0, 0, 0, 1, 0, 5, 4, 1, 5, 0, 0, 1, 0, 0, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 1, 0, 5, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1
    ],
    [
      1, 0, 0, 0, 1, 5, 1, 4, 1, 5, 1, 0, 5, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1
    ],
    [
      1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1,
      1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 1, 4, 4, 4, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 5, 1, 0, 0,
      0, 0, 5, 1, 0, 0, 5, 1, 0, 0, 0, 5, 0, 0, 0, 1
    ],
    [
      1, 1, 1, 0, 1, 1, 1, 0, 5, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
      0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 4, 0, 1, 0, 1
    ],
    [
      1, 0, 5, 0, 0, 0, 0, 0, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 5, 1
    ],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
  ]
}

let levelFourNight = {
  startPosition: [39, 39],
  trapDoorPosition: [23, 30],
  totalKeys: 4,
  totalScore: 41,
  trapPower: 0.5,
  board: [
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ],
    [
      1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1, 0, 0, 0, 1, 0, 0,
      0, 0, 0, 0, 0, 1, 4, 5, 0, 1, 0, 4, 4, 4, 0, 1
    ],
    [
      1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 4, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1,
      1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 4, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 5, 0, 1, 0, 0, 0, 1, 0, 1, 0, 4, 4, 5, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 4, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 4, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1
    ],
    [
      1, 0, 0, 0, 1, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 1, 1, 5, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 4, 4, 1, 1, 1, 1, 0, 1, 0, 4, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 4, 1, 0, 1, 0, 0, 0, 1, 4, 0, 0, 5, 0, 1, 0, 0, 0, 1, 5, 0,
      0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1
    ],
    [
      1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1
    ],
    [
      1, 0, 0, 0, 1, 5, 1, 6, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1
    ],
    [
      1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 4, 0, 1, 1, 1
    ],
    [
      1, 5, 0, 0, 1, 0, 0, 5, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 5, 0, 1,
      0, 0, 0, 1, 5, 0, 0, 0, 0, 1, 5, 1, 0, 0, 0, 1
    ],
    [
      1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
      0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1
    ],
    [
      1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 1, 0, 1, 0, 0,
      0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 6, 0, 0, 1
    ],
    [
      1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 4, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1,
      1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1
    ],
    [
      1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 5, 1, 0, 0, 0, 1, 0, 0, 0, 1, 6, 1,
      5, 1, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1
    ],
    [
      1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ],
    [
      1, 5, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 4, 5, 1, 0, 4, 0, 1,
      0, 0, 0, 1, 0, 1, 0, 4, 5, 0, 0, 0, 0, 0, 0, 1
    ],
    [
      1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 4, 0, 1,
      0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
      0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1
    ],
    [
      1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 4, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1,
      0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1
    ],
    [
      1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 5, 1, 0, 1, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 4, 1
    ],
    [
      1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1,
      0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 4, 1
    ],
    [
      1, 0, 0, 5, 1, 0, 1, 5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 5, 0,
      0, 1, 0, 0, 0, 8, 0, 0, 0, 0, 0, 1, 0, 5, 0, 1
    ],
    [
      1, 5, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1,
      1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 4, 1
    ],
    [
      1, 4, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 5, 0, 1, 0, 0, 0, 0,
      0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 4, 1
    ],
    [
      1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1
    ],
    [
      1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 4, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 7, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 4, 1, 4, 4, 1, 1,
      1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1
    ],
    [
      1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 4, 4, 0, 0, 0, 0,
      0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1
    ],
    [
      1, 5, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1,
      0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 4, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 5, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 5, 0, 1,
      0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1,
      1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 5, 1
    ],
    [
      1, 0, 0, 0, 1, 0, 1, 5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1
    ],
    [
      1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 5, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1,
      1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1
    ],
    [
      1, 0, 0, 0, 1, 6, 1, 0, 0, 0, 0, 0, 1, 4, 4, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1,
      0, 0, 5, 1, 0, 0, 0, 1, 0, 0, 4, 1, 0, 0, 0, 1
    ],
    [
      1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1,
      1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1
    ],
    [
      1, 5, 1, 0, 0, 0, 1, 4, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 5, 0, 1, 0, 3
    ],
    [
      1, 0, 4, 0, 1, 1, 1, 5, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1,
      0, 1, 1, 1, 5, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1
    ],
    [
      1, 0, 1, 0, 0, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 0, 4, 4, 0, 4, 4, 1, 0, 0, 4, 0, 0, 1, 2, 1
    ],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
  ]
}

let nightmare = [levelOneNight, levelTwoNight, levelThreeNight, levelFourNight]
let daydream = [
  levelOneNormal,
  levelTwoNormal,
  levelThreeNormal,
  levelFourNormal
]

export class Game {
  constructor(mode) {
    this.level = 1
    this.mode = mode
    this.boardArray = []
    this.gameBoards = []
    this.playerStartPosition = []
    this.trapDoorPosition = []
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
    this.trapDoorPosition = this.gameBoards[this.level].trapDoorPosition
    this.level++
  }
  initializeBoardArrays() {
    if (this.mode === 'daydream') {
      this.gameBoards = structuredClone(daydream)
      this.boardArray = structuredClone(daydream[0].board)
      this.playerStartPosition = daydream[0].startPosition
      this.trapPower = daydream[0].trapPower
      this.levelExitKeys = daydream[0].totalKeys
      this.trapDoorPosition = daydream[0].trapDoorPosition
    } else if (this.mode === 'nightmare') {
      this.gameBoards = structuredClone(nightmare)
      this.boardArray = structuredClone(nightmare[0].board)
      this.playerStartPosition = nightmare[0].startPosition
      this.trapPower = nightmare[0].trapPower
      this.levelExitKeys = nightmare[0].totalKeys
      this.trapDoorPosition = daydream[0].trapDoorPosition
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
