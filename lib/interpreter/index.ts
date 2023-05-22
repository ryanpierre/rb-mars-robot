import { Grid } from "../grid";
import { getDirection } from "../position";

export class Interpreter {
  public static parseGrid(gridString: string, spaceDelimiter: string = " ") {
    const [xMax, yMax] = gridString
      .split(spaceDelimiter)
      .map((c) => parseInt(c, 10));
    return new Grid(xMax, yMax);
  }

  public static parsePosition(
    positionString: string,
    spaceDelimiter: string = " "
  ) {
    const [x, y, d] = positionString.split(spaceDelimiter);
    const direction = getDirection(d);

    return { x: parseInt(x, 10), y: parseInt(y, 10), d: direction };
  }
}
