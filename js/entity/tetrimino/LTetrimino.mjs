import TetrisBlock from "../TetrisBlock.mjs";
import Tetrimino from "./Tetrimino.mjs";
import GridCoordinate from "../../util/coordinate/GridCoordinate.mjs";
import BlockColorScheme from "../../util/color/BlockColorScheme.mjs";

export default class LTetrimino extends Tetrimino {
  constructor (coordinate) {
    const colorScheme = new BlockColorScheme("#ff7700", "#ffd6b3", "#b25300", "#4c2300", "#ffa04d");
    const center = new GridCoordinate(coordinate.x + 1, coordinate.y + 1);
    super("BLOCK", coordinate, center,
    [
      new TetrisBlock(new GridCoordinate(coordinate.x, coordinate.y + 1), colorScheme),
      new TetrisBlock(new GridCoordinate(coordinate.x + 1, coordinate.y + 1), colorScheme),
      new TetrisBlock(new GridCoordinate(coordinate.x + 2, coordinate.y + 1), colorScheme),
      new TetrisBlock(new GridCoordinate(coordinate.x + 2, coordinate.y), colorScheme),
    ]);
  }
}
