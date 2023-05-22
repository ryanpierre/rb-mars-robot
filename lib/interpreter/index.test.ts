import { Interpreter } from ".";
import { Grid } from "../grid";

const SAMPLE_DATA = `5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL`;

jest.mock("../grid");

describe("Interpreter", () => {
  it("takes the first line of input and returns a grid", () => {
    const grid = Interpreter.parseGrid("5 3");
    expect(Grid).toHaveBeenCalledWith(5, 3);
    expect(grid).toBeInstanceOf(Grid);
  });
});
