/** Abstract class. */
export default class Block {
  constructor(coordinate, colorScheme) {
    this.colorScheme = colorScheme;
    this.coordinate = coordinate;
  }

  moveUp() {
    this.coordinate.y--;
  }

  moveRight() {
    this.coordinate.x++;
  }

  moveDown() {
    this.coordinate.y++;
  }

  moveLeft() {
    this.coordinate.x--;
  }
}
