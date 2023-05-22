import { Grid, Position } from "../grid";
import { Instruction } from "../instruction";

export class Robot {
  private _position: Position;
  private _grid: Grid;
  private _isLost: boolean;

  constructor(position: Position, grid: Grid, isLost: boolean = false) {
    this._position = position;
    this._grid = grid;
    this._isLost = isLost;
  }

  public get position() {
    return this._position;
  }

  public get grid() {
    return this._grid;
  }

  public get isLost() {
    return this._isLost;
  }

  public action(i: Instruction) {
    const proposedPosition = i.command(this.position);
    const { x, y } = proposedPosition;

    this._position = this.grid.validate(x, y)
      ? proposedPosition
      : this._position;

    if (!this.grid.isWithinBoundaries(x, y)) {
      this._isLost = true;
    }
  }
}
