import { Grid } from "../grid";

export class Interpreter {
  public static parseGrid(gridString: string, spaceDelimiter: string = " ") {
    const [xMax, yMax] = gridString
      .split(spaceDelimiter)
      .map((c) => parseInt(c, 10));
    return new Grid(xMax, yMax);
  }
}
