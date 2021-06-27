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
import TetrisDraw from "./UI/TetrisDraw.mjs";
import BorderBlocks from "./border/BorderBlocks.mjs";


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

const drawing = new TetrisDraw(grid);



const iTetrimino = new ITetrimino(new GridCoordinate(0, 1));
const jTetrimino = new JTetrimino(new GridCoordinate(0, 7));
const lTetrimino = new LTetrimino(new GridCoordinate(0, 11));
const oTetrimino = new OTetrimino(new GridCoordinate(0, 15));
const sTetrimino = new STetrimino(new GridCoordinate(0, 19));
const tTetrimino = new TTetrimino(new GridCoordinate(0, 23));
const zTetrimino = new ZTetrimino(new GridCoordinate(0, 27));

const borderBlocks = new BorderBlocks(grid);



/* NOTE: These functions are temporary, and only for demonstration purposes. */
drawing.drawBlockList(borderBlocks, ctx);

// drawI();
// drawJ();
// drawL();
// drawO();
// drawS();
// drawT();
// drawZ();


function drawI() {
  iTetrimino.moveDown();
  iTetrimino.moveDown();
  drawing.drawBlockList(iTetrimino, ctx);
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.rotate();
  drawing.drawBlockList(iTetrimino, ctx);
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.rotate();
  drawing.drawBlockList(iTetrimino, ctx);
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.moveRight();
  iTetrimino.rotate();
  drawing.drawBlockList(iTetrimino, ctx);
}

function drawJ() {
  drawing.drawBlockList(jTetrimino, ctx);
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.rotate();
  drawing.drawBlockList(jTetrimino, ctx);
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.rotate();
  drawing.drawBlockList(jTetrimino, ctx);
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.moveRight();
  jTetrimino.rotate();
  drawing.drawBlockList(jTetrimino, ctx);
}

function drawL() {
  drawing.drawBlockList(lTetrimino, ctx);
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.rotate();
  drawing.drawBlockList(lTetrimino, ctx);
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.rotate();
  drawing.drawBlockList(lTetrimino, ctx);
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.moveRight();
  lTetrimino.rotate();
  drawing.drawBlockList(lTetrimino, ctx);
}

function drawO() {
  drawing.drawBlockList(oTetrimino, ctx);
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.rotate();
  drawing.drawBlockList(oTetrimino, ctx);
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.rotate();
  drawing.drawBlockList(oTetrimino, ctx);
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.moveRight();
  oTetrimino.rotate();
  drawing.drawBlockList(oTetrimino, ctx);
}

function drawS() {
  drawing.drawBlockList(sTetrimino, ctx);
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.rotate();
  drawing.drawBlockList(sTetrimino, ctx);
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.rotate();
  drawing.drawBlockList(sTetrimino, ctx);
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.moveRight();
  sTetrimino.rotate();
  drawing.drawBlockList(sTetrimino, ctx);
}

function drawT() {
  drawing.drawBlockList(tTetrimino, ctx);
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.rotate();
  drawing.drawBlockList(tTetrimino, ctx);
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.rotate();
  drawing.drawBlockList(tTetrimino, ctx);
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.moveRight();
  tTetrimino.rotate();
  drawing.drawBlockList(tTetrimino, ctx);
}

function drawZ() {
  drawing.drawBlockList(zTetrimino, ctx);
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.rotate();
  drawing.drawBlockList(zTetrimino, ctx);
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.rotate();
  drawing.drawBlockList(zTetrimino, ctx);
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.moveRight();
  zTetrimino.rotate();
  drawing.drawBlockList(zTetrimino, ctx);
}
