const VALID_INSTRUCTIONS = ["L", "R", "F"];

export class Instruction {
  private _command: string;

  private constructor(input: string) {
    this._command = input;
  }

  public get command() {
    return this._command;
  }

  public static create(input: string) {
    if (!VALID_INSTRUCTIONS.includes(input)) {
      throw new Error("Invalid command");
    }

    return new Instruction(input);
  }
}
