import Direction from "./Direction.mjs";

/**
 * This class holds the last key that the user pressed.
 * NOTE: Example of some nuences that are not covered currenlty: if the user pressed 2 keys at once, for exampple down and left.
 * NOTE: But I will worry about that later.
 */
export default class PressedKey {

    constructor() {
        this.direction = Direction.None;
        document.addEventListener("keydown", (event) => {
            if (event.keyCode === 39) {
                this.direction = Direction.Right;
            } else if (event.keyCode === 37) {
                this.direction = Direction.Left;
            }
            if (event.keyCode === 40) {
                this.direction = Direction.Down;
            } else if (event.keyCode === 38) {
                this.direction = Direction.Up;
            }
        });
        document.addEventListener("keyup", (event) => {
            // NOTE: This can be made more elegant
            if (event.keyCode === 39) {
                this.direction = Direction.None;
            } else if (event.keyCode === 37) {
                this.direction = Direction.None;
            }
            if (event.keyCode === 40) {
                this.direction = Direction.None;
            } else if (event.keyCode === 38) {
                this.direction = Direction.None;
            }
        });
    }

    getPressedKey() {
        return this.direction;
    }
}