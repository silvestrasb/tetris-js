import TetrisBlock from "../TetrisBlock.mjs";
import Tetrimino from "./Tetrimino.mjs";
import GridCoordinate from "../../util/coordinate/GridCoordinate.mjs";
import BlockColorScheme from "../../util/color/BlockColorScheme.mjs";

export default class ITetrimino extends Tetrimino {
  constructor(coordinate) {
    const colorScheme = new BlockColorScheme("#00ffff", "#b3ffff", "#00b2b2", "#004c4c", "#4dffff");
    super(coordinate, 
      [
      new TetrisBlock(new GridCoordinate(coordinate.x, coordinate.y + 1), colorScheme),
      new TetrisBlock(new GridCoordinate(coordinate.x + 1 , coordinate.y + 1), colorScheme),
      new TetrisBlock(new GridCoordinate(coordinate.x + 2, coordinate.y + 1), colorScheme),
      new TetrisBlock(new GridCoordinate(coordinate.x + 3, coordinate.y + 1), colorScheme),
    ]);
  }
}
