import { Interpreter } from ".";
import { Grid } from "../grid";
import { Instruction } from "../instruction";

const SAMPLE_DATA = `5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL`;

jest.mock("../grid");

describe("Interpreter", () => {
  it("takes a boundary string and returns a Grid", () => {
    const grid = Interpreter.parseGrid("5 3");
    expect(Grid).toHaveBeenCalledWith(5, 3);
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
});
