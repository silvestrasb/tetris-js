import Block from "./Block.mjs";

export default class GridBlock extends Block {
  constructor(color, size, gridPosition) {
    super(color, size, gridPosition);
  }

  /**
   * @param grid : Grid on which the block will be drawn.
   */
  draw(ctx, grid) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.position.column * grid.size + grid.position.x,
      this.position.row * grid.size + grid.position.y,
      this.size,
      this.size
    );
    ctx.fill();
    ctx.closePath();
  }
}
