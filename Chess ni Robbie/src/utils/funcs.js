import { Position } from "./position.js";

export function notationToCoord(notation) {
  return new Position(charToInt(notation[0]), notation[1] - 1);
}

function charToInt(char) {
  return char.charCodeAt(0) - "A".charCodeAt(0);
}

export function intToChar(int) {
  return String.fromCharCode("A".charCodeAt(0) + int);
}
