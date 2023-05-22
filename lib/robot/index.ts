import { Grid, Position } from "../grid";

export class Robot {
  private _position: Position;
  private _grid: Grid;

  constructor(position: Position, grid: Grid) {
    this._position = position;
    this._grid = grid;
  }

  public get position() {
    return this._position;
  }

  public get grid() {
    return this._grid;
  }
}
