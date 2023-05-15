import GridCoordinate from "../coordinate/GridCoordinate.mjs";

// TODO: Move this class to some other package
export default class Grid {
  constructor(width, height, squareSize, absoluteCoordinate) {
    this.rows = width / squareSize;
    this.columns = height / squareSize;
    this.width = width;
    this.height = height;
    this.squareSize = squareSize;
    this.absoluteCoordinate = absoluteCoordinate;
  }

  toAbsolute(gridCoordinate) {
    return new GridCoordinate(
      gridCoordinate.x * this.squareSize,
      gridCoordinate.y * this.squareSize
    );
  }
}
