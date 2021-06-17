export default class Grid {
  constructor(width, height, size, position) {
    this.rows = width / size;
    this.collums = height / size;
    this.width = width;
    this.height = height;
    this.size = size;
    this.position = position;
  }
}
