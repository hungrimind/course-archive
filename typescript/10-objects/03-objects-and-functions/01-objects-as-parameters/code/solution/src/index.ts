export function formatMovie(movie: { title: string; year: number }): string {
  return `${movie.title} (${movie.year})`;
}

console.log(formatMovie({ title: "Inception", year: 2010 }));
console.log(formatMovie({ title: "The Matrix", year: 1999 }));
