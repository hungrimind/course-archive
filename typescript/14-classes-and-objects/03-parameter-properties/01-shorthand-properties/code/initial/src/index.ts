export class Movie {
  title: string;
  private rating: number;
  readonly year: number;

  constructor(title: string, rating: number, year: number) {
    this.title = title;
    this.rating = rating;
    this.year = year;
  }

  getRating(): number {
    return this.rating;
  }
}
