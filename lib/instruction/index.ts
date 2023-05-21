type InstructionSet = Record<string, () => void>;
const DEFAULT_INSTRUCTION_SET: InstructionSet = {
  L: () => {},
  R: () => {},
  F: () => {},
};

export class Instruction {
  private _command: () => void;

  private constructor(command: () => void) {
    this._command = command;
  }

  public get command() {
    return this._command;
  }

  public static create(
    input: string,
    instructionSet: InstructionSet = DEFAULT_INSTRUCTION_SET
  ) {
    if (!Object.keys(instructionSet).includes(input)) {
      throw new Error("Invalid command");
    }

    return new Instruction(instructionSet[input]);
  }
}
