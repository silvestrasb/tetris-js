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

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

function keyDownHandler(event) {
  if (event.keyCode === 39) {
    rightPressed = true;
  } else if (event.keyCode === 37) {
    leftPressed = true;
  }
  if (event.keyCode === 40) {
    downPressed = true;
  } else if (event.keyCode === 38) {
    upPressed = true;
  }
}

function keyUpHandler(event) {
  if (event.keyCode === 39) {
    rightPressed = false;
  } else if (event.keyCode === 37) {
    leftPressed = false;
  }
  if (event.keyCode === 40) {
    downPressed = false;
  } else if (event.keyCode === 38) {
    upPressed = false;
  }
}
function falsifyAllMovementVariables(){
  rightPressed = false;
  leftPressed = false;
  upPressed = false;
  downPressed = false;
}

function gameLoop() {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  if (rightPressed) {
    _oTetrimino.moveRight();
  } else if (leftPressed) {
    _oTetrimino.moveLeft();
  } 
  if (downPressed) {
    _oTetrimino.moveDown();
  } else if (upPressed) {
    _oTetrimino.moveUp();
  }
  falsifyAllMovementVariables();
  _oTetrimino.draw(ctx, grid);
  window.requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

window.requestAnimationFrame(gameLoop);