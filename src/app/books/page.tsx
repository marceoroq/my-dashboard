import { Book } from "@/types/bookTypes";
import { getBooks } from "@/services/bookService";
import { BookList } from "@/components/Book";

export const metadata = {
  title: "Books Page",
  description: "Books Page",
};

const INITIAL_NUMBER_OF_BOOKS = 24;

// https://covers.openlibrary.org/b/id/8239781-L.jpg

export default async function BooksPage() {
  const books: Book[] = await getBooks(INITIAL_NUMBER_OF_BOOKS, 0);

  return (
    <section>
      <BookList initialBooks={books} />
    </section>
  );
}
