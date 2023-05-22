# Logbook

A collection of initial thoughts on design based upon the problem criteria that will inform my initial approach, as well as the durations of my coding sessions to keep time.

## Design

- A `Robot`
  - Has a `Position` (x, y)
  - Has a `Direction` (N, E, S, W)
  - Can receive an `Instruction` to mutate its state
  - Has a `Grid` 
- An `Instruction`
  - Has an `Command` (L, R, F)
  - Has a mutator function that turns a `Command` into a new state
  - Extensible to include other `Command`s
- A `Grid`
  - Has a `Size` (x, y)
  - Has an array of `Scent`s (x, y)
  - Can check if a `Position` is within its bounds and has a `Scent`
- An `Interpreter`
  - Prompts for input
  - Parses input into system friendly classes
  - Returns output

## Capabilities

### Robot
It should ...
- initialise with a grid
- initialise with an initial position and a grid
- take an instruction and apply its transformation to the robot
- ignore an instruction to move off the world if currently occupying a scented position
- serialize current position into an output string
- set the robot as lost and cease taking any input if position does not exist on grid

### Instruction
It should ...
- initialise with an input command
- throw an error if the input command is not in the instruction table
- translate input to a transformation function using the instruction table

### Grid
It should ...
- initialise with a size 
- initialise with a scent array

### Interpreter
It should ...
- prompt a user for a set of input instructions
- take the first line of input and construct a grid
- separate the remaining lines after the first into an instruction pair
- take the first line of an instruction pair and return a Position
- take the second line of an instruction pair and return an array of Instructions

## Code Sessions Log
- 15m Project Setup
- 90m Code Session (Instruction, Transformer, Grid)
- 30m Code Session (Grid, Robot)