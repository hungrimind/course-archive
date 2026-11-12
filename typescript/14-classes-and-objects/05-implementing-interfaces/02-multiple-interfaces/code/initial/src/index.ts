export interface Sizeable {
  getSize(): number;
}

export interface Describable {
  describe(): string;
}

export class Box implements Sizeable, Describable {
  constructor(public width: number, public height: number) {}

  getSize(): number {
  }

  describe(): string {
  }
}
