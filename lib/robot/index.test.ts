import { Robot } from ".";
import { Grid } from "../grid";

jest.mock("../grid");

describe("Robot", () => {
  it("initialises with a position and grid", () => {
    const MockGrid = Grid as jest.MockedClass<typeof Grid>;
    const testGrid = new MockGrid(10, 10);
    const robot = new Robot({ x: 0, y: 0, d: 0 }, testGrid);

    expect(robot.position).toEqual({ x: 0, y: 0, d: 0 });
    expect(robot.grid).toEqual(testGrid);
  });
});
