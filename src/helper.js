export function culculateWinner(squares) {
  const matrix = [];
  let row = [];
  for (let i = 1; i <= 100; i++) {
    row.push(squares[i - 1]);
    if (i % 10 === 0) {
      matrix.push(row);
      row = [];
    }
  }
  let result = checkForWin(matrix);
  if (result) return result;
  return null;
}

function checkForWin(board) {
  const playerX = "x";
  const playerO = "o";
  // Check rows
  for (let i = 0; i < 10; i++) {
    if (checkForThreeSimilar(board[i], playerX)) {
      console.log(`${playerX} is winner`);
      return playerX;
    }
    if (checkForThreeSimilar(board[i], playerO)) {
      console.log("O is winner");
      return playerO;
    }
  }

  // Check for columns
  for (let i = 0; i < 10; i++) {
    let column = [];
    for (let j = 0; j < 10; j++) {
      column.push(board[j][i]);
    }
    if (checkForThreeSimilar(column, playerX)) {
      console.log(`${playerX} is winner`);
      return playerX;
    }
    if (checkForThreeSimilar(column, playerO)) {
      console.log(`${playerO} is winner`);
      return playerO;
    }
  }

  // Check for diagonals
  const diagonals = getDiagonals(board);
  for (let i = 0; i < diagonals.length; i++) {
    if (checkForThreeSimilar(diagonals[i], playerX)) {
      console.log(`${playerX} is winner`);
      return playerX;
    }
    if (checkForThreeSimilar(diagonals[i], playerO)) {
      console.log(`${playerO} is winner`);
      return playerO;
    }
  }
  return null;
}

function checkForThreeSimilar(arr, player) {
  let count = 0;
  let isPrevious = false;
  for (let i = 0; i < arr.length; i++) {
    if (isPrevious && arr[i] === player) {
      count += 1;
      if (count === 5) {
        return player;
      }
    } else if (arr[i] === player) {
      isPrevious = true;
      count++;
    } else if (arr[i] !== player) {
      isPrevious = false;
      count = 0;
    }
  }
  return false;
}

function getDiagonals(matrix) {
  let diagonals = [];

  for (let i = 0; i < matrix.length; i++) {
    let diagonal = [];
    for (let r = 0; r <= i; r++) {
      for (let c = 0; c <= i; c++) {
        if (r + c === i) {
          diagonal.push(matrix[r][c]);
        }
      }
    }
    diagonals.push(diagonal);
  }

  let len = matrix.length;

  // for (let i = len - 1; i >= 0; i--) {
  //   let diagonal = [];
  //   let diff = len - 1 - i;
  //   for (let r = 0; r <= i; r++) {
  //     for(let c = 0; c <= i; c++) {
  //       if(r + c === i * 2 - diff) {
  //         diagonal.push(matrix[r][c]);
  //       }
  //     }
  //   }
  //   diagonals.push(diagonal);
  // }

  // for (let i = 0; i < matrix.length; i++) {
  //   let diagonal = [];
  //   for (let j = 0; j < matrix[i].length; j++) {
  //     if (i + j === matrix.length - 1) {
  //       diagonal.push(matrix[i][j]);
  //     }
  //   }
  //   diagonals.push(diagonal);
  // }

  return diagonals;
