import { Interpreter } from ".";
import { Grid } from "../grid";
import { Instruction } from "../instruction";

const SAMPLE_DATA = `5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL`;

jest.mock("../grid");

describe("Interpreter", () => {
  let MockGrid = Grid as jest.MockedClass<typeof Grid>;

  beforeEach(() => {
    MockGrid.mockClear();
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

    session.parseInput(SAMPLE_DATA);

    expect(MockGrid).toHaveBeenCalledWith(5, 3);
  });
  it("throws an error if there is no input data", () => {
    const session = new Interpreter();

    expect(() => session.parseInput("")).toThrowError("Invalid input data");
  });
});
