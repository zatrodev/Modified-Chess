import { intToChar } from "./utils/funcs.js";

export class Board {
  constructor(columns, rows) {
    this.columns = columns;
    this.rows = rows;
    this.board = Array.from(Array(rows), () => Array(columns));
  }

  setup() {
    const chessBoard = document.querySelector(".chessboard");
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        const tile = document.createElement("div");
        (i + j) % 2 == 0
          ? tile.classList.add("white")
          : tile.classList.add("black");
        tile.id = `${intToChar(j)}${i + 1}`;
        chessBoard.appendChild(tile);
      }
    }
  }
}
