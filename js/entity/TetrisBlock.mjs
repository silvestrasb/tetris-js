import Block from "./Block.mjs";

export default class TetrisBlock extends Block{
  /** Variable "#aspectRatio" should be private static, but js doesn't have a feature
   * where object's methods could access static variables,
   * only static methods (functions) static variables.
   * To clarify, aspect ration is the ratio between the border and the center block.
   */
  #aspectRatio = 3 / 20;

  constructor(coordinate, colorScheme) {
    super(coordinate, colorScheme);
    }

  /** Draws the border (4 triangles) of the tetris block. */
  _drawBorders(ctx, grid) {
    const middle = grid.toAbsolute(this.coordinate);
    const absoluteCoordinate = grid.toAbsolute(this.coordinate);

    middle.x += grid.squareSize / 2;
    middle.y += grid.squareSize / 2;

    /** Draws the top triangle. */
    ctx.beginPath();
    ctx.moveTo(middle.x, middle.y);
    ctx.fillStyle = this.colorScheme.top;

    ctx.lineTo(absoluteCoordinate.x, absoluteCoordinate.y);
    ctx.lineTo(absoluteCoordinate.x + grid.squareSize, absoluteCoordinate.y);
    ctx.fill();
    ctx.closePath();

    /** Draws the right triangle. */
    ctx.beginPath();
    ctx.moveTo(middle.x, middle.y);
    ctx.fillStyle = this.colorScheme.right;

    ctx.lineTo(absoluteCoordinate.x + grid.squareSize, absoluteCoordinate.y);
    ctx.lineTo(
      absoluteCoordinate.x + grid.squareSize,
      absoluteCoordinate.y + grid.squareSize
    );
    ctx.fill();
    ctx.closePath();

    /** Draws the bottom triangle. */
    ctx.beginPath();
    ctx.moveTo(middle.x, middle.y);
    ctx.fillStyle = this.colorScheme.bottom;
    ctx.lineTo(absoluteCoordinate.x, absoluteCoordinate.y + grid.squareSize);
    ctx.lineTo(
      absoluteCoordinate.x + grid.squareSize,
      absoluteCoordinate.y + grid.squareSize
    );
    ctx.fill();
    ctx.closePath();

    /** Draws the left triangle. */
    ctx.beginPath();
    ctx.moveTo(middle.x, middle.y);
    ctx.fillStyle = this.colorScheme.left;
    ctx.lineTo(absoluteCoordinate.x, absoluteCoordinate.y);
    ctx.lineTo(absoluteCoordinate.x, absoluteCoordinate.y + grid.squareSize);
    ctx.fill();
    ctx.closePath();
  }

  /** Draws the center of the tetris block. */
  _drawCenter(ctx, grid) {
    const absoluteCoordinate = grid.toAbsolute(this.coordinate);
    const borderSize = this.#aspectRatio * grid.squareSize;
    ctx.beginPath();
    ctx.fillStyle = this.colorScheme.center;
    ctx.fillRect(
      absoluteCoordinate.x + borderSize,
      absoluteCoordinate.y + borderSize,
      grid.squareSize - borderSize * 2,
      grid.squareSize - borderSize * 2
    );
    ctx.fill();
    ctx.closePath();
  }

  draw(ctx, grid) {
    this._drawBorders(ctx, grid);
    this._drawCenter(ctx, grid);
  }
}
