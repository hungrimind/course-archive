export interface Drawable {
  draw(): string;
}

export class Circle implements Drawable {
  constructor(public radius: number) {}

  draw(): string {

  }
}
