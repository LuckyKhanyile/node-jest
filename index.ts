// run `node index.js` in the terminal
import { mock, instance, when } from 'ts-mockito';
import { Substitute, Arg } from '@fluffy-spoon/substitute';

export interface ISource {
  ReadChar(): string;
  ReadChars(count: number): string;
}

export interface IDestination {
  WriteChar(c: string): void;
  WriteChars(c: string): void;
}

export class Copier {
  src: ISource;
  dest: IDestination;

  constructor(source: ISource, destination: IDestination) {
    this.src = source;
    this.dest = destination;
  }

  copy() {
    let inputChar: string = '';
    inputChar = this.src.ReadChar();
    while (inputChar != '/n') {
      this.dest.WriteChar(inputChar);
      inputChar = this.src.ReadChar();
    }
  }

  Copy(count: number) {
    let inputChar: string = '';
    inputChar = this.src.ReadChars(count);
    while (inputChar != '/n') {
      this.dest.WriteChar(inputChar);
      inputChar = this.src.ReadChar();
    }
  }
}

let _source: ISource = Substitute.for<ISource>();
console.log(`Starting to use the Copier`);

class Tests {
  private source: ISource;
  private destination: IDestination;
  private service: Copier;

  constructor() {
    this.source = Substitute.for<ISource>();
    this.destination = Substitute.for<IDestination>();
    this.service = new Copier(this.source, this.destination);
  }
}

interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  divide(a: number, b: number): number;

  isEnabled: boolean;
}

// Create:
const calculator = Substitute.for<Calculator>();

// Set a return value:
//test("truthy operators", () => {calculator.add(1, 2).returns(3));
