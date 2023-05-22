import { Grid } from "../grid";
import { Instruction } from "../instruction";
import { getDirection } from "../position";
import { Robot } from "../robot";

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
    const [x, y, d] = positionString.trim().split(spaceDelimiter);
    const direction = getDirection(d);

    return { x: parseInt(x, 10), y: parseInt(y, 10), d: direction };
  }

  public static parseInstructions(instructionsString: string) {
    return instructionsString
      .trim()
      .split("")
      .map((i) => Instruction.create(i));
  }

  public static reportRobotPositions(robots: Robot[]) {
    return robots
      .map((r) => {
        return r.printStatus();
      })
      .join("\n");
  }

  public static createRobotConfig(
    robotString: string,
    positionInstructionsDelimiter: string = "\n",
    newRobotDelimiter: string = "\n\n"
  ) {
    const robotsRaw = robotString.split(newRobotDelimiter);

    return robotsRaw.map((r) => {
      const [position, instructions] = r.split(positionInstructionsDelimiter);

      return {
        position: Interpreter.parsePosition(position),
        instructions: Interpreter.parseInstructions(instructions),
      };
    });
  }

  public parseInput(inputString: string, lineDelimiter: string = "\n") {
    const lines = inputString.split(lineDelimiter);
    const firstLine = lines.reverse().pop();
    const remaining = lines.reverse().join("\n");

    if (!firstLine) {
      throw new Error("Invalid input data");
    }

    const grid = Interpreter.parseGrid(firstLine);
    const robotConfig = Interpreter.createRobotConfig(remaining);

    return robotConfig.map((r) => {
      const { position: initialPosition, instructions } = r;
      const robot = new Robot(initialPosition, grid);

      instructions.forEach((i) => robot.action(i));

      return robot;
    });
  }
}
