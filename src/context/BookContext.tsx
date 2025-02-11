"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface BookContextType {
  favoritesBooks: string[];
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

  return (
    <BookContext.Provider value={{ favoritesBooks, toggleFavoriteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBook = (): BookContextType => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
