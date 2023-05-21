export class Instruction {
  private _command: string;

  constructor(input: string) {
    this._command = input;
  }

  public get command() {
    return this._command;
  }
}