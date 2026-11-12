export function createBook(title: string, author: string, pages: number): { title: string; author: string; pages: number; available: boolean } {

}

const book = createBook("The Hobbit", "J.R.R. Tolkien", 310);
console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.available);
