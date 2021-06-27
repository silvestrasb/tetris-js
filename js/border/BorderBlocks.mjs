// TODO: DRAWS GREY BORDER AROUND THE GAME AREA
import TetrisBlock from "../entity/TetrisBlock.mjs";
import Tetrimino from "../entity/tetrimino/Tetrimino.mjs";
import GridCoordinate from "../util/coordinate/GridCoordinate.mjs";
import BlockColorScheme from "../util/color/BlockColorScheme.mjs";

export default class Border {
  constructor(grid) {
    const colorScheme = new BlockColorScheme("#777777", "#d6d6d6", "#535353", "#232323", "#a0a0a0");

    const blocksVertical = Math.floor(grid.height / grid.squareSize);
    const blocksHorizontal = Math.floor(grid.width / grid.squareSize);

    this.blockList = [];
    
    /** Horizontal border block generation. */
    for (let i = 0; i < blocksHorizontal; i++) {
      /** Upper row. */
      this.blockList.push(
        new TetrisBlock(new GridCoordinate(i, 0), colorScheme)
        );
      /** Lower row. */
      this.blockList.push(
        new TetrisBlock(new GridCoordinate(i, blocksVertical - 1), colorScheme)
      );
    }

    /** Vertical border block generation. */
    for (let j = 1; j < blocksVertical - 1; j++) {
      /** Left column. */
      this.blockList.push(
        new TetrisBlock(new GridCoordinate(0, j), colorScheme)
        );
      /** Right column. */
      this.blockList.push(
        new TetrisBlock(new GridCoordinate(blocksHorizontal - 1, j), colorScheme)
      );
    }  
  }
}
