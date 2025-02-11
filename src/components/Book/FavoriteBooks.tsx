"use client";

import { Book } from "../../types/bookTypes";
import { BookCard, EmptyFavoriteBooks } from "@/components/Book";
import { useBook } from "@/context/BookContext";

export function FavoriteBooks() {
  const { favoritesBooks: books } = useBook();

  if (books.length === 0) return <EmptyFavoriteBooks />;

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
