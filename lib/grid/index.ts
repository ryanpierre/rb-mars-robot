export class Grid {
  private _xMax: number;
  private _yMax: number;

  constructor(xMax: number, yMax: number) {
    this._xMax = xMax;
    this._yMax = yMax;
  }

  public get boundaries() {
    return { xMin: 0, xMax: this._xMax, yMin: 0, yMax: this._yMax };
  }
}
