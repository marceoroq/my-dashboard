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
      <div className="grid grid-cols-[repeat(auto-fit,minmax(208px,1fr))] justify-items-center mt-8 mx-auto gap-x-2 gap-y-8 max-w-screen-2xl">
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
