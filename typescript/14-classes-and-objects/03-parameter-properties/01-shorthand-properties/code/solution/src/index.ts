export class Movie {
  constructor(
    public title: string,
    private rating: number,
    readonly year: number
  ) {}

  getRating(): number {
    return this.rating;
  }
}
