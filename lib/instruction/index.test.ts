import { Instruction } from ".";
import { Position } from "../grid";

describe("Instruction", () => {
  it("initialises with valid input", () => {
    const testFn = jest.fn();
    const instruction = Instruction.create("L", { L: testFn });

    expect(instruction.command).toEqual(testFn);
  });
  it("throws an error if the supplied input is invalid", () => {
    expect(() => Instruction.create("Q")).toThrow("Invalid command");
  });
  it("applies the instruction to a given position and returns the new position", () => {
    const testFn = jest
      .fn()
      .mockImplementation((p: Position) => ({ ...p, x: p.x + 1 }));
    const instruction = Instruction.create("F", { F: testFn });

    expect(instruction.apply({ x: 0, y: 0, d: 0 })).toEqual({
      x: 1,
      y: 0,
      d: 0,
    });
  });
});
