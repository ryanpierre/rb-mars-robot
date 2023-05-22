export enum Direction {
  N = 0,
  E = 1,
  S = 2,
  W = 3,
}

export interface Position {
  x: number;
  y: number;
  d: Direction;
}

export class Grid {
  private _xMax: number;
  private _yMax: number;
  private _scents: Position[];

  constructor(xMax: number, yMax: number, scents: Position[] = []) {
    this._xMax = xMax;
    this._yMax = yMax;
    this._scents = scents;
  }

  public get boundaries() {
    return { xMin: 0, xMax: this._xMax, yMin: 0, yMax: this._yMax };
  }

  public get scents() {
    return this._scents;
  }

  public addScent(p: Position) {
    if (
      !this.scents.some(
        (scent) => scent.x === p.x && scent.y === p.y && scent.d === p.d
      )
    ) {
      this._scents.push(p);
    }
  }

  private isAdjacentToScent(scent: Position, x: number, y: number) {
    const availableOffsets = [
      { x: scent.x, y: scent.y + 1 },
      { x: scent.x + 1, y: scent.y },
      { x: scent.x, y: scent.y - 1 },
      { x: scent.x - 1, y: scent.y },
    ];

    return availableOffsets.some((s) => s.x === x && s.y === y);
  }

  public isWithinBoundaries(x: number, y: number) {
    const { xMin, xMax, yMin, yMax } = this.boundaries;

    return x >= xMin && x <= xMax && y >= yMin && y <= yMax;
  }

  public validate(x: number, y: number) {
    if (this.isWithinBoundaries(x, y)) {
      return true;
    }

    return !this.scents.some((scent) => this.isAdjacentToScent(scent, x, y));
  }
}
