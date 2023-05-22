import { Grid, Position } from "../grid";
import { Instruction } from "../instruction";

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

  public action(i: Instruction) {
    const proposedPosition = i.command(this.position);

    this._position = this.grid.validate(proposedPosition.x, proposedPosition.y)
      ? proposedPosition
      : this._position;
  }
}
