import GridCoordinate from "../coordinate/GridCoordinate.mjs";

export default class Grid {
  // TODO: RENAME absoluteCoordinate to coordinate.
  constructor(width, height, squareSize, absoluteCoordinate) {
    this.rows = Math.floor(width / squareSize);
    this.columns = Math.floor(height / squareSize);
    this.width = width;
    this.height = height;
    this.squareSize = squareSize;
    this.absoluteCoordinate = absoluteCoordinate;
  }

  toAbsolute(gridCoordinate) {
    return new GridCoordinate(
      gridCoordinate.x * this.squareSize + this.absoluteCoordinate.x,
      gridCoordinate.y * this.squareSize + this.absoluteCoordinate.y
    );
  }
}
