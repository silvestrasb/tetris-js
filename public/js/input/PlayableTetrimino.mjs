import Direction from "./Direction.mjs";
import PressedKey from "./PressedKey.mjs";

/**
 * This class is a wrapper class for tetrimino that the user controls.
 */
export default class PlayableTetrimino {
  constructor(tetrimino) {
    this.tetrimino = tetrimino;
    this.pressedKey = new PressedKey();
    this.direction;
  }

  move() {
    this.direction = this.pressedKey.getPressedKey();
    switch (this.pressedKey.getPressedKey()) {
      case Direction.Up:
        this.tetrimino.moveUp();
        break;

      case Direction.Down:
        this.tetrimino.moveDown();
        break;

      case Direction.Left:
        this.tetrimino.moveLeft();
        break;

      case Direction.Right:
        this.tetrimino.moveRight();
        break;
    }
  }
}