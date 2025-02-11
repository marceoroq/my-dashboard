"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface BookContextType {
  favoritesBooks: string[];
  isFavorite: (bookId: string) => boolean;
  toggleFavoriteBook: (bookId: string) => void;
}

const BookContext = createContext<BookContextType | null>(null);

interface BookProviderProps {
  children: ReactNode;
}

export const BookProvider = ({ children }: BookProviderProps) => {
  const [favoritesBooks, setFavoritesBooks] = useState<string[]>([]);

  const toggleFavoriteBook = (bookId: string): void => {
    setFavoritesBooks((prevFavorites) =>
      prevFavorites.includes(bookId)
        ? prevFavorites.filter((book) => book !== bookId)
        : [...prevFavorites, bookId]
    );
  };

  const isFavorite = (bookId: string): boolean => favoritesBooks.includes(bookId);

  return (
    <BookContext.Provider value={{ favoritesBooks, isFavorite, toggleFavoriteBook }}>
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
