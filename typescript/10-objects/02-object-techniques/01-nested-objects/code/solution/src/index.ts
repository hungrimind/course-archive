export function getAuthorFirstName(book: {
  title: string;
  author: { firstName: string; lastName: string };
}): string {
  return book.author.firstName;
}

export function getAuthorLastName(book: {
  title: string;
  author: { firstName: string; lastName: string };
}): string {
  return book.author.lastName;
}

export function getAuthorFullName(book: {
  title: string;
  author: { firstName: string; lastName: string };
}): string {
  return book.author.firstName + " " + book.author.lastName;
}

const book = {
  title: "The Hobbit",
  author: {
    firstName: "J.R.R.",
    lastName: "Tolkien",
  },
};

console.log(getAuthorFirstName(book));
console.log(getAuthorLastName(book));
console.log(getAuthorFullName(book));
