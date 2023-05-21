import { Instruction } from ".";

describe("Instruction", () => {
  it("initialises with valid input", () => {
    const instruction = Instruction.create("L");

    expect(instruction.command).toEqual("L");
  });
  it("throws an error if the supplied input is invalid", () => {
    expect(() => Instruction.create("Q")).toThrow("Invalid command");
  });
});
