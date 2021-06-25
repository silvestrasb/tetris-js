/* This is serves as an abstarct class. */
export default class Tetrimino {
  constructor(coordinate, tetrisBlocks) {
    this.coordinate = coordinate;
    this.tetrisBlocks = tetrisBlocks;
  }

  // NOTE: NOT SURE IF THIS METHOD IS NECESSARY
  draw(ctx, grid) {
    this.tetrisBlocks.forEach((block) => {
      block.draw(ctx, grid);
    });
  }

  // NOTE: NOT IMPLEMENTED YET
  _flipGridCoordinate(gridCoordinate, axis) {}

  // NOTE: NOT IMPLEMENTED YET
  rotate() {
    // let rotationCoordinate = new GridCoordinate(6, 10);
    // console.log(
    //   `Tetrimino coordinate: (${this.coordinate.x}, ${this.coordinate.y})`
    // );
    // rotationCoordinate.x = this.coordinate.x + 2;
    // rotationCoordinate.y = this.coordinate.y + 2;
    // console.log(
    //   `Rotation coordinate: (${rotationCoordinate.x}, ${rotationCoordinate.y})`
    // );
    // this.tetrisBlocks.forEach((block) => {
    //   const tempFlippedCoordinate = this._flipGridCoordinate(
    //     block.gridCoordinate,
    //     rotationCoordinate
    //   );
    //   block.gridCoordinate.x = tempFlippedCoordinate.x;
    //   block.gridCoordinate.y = tempFlippedCoordinate.y;
    // });
  }

  moveDown() {
    this.coordinate.y++;
    this.tetrisBlocks.forEach((block) => {
      block.moveDown();
    });
  }

  moveRight() {
    this.coordinate.x++;
    this.tetrisBlocks.forEach((block) => {
      block.moveRight();
    });
  }

  moveLeft() {
    this.coordinate.x--;
    this.tetrisBlocks.forEach((block) => {
      block.moveLeft();
    });
  }
}
