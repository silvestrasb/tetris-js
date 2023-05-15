import Game from "./game/Game.mjs";

const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

const game = new Game(GAME_WIDTH, GAME_HEIGHT);

function gameLoop() {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.draw(ctx);
  game.update();
  window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop); 