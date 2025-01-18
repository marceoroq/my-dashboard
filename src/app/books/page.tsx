import BookCard from "./components/BookCard";

import { getBooks } from "./services/bookService";

import { Book } from "./types/bookTypes";

export const metadata = {
  title: "Books Page",
  description: "Books Page",
};

// https://covers.openlibrary.org/b/id/8239781-L.jpg

export default async function BooksPage() {
  const books: Book[] = await getBooks();

  return (
    <div className="flex gap-1 flex-wrap">
      {books.map((book: Book) => {
        return (
          <BookCard
            key={book.key}
            book={book}
          />
        );
      })}
    </div>
  );
}
