/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  let row = 0;
  let col = 0;
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if(board[i][j] === "R") {
        row = i;
        col = j;
      }
    } 
  }
  console.log(`row: ${row} col: ${col}`);
  return (
    searchBoard(board, row, col, "down") + 
    searchBoard(board, row, col, "up") + 
    searchBoard(board, row, col, "right") + 
    searchBoard(board, row, col, "left")
  );
};


function searchBoard(board, row, col, d) {
  console.log(`row: ${row} col: ${col} direction: ${d}`);
  if(row >= board.length || row < 0 || col >= board[row].length || col < 0) {
    return 0;
  }
  if(board[row][col] === "B") {
    return 0;
  }
  if(board[row][col] === "p") {
    return 1;
  } else {
    if(d === "down") {
      return searchBoard(board, row + 1, col, "down");
    } else if(d === "up") {
      return searchBoard(board, row - 1, col, "up");
    } else if(d === "right") {
      return searchBoard(board, row, col + 1, "right");
    } else {
      return searchBoard(board, row, col - 1, "left")
    }
  }
}
