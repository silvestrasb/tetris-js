import GridCoordinate from "./../../util/coordinate/GridCoordinate.mjs";

/* This is serves as an abstarct class. */
export default class Tetrimino {
  constructor(rotationSystem, coordinate, center, blockList) {
    this.rotationSystem = rotationSystem === "COORDINATE" ? 1 : 0;
    this.center = new GridCoordinate(center.x ,center.y);
    this.coordinate = coordinate;
    this.blockList = blockList;
  }

  rotate() {
    this.blockList.forEach((block) => {
      block.rotate(this.center, this.rotationSystem);
    });
  }

  moveDown() {
    this.center.y++;
    this.coordinate.y++;
    this.blockList.forEach((block) => {
      block.moveDown();
    });
  }

  moveRight() {
    this.center.x++;
    this.coordinate.x++;
    this.blockList.forEach((block) => {
      block.moveRight();
    });
  }

  moveLeft() {
    this.center.x--;
    this.coordinate.x--;
    this.blockList.forEach((block) => {
      block.moveLeft();
    });
  }
}
