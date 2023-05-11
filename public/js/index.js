import AbsoluteCoordinate from "./util/coordinate/AbsoluteCoordinate.mjs";
import GridCoordinate from "./util/coordinate/GridCoordinate.mjs";
import Grid from "./util/game/Grid.mjs";
import OTetrimino from "./entity/tetrimino/OTetrimino.mjs";

const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

const grid = new Grid(
  GAME_WIDTH,
  GAME_HEIGHT,
  21.875,
  new AbsoluteCoordinate(0, 0)
);

const _oTetrimino = new OTetrimino(new GridCoordinate(7, 3));

function gameLoop() {
  console.log("- Clearing")
  // ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  console.log("- Drawing")
  _oTetrimino.draw(ctx, grid);
  window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);