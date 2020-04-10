const h1 = document.querySelector(".game-title");
const spaces = document.querySelectorAll(".space");
const resets = document.querySelector(".reset-button");

resets.addEventListener("click", () => {
  window.location.reload();
});

let turns = [];

spaces.forEach((space) => {
  space.addEventListener("click", () => {
    if (
      turns[turns.length - 1] == "p2" ||
      turns[turns.length - 1] == undefined
    ) {
      if (space.id == "one") {
        if (isSpaceFree(0, 0) == true) {
          addToBoard(p1, 0, 0);
          space.innerText = "X";
          turns.push("p1");
        }
      }
      if (isOver() == true) {
        h1.innerText = "Game Over!";
      }
    }
    if (turns[turns.length - 1] == "p1") {
      if (space.id == "one") {
        if (isSpaceFree(0, 0) == true) {
          addToBoard(p2, 0, 0);
          space.innerText = "0";
          turns.push("p2");
        }
      }
      if (isOver() == true) {
        h1.innerText = "Game Over!";
      }
    }
    if (
      turns[turns.length - 1] == "p2" ||
      turns[turns.length - 1] == undefined
    ) {
      if (space.id == "two") {
        if (isSpaceFree(0, 1) == true) {
          addToBoard(p1, 0, 1);
          space.innerText = "X";
          turns.push("p1");
        }
      }
      if (isOver() == true) {
        h1.innerText = "Game Over!";
      }
    }
    if (turns[turns.length - 1] == "p1") {
      if (space.id == "two") {
        if (isSpaceFree(0, 1) == true) {
          addToBoard(p2, 0, 1);
          space.innerText = "0";
          turns.push("p2");
        }
      }
      if (isOver() == true) {
        h1.innerText = "Game Over!";
      }
    }
    if (
      turns[turns.length - 1] == "p2" ||
      turns[turns.length - 1] == undefined
    ) {
      if (space.id == "three") {
        if (isSpaceFree(0, 2) == true) {
          addToBoard(p1, 0, 2);
          space.innerText = "X";
          turns.push("p1");
        }
      }
      if (isOver() == true) {
        h1.innerText = "Game Over!";
      }
    }
    if (turns[turns.length - 1] == "p1") {
      if (space.id == "three") {
        if (isSpaceFree(0, 2) == true) {
          addToBoard(p2, 0, 2);
          space.innerText = "0";
          turns.push("p2");
        }
      }
      if (isOver() == true) {
        h1.innerText = "Game Over!";
      }
    }
    if (
      turns[turns.length - 1] == "p2" ||
      turns[turns.length - 1] == undefined
    ) {
      if (space.id == "four") {
        if (isSpaceFree(1, 0) == true) {
          addToBoard(p1, 1, 0);
          space.innerText = "X";
          turns.push("p1");
        }
      }
      if (isOver() == true) {
        h1.innerText = "Game Over!";
      }
    }
    if (turns[turns.length - 1] == "p1") {
      if (space.id == "four") {
        if (isSpaceFree(1, 0) == true) {
          addToBoard(p2, 1, 0);
          space.innerText = "0";
          turns.push("p2");
        }
      }
      if (isOver() == true) {
        h1.innerText = "Game Over!";
      }
    }
    if (
      turns[turns.length - 1] == "p2" ||
      turns[turns.length - 1] == undefined
    ) {
      if (space.id == "five") {
        if (isSpaceFree(1, 1) == true) {
          addToBoard(p1, 1, 1);
          space.innerText = "X";
          turns.push("p1");
        }
      }
      if (isOver() == true) {
        h1.innerText = "Game Over!";
      }
    }
    if (turns[turns.length - 1] == "p1") {
      if (space.id == "five") {
        if (isSpaceFree(1, 1) == true) {
          addToBoard(p2, 1, 1);
          space.innerText = "0";
          turns.push("p2");
        }
      }
      if (isOver() == true) {
        h1.innerText = "Game Over!";
      }
    }
    if (
      turns[turns.length - 1] == "p2" ||
      turns[turns.length - 1] == undefined
    ) {
      if (space.id == "six") {
        if (isSpaceFree(1, 2) == true) {
          addToBoard(p1, 1, 2);
          space.innerText = "X";
          turns.push("p1");
        }
      }
      if (isOver() == true) {
        h1.innerText = "Game Over!";
      }
    }
    if (turns[turns.length - 1] == "p1") {
      if (space.id == "six") {
        if (isSpaceFree(1, 2) == true) {
          addToBoard(p2, 1, 2);
          space.innerText = "0";
          turns.push("p2");
        }
      }
      if (isOver() == true) {
        h1.innerText = "Game Over!";
      }
    }
    if (
      turns[turns.length - 1] == "p2" ||
      turns[turns.length - 1] == undefined
    ) {
      if (space.id == "seven") {
        if (isSpaceFree(2, 0) == true) {
          addToBoard(p1, 2, 0);
          space.innerText = "X";
          turns.push("p1");
        }
      }
      if (isOver() == true) {
        h1.innerText = "Game Over!";
      }
    }
    if (turns[turns.length - 1] == "p1") {
      if (space.id == "seven") {
        if (isSpaceFree(2, 0) == true) {
          addToBoard(p2, 2, 0);
          space.innerText = "0";
          turns.push("p2");
        }
      }
      if (isOver() == true) {
        h1.innerText = "Game Over!";
      }
    }
    if (
      turns[turns.length - 1] == "p2" ||
      turns[turns.length - 1] == undefined
    ) {
      if (space.id == "eight") {
        if (isSpaceFree(2, 1) == true) {
          addToBoard(p1, 2, 1);
          space.innerText = "X";
          turns.push("p1");
        }
      }
      if (isOver() == true) {
        h1.innerText = "Game Over!";
      }
    }
    if (turns[turns.length - 1] == "p1") {
      if (space.id == "eight") {
        if (isSpaceFree(2, 1) == true) {
          addToBoard(p2, 2, 1);
          space.innerText = "0";
          turns.push("p2");
        }
      }
      if (isOver() == true) {
        h1.innerText = "Game Over!";
      }
    }
    if (
      turns[turns.length - 1] == "p2" ||
      turns[turns.length - 1] == undefined
    ) {
      if (space.id == "nine") {
        if (isSpaceFree(2, 2) == true) {
          addToBoard(p1, 2, 2);
          space.innerText = "X";
          turns.push("p1");
        }
      }
      if (isOver() == true) {
        h1.innerText = "Game Over!";
      }
    }
    if (turns[turns.length - 1] == "p1") {
      if (space.id == "nine") {
        if (isSpaceFree(2, 2) == true) {
          addToBoard(p2, 2, 2);
          space.innerText = "0";
          turns.push("p2");
        }
      }
    }
    isOver();
  });
});

