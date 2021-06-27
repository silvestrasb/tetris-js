import Block from "./Block.mjs";

export default class TetrisBlock extends Block {
  /** Variable "#aspectRatio" should be private static, but js doesn't have a feature
   * where object's methods could access static variables,
   * only static methods (functions) static variables.
   * To clarify, aspect ration is the ratio between the border and the center block.
   */
  aspectRatio = 3 / 20;

  constructor(coordinate, colorScheme) {
    super(coordinate, colorScheme);
  }

  /**
   *
   * @param axis axis on which the block will be rotated
   * @param rotaionAngle degree of rotation
   * @param boolCoordinateSystem true if coordinate, false or empty if block.
   * {
   * If its block system - then the block will be rotated on a "block" system,
   * if its coordinate system - the the block will be rotated on a "coordinate" system.
   * Default is false (block system).
   * If this sounds confusing, take a look: https://tetris.fandom.com/wiki/SRS
   * }
   */
  rotate(axis, boolCoordinateSystem = false, rotaionAngle = Math.PI / 2) {
    const xDiff = this.coordinate.x - axis.x;
    const yDiff = this.coordinate.y - axis.y;
    const rotationPreference = boolCoordinateSystem ? -1 : 0;
    this.coordinate.x =
      Math.round(
        Math.cos(rotaionAngle) * xDiff - Math.sin(rotaionAngle) * yDiff
      ) +
      axis.x +
      rotationPreference;

    this.coordinate.y =
      Math.round(
        Math.sin(rotaionAngle) * xDiff + Math.cos(rotaionAngle) * yDiff
      ) + axis.y;
  }
}
