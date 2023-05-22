import type { TransformerFunction } from "../transformers";

export interface Position {
  x: number;
  y: number;
  d: number;
}

type InstructionTable = Record<string, TransformerFunction>;

const DEFAULT_INSTRUCTION_TABLE: InstructionTable = {
  L: (p: Position) => p,
  R: (p: Position) => p,
  F: (p: Position) => p,
};

export class Instruction {
  private _command: TransformerFunction;

  private constructor(command: TransformerFunction) {
    this._command = command;
  }

  public get command() {
    return this._command;
  }

  public apply(p: Position) {
    return this.command(p);
  }

  public static create(
    input: string,
    instructionSet: InstructionTable = DEFAULT_INSTRUCTION_TABLE
  ) {
    if (!Object.keys(instructionSet).includes(input)) {
      throw new Error("Invalid command");
    }

    return new Instruction(instructionSet[input]);
  }
}
