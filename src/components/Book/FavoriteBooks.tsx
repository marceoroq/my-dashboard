"use client";

import { Book } from "../../types/bookTypes";
import { useBook } from "@/context/BookContext";
import { BookCard, EmptyFavoriteBooks } from "@/components/Book";
import Loading from "@/components/Loading";

export function FavoriteBooks() {
  const { favoriteBooks: books, isLoadingFavorites } = useBook();

  if (isLoadingFavorites) return <Loading />;

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
