import { Robot } from ".";

import { Grid, Position } from "../grid";

jest.mock("../grid");

describe("Robot", () => {
  let MockGrid = Grid as jest.MockedClass<typeof Grid>;

  beforeEach(() => {
    MockGrid.mockClear();
  });

  it("initialises with a position and grid", () => {
    const testGrid = new MockGrid(10, 10);
    const robot = new Robot({ x: 0, y: 0, d: 0 }, testGrid);

    expect(robot.position).toEqual({ x: 0, y: 0, d: 0 });
    expect(robot.grid).toEqual(testGrid);
  });
  it("should apply a valid instruction", () => {
    const testGrid = new MockGrid(10, 10);
    const testTransformer = jest.fn(() => ({ x: 0, y: 1, d: 0 }));
    const testInstruction = jest
      .fn()
      .mockReturnValue({ command: testTransformer });
    const robot = new Robot({ x: 0, y: 0, d: 0 }, testGrid);

    testGrid.validate = jest.fn().mockReturnValue(true);

    robot.action(testInstruction());

    expect(testTransformer).toHaveBeenCalledWith({ x: 0, y: 0, d: 0 });
    expect(robot.position).toEqual({ x: 0, y: 1, d: 0 });
  });

  it("ignore an instruction to move off the world if currently occupying a scented position", () => {
    const testGrid = new MockGrid(10, 10);
    const testTransformer = jest.fn(() => ({ x: 0, y: 1, d: 0 }));
    const testInstruction = jest
      .fn()
      .mockReturnValue({ command: testTransformer });
    const robot = new Robot({ x: 0, y: 0, d: 0 }, testGrid);

    testGrid.validate = jest.fn().mockReturnValue(false);

    robot.action(testInstruction());

    expect(testTransformer).toHaveBeenCalledWith({ x: 0, y: 0, d: 0 });
    expect(robot.position).toEqual({ x: 0, y: 0, d: 0 });
  });

  it("sets the lost state to true when a robot moves off the map", () => {
    const testGrid = new MockGrid(10, 10);
    const testTransformer = jest.fn(() => ({ x: 11, y: 10, d: 0 }));
    const testInstruction = jest
      .fn()
      .mockReturnValue({ command: testTransformer });
    const robot = new Robot({ x: 0, y: 0, d: 0 }, testGrid);

    testGrid.isWithinBoundaries = jest.fn().mockReturnValue(false);
    testGrid.validate = jest.fn().mockReturnValue(true);

    robot.action(testInstruction());

    expect(testTransformer).toHaveBeenCalledWith({ x: 0, y: 0, d: 0 });
    expect(robot.position).toEqual({ x: 11, y: 10, d: 0 });
    expect(robot.isLost).toEqual(true);
  });

  it("prevents further instructions from being executes when lost", () => {
    const testGrid = new MockGrid(10, 10);
    const testTransformer = jest.fn(() => ({ x: 11, y: 10, d: 0 }));
    const testInstruction = jest
      .fn()
      .mockReturnValue({ command: testTransformer });
    const robot = new Robot({ x: 0, y: 0, d: 0 }, testGrid, true);

    robot.action(testInstruction());

    expect(testTransformer).not.toHaveBeenCalled();
    expect(robot.position).toEqual({ x: 0, y: 0, d: 0 });
  });
});
