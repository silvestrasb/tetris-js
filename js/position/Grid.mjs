export default class Grid {
  constructor(width, height, size, position) {
    this.rows = width / size;
    this.columns = height / size;
    this.width = width;
    this.height = height;
    this.size = size;
    this.position = position;
  }
}
