/* Class responsible from drawing on a camvas. */
export default class TetrisDraw {
  constructor(grid) {
    this.grid = grid;
  }
  
  /** Draws a colored triangle from three points. */
  _drawBorderCenterTriangle(point1, point2, point3, ctx, color) {
    ctx.beginPath();
    ctx.moveTo(point3.x, point3.y);
    ctx.fillStyle = color;
    ctx.lineTo(point1.x, point1.y);
    ctx.lineTo(point2.x, point2.y);
    ctx.fill();
    ctx.closePath();
  }

  /** Draws the border (4 triangles) of a TetrisBlock. */
  _drawTetrisBlockBorder(block, ctx) {        
    const absoluteCoordinate = this.grid.toAbsolute(block.coordinate);

    const middle = this.grid.toAbsolute(block.coordinate);
    middle.x += this.grid.squareSize / 2;
    middle.y += this.grid.squareSize / 2;

    const point1 = this.grid.toAbsolute(block.coordinate);
    const point2 = this.grid.toAbsolute(block.coordinate);

    /** Resets point1 and point2 to their initial state. */
    function _resetCoordinates(){
      point1.x = absoluteCoordinate.x;
      point1.y = absoluteCoordinate.y;
      point2.x = absoluteCoordinate.x;
      point2.y = absoluteCoordinate.y;
    }
  
    point2.x += this.grid.squareSize;
    this._drawBorderCenterTriangle(point1, point2, middle, ctx, block.colorScheme.top);

    _resetCoordinates();
    point1.x += this.grid.squareSize;
    point2.x += this.grid.squareSize;
    point2.y += this.grid.squareSize;
    this._drawBorderCenterTriangle(point1, point2, middle, ctx, block.colorScheme.right);

    _resetCoordinates();
    point1.y += this.grid.squareSize;
    point2.x += this.grid.squareSize;
    point2.y += this.grid.squareSize;    
    this._drawBorderCenterTriangle(point1, point2, middle, ctx, block.colorScheme.bottom);    

    _resetCoordinates(); 
    point2.y += this.grid.squareSize;    
    this._drawBorderCenterTriangle(point1, point2, middle, ctx, block.colorScheme.left);    
  }

  /** Draws the center of a TetrisBlock. */
  _drawTetrisCenter(block, ctx) {
    const absoluteCoordinate = this.grid.toAbsolute(block.coordinate);
    const borderSize = block.aspectRatio * this.grid.squareSize;
    ctx.beginPath();
    ctx.fillStyle = block.colorScheme.center;
    ctx.fillRect(
      absoluteCoordinate.x + borderSize,
      absoluteCoordinate.y + borderSize,
      this.grid.squareSize - borderSize * 2,
      this.grid.squareSize - borderSize * 2
    );
    ctx.fill();
    ctx.closePath();
  }

  /** Draws TetrisBlock. */
  drawTetrisBlock(block, ctx) {
    this._drawTetrisBlockBorder(block, ctx);
    this._drawTetrisCenter(block, ctx);
  }

  /** Draws a list of TetrisBlocks. */
  /**
   * 
   * @param tetrisObject - provided object must have "blockList" as a field/property. 
   * @param ctx 
   */
  drawBlockList(tetrisObject, ctx) {
    tetrisObject.blockList.forEach((block) => {
      this.drawTetrisBlock(block, ctx);
    });
  }
}
