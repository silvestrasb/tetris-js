import PlayableTetrimino from "../input/PlayableTetrimino.mjs";
import UserInput from "../input/PlayableTetrimino.mjs";
import Grid from "../util/game/Grid.mjs";
import GridCoordinate from "../util/coordinate/GridCoordinate.mjs";
import AbsoluteCoordinate from "../util/coordinate/AbsoluteCoordinate.mjs";
import OTetrimino from "../entity/tetrimino/OTetrimino.mjs"

export default class Game {

    constructor(GAME_WIDTH, GAME_HEIGHT){
        // Move this elesewhere
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

    draw(ctx){
        this.playableTetrimino.tetrimino.draw(ctx, this.grid);
    }

    update() {
        this.playableTetrimino.move();
        console.log("cuurent move: " +  this.playableTetrimino.direction);
    }
}