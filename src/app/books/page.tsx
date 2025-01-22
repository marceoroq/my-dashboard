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
    <section>
      <div className="mx-auto grid grid-cols-1 gap-x-6 gap-y-10 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {books.map((book: Book) => {
          return (
            <BookCard
              key={book.key}
              book={book}
            />
          );
        })}
      </div>
    </section>
  );
}
