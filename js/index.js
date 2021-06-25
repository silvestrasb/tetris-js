import AbsoluteCoordinate from "./util/coordinate/AbsoluteCoordinate.mjs";
import GridCoordinate from "./util/coordinate/GridCoordinate.mjs";
import Grid from "./util/game/Grid.mjs";
import ITetrimino from "./entity/tetrimino/ITetrimino.mjs";

const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

const grid = new Grid(GAME_WIDTH, GAME_HEIGHT, 35, new AbsoluteCoordinate(0, 0));

const iTetrimino = new ITetrimino(new AbsoluteCoordinate(3, 0));

iTetrimino.draw(ctx, grid);

iTetrimino.moveDown();
iTetrimino.moveDown();
iTetrimino.draw(ctx, grid);

iTetrimino.moveDown();
iTetrimino.moveDown();
iTetrimino.moveLeft();
iTetrimino.moveLeft();
iTetrimino.draw(ctx, grid);

iTetrimino.moveDown();
iTetrimino.moveDown();
iTetrimino.moveRight();
iTetrimino.moveRight();
iTetrimino.moveRight();
iTetrimino.moveRight();
iTetrimino.draw(ctx, grid);

iTetrimino.moveDown();
iTetrimino.moveDown();
iTetrimino.moveDown();
iTetrimino.moveDown();
iTetrimino.draw(ctx, grid);