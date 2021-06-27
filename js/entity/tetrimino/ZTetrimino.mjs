import TetrisBlock from "../TetrisBlock.mjs";
import Tetrimino from "./Tetrimino.mjs";
import GridCoordinate from "../../util/coordinate/GridCoordinate.mjs";
import BlockColorScheme from "../../util/color/BlockColorScheme.mjs";

export default class ZTetrimino extends Tetrimino {
  constructor (coordinate) {
    const colorScheme = new BlockColorScheme("#ff0000", "#ffb3b3", "#b20000", "#4c0000", "#ff4d4d");
    const center = new GridCoordinate(coordinate.x + 1, coordinate.y + 1);
    super("BLOCK", coordinate, center, 
    [
      new TetrisBlock(new GridCoordinate(coordinate.x, coordinate.y), colorScheme),
      new TetrisBlock(new GridCoordinate(coordinate.x + 1 , coordinate.y), colorScheme),
      new TetrisBlock(new GridCoordinate(coordinate.x + 1, coordinate.y + 1), colorScheme),
      new TetrisBlock(new GridCoordinate(coordinate.x + 2, coordinate.y + 1), colorScheme),
    ]);
  }
}
3