// Filling boards with zeros to show that the indeces are empty
let board = [
  [, ,],
  [, ,],
  [, ,],
];

class Player {
  constructor(id, symbol) {
    this.id = id;
    this.symbol = symbol;
  }
}

let p1 = new Player();
let p2 = new Player();
function setupPlayers() {
  p1.id = 1;
  p1.symbol = "X";
  p2.id = 2;
  p2.symbol = "O";
}
setupPlayers();

function isSpaceFree(index1, index2) {
  // So in order to pass an index we must get [0][0],[0][1],[0][2],[1][0],[1][1], etc.
  if (board[index1][index2] == undefined) {
    return true;
  } else {
    return false;
  }
}

function addToBoard(player, index1, index2) {
  board[index1][index2] = player.symbol;
}

function isOver() {
  /*checkign vertical line*/
  for (let col = 0; col < 3; col++) {
    let row = 0;
    if (
      board[row][col] == board[row + 1][col] &&
      (board[row][col] != undefined && board[row + 1][col] != undefined) ==
        (board[row + 2][col] && board[row + 2][col] != undefined)
    ) {
      return true;
    }
  }
  /*checking horizontal line*/
  if (
    board[0][0] == board[0][1] &&
    board[0][1] == board[0][2] &&
    board[0][0] != undefined
  ) {
    return true;
  } else if (
    board[1][0] == board[1][1] &&
    board[1][1] == board[1][2] &&
    board[1][0] != undefined
  ) {
    return true;
  } else if (
    board[2][0] == board[2][1] &&
    board[2][1] == board[2][2] &&
    board[2][0] != undefined
  ) {
    return true;
    /* checking diagonal line*/
  } else if (
    board[0][0] == board[1][1] &&
    board[1][1] == board[2][2] &&
    board[1][1] != undefined
  ) {
    return true;
  } else {
    return false;
  }
}
