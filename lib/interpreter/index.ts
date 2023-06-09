import { Grid } from "../grid";
import { Instruction } from "../instruction";
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

  public static parseInstructions(instructionsString: string) {
    return instructionsString.split("").map((i) => Instruction.create(i));
  }

  public parseInput(inputString: string, lineDelimiter: string = "\n") {
    const lines = inputString.split(lineDelimiter);
    const currentLine = lines.reverse().pop();
    const remaining = lines.reverse();

    if (!currentLine) {
      throw new Error("Invalid input data");
    }

    const grid = Interpreter.parseGrid(currentLine);
  }
}
