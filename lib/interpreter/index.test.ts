import { Interpreter } from ".";
import { Grid } from "../grid";
import { Robot } from "../robot";
import { Instruction } from "../instruction";

jest.mock("../grid");
jest.mock("../robot");

describe("Interpreter", () => {
  let MockGrid = Grid as jest.MockedClass<typeof Grid>;
  let MockRobot = Robot as jest.MockedClass<typeof Robot>;

  beforeEach(() => {
    MockGrid.mockClear();
    MockRobot.mockClear();
  });

  it("takes a boundary string and returns a Grid", () => {
    const grid = Interpreter.parseGrid("5 3");
    expect(MockGrid).toHaveBeenCalledWith(5, 3);
    expect(grid).toBeInstanceOf(Grid);
  });
  it("takes a position string and returns a Position", () => {
    const position = Interpreter.parsePosition("1 1 E");
    expect(position).toEqual({ x: 1, y: 1, d: 1 });
  });
  it("takes an instruction string and returns an array of Instructions", () => {
    const instructions = Interpreter.parseInstructions("RFRFRFRF");
    expect(instructions).toHaveLength(8);
    instructions.forEach((i) => expect(i).toBeInstanceOf(Instruction));
  });
  it("takes input data and initialises a Grid", () => {
    const session = new Interpreter();

    session.parseInput("5 3\n1 1 E\n");

    expect(MockGrid).toHaveBeenCalledWith(5, 3);
  });
  it("throws an error if there is no input data", () => {
    const session = new Interpreter();

    expect(() => session.parseInput("")).toThrowError("Invalid input data");
  });

  it("returns robot movement input data as positions and instructions", () => {
    const mockInstruction1 = jest.fn();
    const mockInstruction2 = jest.fn();
    Interpreter.parsePosition = jest.fn().mockReturnValue({ x: 2, y: 2, d: 2 });
    Interpreter.parseInstructions = jest
      .fn()
      .mockReturnValue([mockInstruction1, mockInstruction2]);

    const config = Interpreter.createRobotConfig(
      "1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL"
    );

    expect(config).toEqual([
      {
        position: { x: 2, y: 2, d: 2 },
        instructions: [mockInstruction1, mockInstruction2],
      },
      {
        position: { x: 2, y: 2, d: 2 },
        instructions: [mockInstruction1, mockInstruction2],
      },
    ]);
  });

  it("takes an array of robots and reports their status as a single string", () => {
    const session = new Interpreter();
    const testGrid = new MockGrid(10, 10);
    const testRobot1 = new MockRobot({ x: 1, y: 1, d: 1 }, testGrid);
    const testRobot2 = new MockRobot({ x: 1, y: 2, d: 3 }, testGrid);

    testRobot1.printStatus = jest.fn().mockReturnValue("1 1 E");
    testRobot2.printStatus = jest.fn().mockReturnValue("1 2 W");

    const robots = [testRobot1, testRobot2];
    const output = Interpreter.reportRobotPositions(robots);

    expect(output).toEqual("1 1 E\n1 2 W");
  });
});
