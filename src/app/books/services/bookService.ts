import { OpenLibraryResponse, Book, OpenLibraryWorkResponse } from "../types/bookTypes";

const API_URL = "https://openlibrary.org/";

export const getBooks = async (limit = 20, offset = 0): Promise<Book[]> => {
  const response = await fetch(
    `${API_URL}search.json?author=Robin+Cook&limit=${limit}&offset=${offset}`
  );

  if (!response.ok) {
    throw new Error("Error fetching books");
  }

  const data: OpenLibraryResponse = await response.json();

  return data.docs.map((book) => ({
    ...book,
    // key from api: "/works/OL1234567W", we need "OL1234567W"
    key: book.key.split("/")[2],
  }));
};

export const getBook = async (key: string): Promise<OpenLibraryWorkResponse> => {
  const response = await fetch(`${API_URL}works/${key}.json`);

  if (!response.ok) {
    throw new Error("Error fetching books");
  }

  const data: OpenLibraryWorkResponse = await response.json();

  return data;
};
