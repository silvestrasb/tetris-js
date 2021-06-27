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
  35,
  new AbsoluteCoordinate(0, 0)
);

const iTetrimino = new ITetrimino(new GridCoordinate(3, 1));
const jTetrimino = new JTetrimino(new GridCoordinate(3, 1));
const lTetrimino = new LTetrimino(new GridCoordinate(3, 1));
const oTetrimino = new OTetrimino(new GridCoordinate(3, 1));
const sTetrimino = new STetrimino(new GridCoordinate(3, 1));
const tTetrimino = new TTetrimino(new GridCoordinate(3, 1));
const zTetrimino = new ZTetrimino(new GridCoordinate(3, 1));

iTetrimino.moveLeft();
iTetrimino.draw(ctx, grid);

jTetrimino.moveDown();
jTetrimino.moveDown();
jTetrimino.moveLeft();
jTetrimino.moveLeft();
jTetrimino.draw(ctx, grid);

lTetrimino.moveDown();
lTetrimino.moveDown();
lTetrimino.moveDown();
lTetrimino.moveDown();
lTetrimino.moveDown();
lTetrimino.moveDown();
lTetrimino.moveRight();
lTetrimino.moveRight();
lTetrimino.moveRight();
lTetrimino.draw(ctx, grid);

oTetrimino.moveRight();
oTetrimino.moveRight();
oTetrimino.moveDown();
oTetrimino.moveDown();
oTetrimino.moveDown();
oTetrimino.moveDown();
oTetrimino.draw(ctx, grid);

sTetrimino.moveDown();
sTetrimino.moveDown();
sTetrimino.moveDown();
sTetrimino.moveDown();
sTetrimino.moveDown();
sTetrimino.moveLeft();
sTetrimino.moveLeft();
sTetrimino.draw(ctx, grid);

tTetrimino.moveRight();
tTetrimino.moveRight();
tTetrimino.moveRight();
tTetrimino.moveDown();
tTetrimino.draw(ctx, grid);

zTetrimino.moveDown();
zTetrimino.moveDown();
zTetrimino.moveDown();
zTetrimino.moveDown();
zTetrimino.moveDown();
zTetrimino.moveDown();
zTetrimino.moveDown();
zTetrimino.moveDown();
zTetrimino.draw(ctx, grid);
