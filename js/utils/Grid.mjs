// TODO: MOVE THIS CLASS TO DIFFERENT DIRECTORY

export default class Grid {
  constructor(width, height, size, absoluteCoordinate) {
    this.rows = width / size;
    this.columns = height / size;
    this.width = width;
    this.height = height;
    this.size = size;
    this.absoluteCoordinate = absoluteCoordinate;
  }
}
