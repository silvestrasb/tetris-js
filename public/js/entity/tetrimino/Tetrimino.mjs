// TEMP: NEPAMIRŠK ŠITO IŠTRINTI
import GridCoordinate from "./../../util/coordinate/GridCoordinate.mjs";

/* This is serves as an abstarct class. */
export default class Tetrimino {
  constructor(rotationSystem, coordinate, center, blockList) {
    this.rotationSystem = rotationSystem === "COORDINATE" ? 1 : 0;
    this.center = new GridCoordinate(center.x ,center.y);
    this.coordinate = coordinate;
    this.blockList = blockList;
  }

  draw(ctx, grid) {
    this.blockList.forEach((block) => {
      block.draw(ctx, grid);
    });
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

  // Temporary function for development demo purposes
  moveUp() {
    this.center.y--;
    this.coordinate.y--;
    this.blockList.forEach((block) => {
      block.moveUp();
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
