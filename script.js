function ifEmpty(pos, board) {
  // Parse the position string (e.g., "[0][1]") to extract row and column
  const match = pos.match(/\[(\d+)\]\[(\d+)\]/);
  if (match) {
    const row = parseInt(match[1], 10); // Extract row index
    const col = parseInt(match[2], 10); // Extract column index

    // Check if the cell is empty
    if (board[row][col] === "*") {
      putSignToBoard(board, row, col, "X")
    }
  } else {
    console.error("Invalid position format:", pos);
  }
}

function createDivGrid(board, parent) {
  for (let i = 0; i < 3; i++) {
    for (let x = 0; x < 3; x++) {
      const div = document.createElement("div");
      div.classList.add(`[${i}][${x}]`); // Add position as class
      div.addEventListener("click", (e) => {
        ifEmpty(e.target.classList.value, board); // Pass class value to ifEmpty
      });
      parent.appendChild(div);
    }
  }
}

function createPlayer(name, score, sign) {
  return {
    playerName: name,
    playerScore: score,
    playerSign: sign,

    incrementScore() {
      this.playerScore += 1;
    },
    clearScore() {
      this.playerScore = 0;
    },
    showScore() {
      console.log(this.playerScore);
    },
  };
}

const getBoard = (function () {
  return function () {
    return [
      ["*", "*", "*"],
      ["*", "*", "*"],
      ["*", "*", "*"],
    ];
  };
})();

function createGameObjects(playerSign1, playerSign2) {
  let board = getBoard();
  let player1 = createPlayer("player1", 0, playerSign2);
  let player2 = createPlayer("player2", 0, playerSign2);
  return { board, player1, player2 };
}

function putSignToBoard(board, row, col, sign) {
  const cells = document.querySelector(".container").children
  board[row][col] = sign

  for(let i = 0; i < cells.length; i++){
    const pos = cells[i].classList.value
    if(pos === `[${row}][${col}]`){
      cells[i].textContent = `${sign}`
    }
  }
}

function winCheck(board) {
  // Check rows for a win
  for (let row = 0; row < board.length; row++) {
    if (
      board[row][0] !== "*" &&
      board[row][0] === board[row][1] &&
      board[row][1] === board[row][2]
    ) {
      return true; // A player has won
    }
  }

  // Check columns for a win
  for (let col = 0; col < board[0].length; col++) {
    if (
      board[0][col] !== "*" &&
      board[0][col] === board[1][col] &&
      board[1][col] === board[2][col]
    ) {
      return true; // A player has won
    }
  }

  // Check diagonals for a win
  if (
    board[0][0] !== "*" &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    return true; // A player has won
  }
  if (
    board[0][2] !== "*" &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    return true; // A player has won
  }

  // No win condition met
  return false;
}

function gameHandler(){
  const gameObjects = createGameObjects("X", "O");
  const container = document.querySelector(".container")
  
  createDivGrid(gameObjects.board, container)

  let winCondition = false
  while (!winCondition){
    
  }
}

gameHandler()
