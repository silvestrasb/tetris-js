import PlayableTetrimino from "../input/PlayableTetrimino.mjs";
import UserInput from "../input/PlayableTetrimino.mjs";
import Grid from "../util/game/Grid.mjs";
import GridCoordinate from "../util/coordinate/GridCoordinate.mjs";
import AbsoluteCoordinate from "../util/coordinate/AbsoluteCoordinate.mjs";
import OTetrimino from "../entity/tetrimino/OTetrimino.mjs"

export default class Game {

    constructor(GAME_WIDTH, GAME_HEIGHT) {
        // Move this elsewhere
        this.grid = new Grid(
            GAME_WIDTH,
            GAME_HEIGHT,
            21.875,
            new AbsoluteCoordinate(0, 0)
        );

        // This selection should be random in the future
        this.starterTetrimino = new OTetrimino(new GridCoordinate(7, 3));
        this.playableTetrimino = new PlayableTetrimino(this.starterTetrimino);
        this.userInput = new UserInput();
    }

    /** 
     * Draws on the game canvas.
     */
    draw(ctx) {
        this.playableTetrimino.tetrimino.draw(ctx, this.grid);
    }


    update() {
        this.playableTetrimino.move();
        for (const tetrisBlock of this.playableTetrimino.tetrimino.blockList) {
            if (this._isCollidingWithTheBorder(tetrisBlock)) {
                this.playableTetrimino.undoMove();
                break;
            };
        }
        console.log("cuurent move: " + this.playableTetrimino.direction);
    }


    /**
     * Checks if the parameter @tetrisBlock is colliding with the border.
     */
    _isCollidingWithTheBorder(tetrisBlock) {
        if (tetrisBlock.coordinate.y >= this.grid.columns ||
            tetrisBlock.coordinate.y < 0                  ||
            tetrisBlock.coordinate.x >= this.grid.rows    ||
            tetrisBlock.coordinate.x < 0) {
            return true;
        }
        return false;
    }
}