"use client";

import { createContext, useContext, useState, ReactNode, useMemo, useEffect } from "react";
import { Book } from "@/types/bookTypes";

interface BookContextType {
  favoriteBooks: Book[];
  isFavorite: (bookId: string) => boolean;
  toggleFavoriteBook: (book: Book) => void;
}

const BookContext = createContext<BookContextType | null>(null);

interface BookProviderProps {
  children: ReactNode;
}

export const BookProvider = ({ children }: BookProviderProps) => {
  const [favoritesMap, setFavoritesMap] = useState(() => {
    const storedFavoriteBooks = localStorage.getItem("favorite-books");
    return storedFavoriteBooks
      ? new Map<string, Book>(JSON.parse(storedFavoriteBooks))
      : new Map<string, Book>();
  });

  useEffect(() => {
    localStorage.setItem("favorite-books", JSON.stringify(Array.from(favoritesMap)));
  }, [favoritesMap]);

  const toggleFavoriteBook = (book: Book): void => {
    setFavoritesMap((prevFavorites) => {
      const newMap = new Map(prevFavorites);
      if (newMap.has(book.key)) newMap.delete(book.key);
      else newMap.set(book.key, book);
      return newMap;
    });
  };

  const isFavorite = (bookId: string): boolean => favoritesMap.has(bookId);

  const favoriteBooks = useMemo(() => Array.from(favoritesMap.values()), [favoritesMap]);

  return (
    <BookContext.Provider
      value={{
        favoriteBooks,
        isFavorite,
        toggleFavoriteBook,
      }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBook = (): BookContextType => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBook must be used within a BookProvider");
  }
  return context;
};
