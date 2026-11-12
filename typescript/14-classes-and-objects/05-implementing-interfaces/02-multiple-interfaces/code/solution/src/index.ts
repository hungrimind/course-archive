export interface Sizeable {
  getSize(): number;
}

export interface Describable {
  describe(): string;
}

export class Box implements Sizeable, Describable {
  constructor(public width: number, public height: number) {}

  getSize(): number {
    return this.width * this.height;
  }

  describe(): string {
    return `Box(${this.width}x${this.height})`;
  }
}
