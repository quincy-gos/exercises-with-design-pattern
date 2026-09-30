import {Book} from './Book';

export class BookSearch {
    private readonly books: Book[];

    constructor(books: Book[]) {
      this.books = books;
    }

    getBookByTitle(title: string): Book | undefined {
      return this.books.find(book => book.title === title);
    }

    getBooksByAuthor(author: string): Book[] {
      return this.books.filter(book => book.author === author);
    }

    getBooksByPublicationYear(publicationYear: number): Book[] {
      return this.books.filter(book => book.publicationYear === publicationYear);
    }
}