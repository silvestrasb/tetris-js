import TetrisBlock from "../TetrisBlock.mjs";
import Tetrimino from "./Tetrimino.mjs";
import GridCoordinate from "../../util/coordinate/GridCoordinate.mjs";
import BlockColorScheme from "../../util/color/BlockColorScheme.mjs";

export default class STetrimino extends Tetrimino {
  constructor (coordinate) {
    const colorScheme = new BlockColorScheme("#00ff00", "#b3ffb3", "#00b200", "#004c00", "#4dff4d");
    super(coordinate, [
      new TetrisBlock(new GridCoordinate(coordinate.x , coordinate.y + 1), colorScheme),
      new TetrisBlock(new GridCoordinate(coordinate.x + 1, coordinate.y + 1), colorScheme),
      new TetrisBlock(new GridCoordinate(coordinate.x + 1, coordinate.y), colorScheme),
      new TetrisBlock(new GridCoordinate(coordinate.x + 2, coordinate.y), colorScheme),
    ]);
  }
}
