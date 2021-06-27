import TetrisBlock from "../TetrisBlock.mjs";
import Tetrimino from "./Tetrimino.mjs";
import GridCoordinate from "../../util/coordinate/GridCoordinate.mjs";
import BlockColorScheme from "../../util/color/BlockColorScheme.mjs";

export default class OTetrimino extends Tetrimino {
  constructor (coordinate) {
    const colorScheme = new BlockColorScheme("#ffff00", "#ffffb3", "#b2b200", "#4c4c00", "#ffff4d");
    super(coordinate, [
      new TetrisBlock(new GridCoordinate(coordinate.x, coordinate.y), colorScheme),
      new TetrisBlock(new GridCoordinate(coordinate.x, coordinate.y + 1), colorScheme),
      new TetrisBlock(new GridCoordinate(coordinate.x + 1, coordinate.y), colorScheme),
      new TetrisBlock(new GridCoordinate(coordinate.x + 1, coordinate.y + 1), colorScheme),
    ]);
  }
}
