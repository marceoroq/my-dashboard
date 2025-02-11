import { Book } from "@/types/bookTypes";
import { getBooks } from "@/services/bookService";
import { BookGrid, BookCard } from "@/components/Book";

export const metadata = {
  title: "Books Page",
  description: "Books Page",
};

// https://covers.openlibrary.org/b/id/8239781-L.jpg

export default async function BooksPage() {
  const books: Book[] = await getBooks();

  return (
    <section>
      <BookGrid>
        {books.map((book: Book) => {
          return (
            <BookCard
              key={book.key}
              book={book}
            />
          );
        })}
      </BookGrid>
    </section>
  );
}
