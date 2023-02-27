import { Board } from "./board.js";
import { COLUMNS, ROWS } from "./globals.js";
import { Pawn } from "./pieces/pawn.js";

const board = new Board(COLUMNS, ROWS);
board.setup();

const pawn = new Pawn("A1");
console.log(pawn);
