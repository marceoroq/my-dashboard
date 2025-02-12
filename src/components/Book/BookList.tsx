"use client";
import { useState } from "react";
import { BookCard, BookGrid } from "@/components/Book";
import { getBooks } from "@/services/bookService";
import { Book } from "@/types/bookTypes";
import Button from "@/components/Button";

const NUMBER_OF_BOOKS_TO_FETCH = 24;

export function BookList({ initialBooks }: { initialBooks: Book[] }) {
  const [offset, setOffset] = useState(NUMBER_OF_BOOKS_TO_FETCH);
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const loadMoreBooks = async () => {
    const fetchedBooks = await getBooks(NUMBER_OF_BOOKS_TO_FETCH, offset);
    setBooks((users) => [...users, ...fetchedBooks]);
    setOffset((offset) => offset + NUMBER_OF_BOOKS_TO_FETCH);
  };

  return (
    <>
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
      <div className="flex justify-center items-center">
        <Button onClick={loadMoreBooks}>Load More Books</Button>
      </div>
    </>
  );
}
