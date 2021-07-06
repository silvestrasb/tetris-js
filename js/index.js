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
import TetrisGrid from "./util/game/TetrisGrid.mjs";

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
const tetrisGrid = new TetrisGrid(
  GAME_WIDTH,
  GAME_HEIGHT,
  21.875,
  new AbsoluteCoordinate(0, 0)
);

const drawElements = new TetrisDraw(tetrisGrid);
const drawBorder = new TetrisDraw(grid);

const iTetrimino = new ITetrimino(new GridCoordinate(0, 1));
const jTetrimino = new JTetrimino(new GridCoordinate(0, 7));
const lTetrimino = new LTetrimino(new GridCoordinate(0, 11));
const oTetrimino = new OTetrimino(new GridCoordinate(0, 15));
const sTetrimino = new STetrimino(new GridCoordinate(0, 19));
const tTetrimino = new TTetrimino(new GridCoordinate(0, 23));
const zTetrimino = new ZTetrimino(new GridCoordinate(0, 27));
const borderBlocks = new BorderBlocks(grid);

drawBorder.drawBlockList(borderBlocks, ctx);

/*
function gameLoop() {
  ctx.clearRect(
    tetrisGrid.absoluteCoordinate.x - 1,
    tetrisGrid.absoluteCoordinate.y - 1,
    tetrisGrid.width + 1,
    tetrisGrid.height + 1
  );
  console.log(!borderCollision.hitBorder(iTetrimino));
  if (!borderCollision.hitBorder(iTetrimino)){
    drawElements.drawBlockList(iTetrimino, ctx);
  }
}
setInterval(gameLoop, 100);
*/