import { COLUMNS, ROWS } from "../globals.js";
import { notationToCoord } from "../utils/funcs.js";

// modified pawn; moves diagonally
export class Pawn {
  constructor(notation) {
    this.position = notationToCoord(notation);
    this.availableMoves = this.getAvailableMoves();
  }

  getAvailableMoves() {
    let availableMoves = new Array();

    if (this.position.y + 1 <= ROWS) {
      if (this.position.x - 1 >= 0) {
        availableMoves.push([this.position.x - 1, this.position.y + 1]);
      }

      if (this.position.x + 1 <= COLUMNS) {
        availableMoves.push([this.position.x + 1, this.position.y + 1]);
      }
    }

    return availableMoves;
  }
}
