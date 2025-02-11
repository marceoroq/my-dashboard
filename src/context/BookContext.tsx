"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Book } from "@/types/bookTypes";

interface BookContextType {
  favoritesBooks: Book[];
  isFavorite: (bookId: string) => boolean;
  toggleFavoriteBook: (book: Book) => void;
}

const BookContext = createContext<BookContextType | null>(null);

interface BookProviderProps {
  children: ReactNode;
}

export const BookProvider = ({ children }: BookProviderProps) => {
  const [favoritesMap, setFavoritesMap] = useState(new Map<string, Book>());

  const toggleFavoriteBook = (book: Book): void => {
    setFavoritesMap((prevFavorites) => {
      const newMap = new Map(prevFavorites);
      if (newMap.has(book.key)) newMap.delete(book.key);
      else newMap.set(book.key, book);
      return newMap;
    });
  };

  const isFavorite = (bookId: string): boolean => favoritesMap.has(bookId);

  return (
    <BookContext.Provider
      value={{
        favoritesBooks: Array.from(favoritesMap.values()),
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
    throw new Error("useBook must be used within a SidebarProvider");
  }
  return context;
};
