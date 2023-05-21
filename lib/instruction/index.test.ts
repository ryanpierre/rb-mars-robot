import { Instruction } from ".";

describe("Instruction", () => {
  it("initialises with valid input", () => {
    const testFn = jest.fn();
    const instruction = Instruction.create("L", { L: testFn });

    expect(instruction.command).toEqual(testFn);
  });
  it("throws an error if the supplied input is invalid", () => {
    expect(() => Instruction.create("Q")).toThrow("Invalid command");
  });
});
