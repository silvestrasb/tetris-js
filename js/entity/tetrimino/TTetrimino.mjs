import TetrisBlock from "../TetrisBlock.mjs";
import Tetrimino from "./Tetrimino.mjs";
import GridCoordinate from "../../util/coordinate/GridCoordinate.mjs";
import BlockColorScheme from "../../util/color/BlockColorScheme.mjs";

export default class TTetrimino extends Tetrimino {
  constructor (coordinate) {
    const colorScheme = new BlockColorScheme("#cc00cc", "#f0b3f0", "#8e008e", "#3d003d", "#db4ddb");
    const center = new GridCoordinate(coordinate.x + 1, coordinate.y + 1);
    super("BLOCK", coordinate, center,
    [
      new TetrisBlock(new GridCoordinate(coordinate.x + 1, coordinate.y), colorScheme),
      new TetrisBlock(new GridCoordinate(coordinate.x, coordinate.y + 1), colorScheme),
      new TetrisBlock(new GridCoordinate(coordinate.x + 1, coordinate.y + 1), colorScheme),
      new TetrisBlock(new GridCoordinate(coordinate.x + 2, coordinate.y + 1), colorScheme),
    ]);
  }
}
