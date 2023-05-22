import { Direction, Grid, Position } from "../grid";
import { Instruction } from "../instruction";

export const DEFAULT_DIRECTION_MAP: Record<Direction, string> = {
  0: "N",
  1: "E",
  2: "S",
  3: "W",
};

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

  public get status() {
    const { x, y, d } = this._position;
    return `${x} ${y} ${DEFAULT_DIRECTION_MAP[d]}`;
  }

  public action(i: Instruction) {
    if (this._isLost === true) {
      return;
    } else {
      const proposedPosition = i.command(this.position);
      const { x, y } = proposedPosition;

      if (this.grid.validate(x, y)) {
        this._position = proposedPosition;

        if (!this._grid.isWithinBoundaries(x, y)) {
          this._isLost = true;
        }
      }
    }
  }
}
