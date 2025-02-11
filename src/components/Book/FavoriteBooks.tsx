"use client";

import { Book } from "../../types/bookTypes";
import { BookCard } from "@/components/Book";
import { useBook } from "@/context/BookContext";

export function FavoriteBooks() {
  const { favoritesBooks: books } = useBook();

  if (books.length === 0) return <h2>Hay que leer un poco mas pa</h2>;

  return (
    <>
      {books.map((book: Book) => {
        return (
          <BookCard
            key={book.key}
            book={book}
          />
        );
      })}
    </>
  );
}
