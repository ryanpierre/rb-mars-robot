type Scent = { x: number; y: number };

export class Grid {
  private _xMax: number;
  private _yMax: number;
  private _scents: Scent[];

  constructor(xMax: number, yMax: number, scents: Scent[] = []) {
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
}
