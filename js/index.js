import AbsoluteCoordinate from "./util/coordinate/AbsoluteCoordinate.mjs";
import GridCoordinate from "./util/coordinate/GridCoordinate.mjs";
import Grid from "./util/game/Grid.mjs";
import ITetrimino from "./entity/tetrimino/ITetrimino.mjs";
import JTetrimino from "./entity/tetrimino/JTetrimino.mjs";
import LTetrimino from "./entity/tetrimino/LTetrimino.mjs";
import OTetrimino from "./entity/tetrimino/OTetrimino.mjs";
import STetrimino from "./entity/tetrimino/STetrimino.mjs";
import TTetrimino from "./entity/tetrimino/TTetrimino.mjs";
import ZTetrimino from "./entity/tetrimino/ZTetrimino.mjs";

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

const iTetrimino = new ITetrimino(new GridCoordinate(0, 1));
const jTetrimino = new JTetrimino(new GridCoordinate(0, 7));
const lTetrimino = new LTetrimino(new GridCoordinate(0, 11));
const oTetrimino = new OTetrimino(new GridCoordinate(0, 15));
const sTetrimino = new STetrimino(new GridCoordinate(0, 19));
const tTetrimino = new TTetrimino(new GridCoordinate(0, 23));
const zTetrimino = new ZTetrimino(new GridCoordinate(0, 27));

/* NOTE: These functions are temporary, and only for demonstration purposes. */

drawI();
drawj();
drawL();
drawO();
drawS();
drawT();
drawZ();


function drawI() {
  iTetrimino.moveDown();
  iTetrimino.moveDown();
  iTetrimino.draw(ctx, grid);
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.rotate();
  iTetrimino.draw(ctx, grid);
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.rotate();
  iTetrimino.draw(ctx, grid);
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.rotate();
  iTetrimino.draw(ctx, grid);
}

function drawj() {
  jTetrimino.draw(ctx, grid);
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.rotate();
  jTetrimino.draw(ctx, grid);
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.rotate();
  jTetrimino.draw(ctx, grid);
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.rotate();
  jTetrimino.draw(ctx, grid);
}

function drawL() {
  lTetrimino.draw(ctx, grid);
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.rotate();
  lTetrimino.draw(ctx, grid);
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.rotate();
  lTetrimino.draw(ctx, grid);
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.rotate();
  lTetrimino.draw(ctx, grid);
}

function drawO() {
  oTetrimino.draw(ctx, grid);
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.rotate();
  oTetrimino.draw(ctx, grid);
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.rotate();
  oTetrimino.draw(ctx, grid);
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.rotate();
  oTetrimino.draw(ctx, grid);
}

function drawS() {
  sTetrimino.draw(ctx, grid);
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.rotate();
  sTetrimino.draw(ctx, grid);
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.rotate();
  sTetrimino.draw(ctx, grid);
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.rotate();
  sTetrimino.draw(ctx, grid);
}

function drawT() {
  tTetrimino.draw(ctx, grid);
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.rotate();
  tTetrimino.draw(ctx, grid);
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.rotate();
  tTetrimino.draw(ctx, grid);
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.rotate();
  tTetrimino.draw(ctx, grid);
}

function drawZ() {
  zTetrimino.draw(ctx, grid);
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.rotate();
  zTetrimino.draw(ctx, grid);
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.rotate();
  zTetrimino.draw(ctx, grid);
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.rotate();
  zTetrimino.draw(ctx, grid);
}
