import { OpenLibraryResponse, Book } from "../types/bookTypes";

const API_URL = "https://openlibrary.org/search.json";

export const getBooks = async (limit = 20, offset = 0): Promise<Book[]> => {
  const response = await fetch(`${API_URL}?author=Robin+Cook&limit=${limit}&offset=${offset}`);

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
