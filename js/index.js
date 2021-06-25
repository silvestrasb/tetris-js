import AbsoluteCoordinate from "./util/coordinate/AbsoluteCoordinate.mjs";
import GridCoordinate from "./util/coordinate/GridCoordinate.mjs";
import Grid from "./util/game/Grid.mjs";
import BlockColorScheme from "./util/color/BlockColorScheme.mjs";
import TetrisBlock from "./entity/TetrisBlock.mjs";

const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

const grid = new Grid(GAME_WIDTH, GAME_HEIGHT, 350, new AbsoluteCoordinate(0, 0));

const colorScheme1 = new BlockColorScheme("#0000aa", "#b3b3e6", "#000077", "#000033", "#4d4dc4");
const colorScheme2 = new BlockColorScheme("#ff7700", "#ffd6b3", "#b25300", "#4c2300", "#ffa04d");
const tetrisBlockTest1 = new TetrisBlock(new GridCoordinate(0, 0), colorScheme1);
const tetrisBlockTest2 = new TetrisBlock(new GridCoordinate(0, 1), colorScheme2);

tetrisBlockTest1.draw(ctx, grid);
tetrisBlockTest2.draw(ctx, grid);

