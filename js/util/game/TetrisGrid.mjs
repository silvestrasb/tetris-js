import Grid from "./Grid.mjs";

export default class TetrisGrid extends Grid {
  constructor(width, height, squareSize, absoluteCoordinate) {
    width -= squareSize * 2;
    height -= squareSize * 2;
    absoluteCoordinate.x += squareSize;
    absoluteCoordinate.y += squareSize;
    super(width, height, squareSize, absoluteCoordinate);
  }
}
