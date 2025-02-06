"use client";

import { createContext, useContext } from "react";

const BookContext = createContext(null);

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  return <BookContext.Provider>{children}</BookContext.Provider>;
};

export const useBook = () => useContext(BookContext);
