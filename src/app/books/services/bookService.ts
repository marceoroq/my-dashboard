import { OpenLibraryRatingResponse, RatingSummary } from "../types/bookTypes";
import {
  Book,
  WorkBook,
  OpenLibraryResponse,
  OpenLibraryWorkResponse,
  OpenLibraryAuthorResponse,
} from "../types/bookTypes";

const API_URL = "https://openlibrary.org/";

export const getBooks = async (limit = 50, offset = 0): Promise<Book[]> => {
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

export const getBook = async (key: string): Promise<WorkBook> => {
  const response = await fetch(`${API_URL}works/${key}.json`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Not Found");
    } else {
      throw new Error("Error fetching book data");
    }
  }

  const data: OpenLibraryWorkResponse = await response.json();

  const description =
    typeof data.description === "object" ? data.description.value : data.description;

  return {
    ...data,
    description,
    authors: data.authors.map((author) => author.author.key.split("/")[2]),
  };
};

export const getAuthor = async (key: string): Promise<OpenLibraryAuthorResponse> => {
  const response = await fetch(`${API_URL}authors/${key}.json`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Not Found");
    } else {
      throw new Error("Error fetching author data");
    }
  }

  const data: OpenLibraryAuthorResponse = await response.json();

  return data;
};

export const getRanking = async (key: string): Promise<RatingSummary> => {
  const response = await fetch(`${API_URL}works/${key}/ratings.json`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Not Found");
    } else {
      throw new Error("Error fetching ranking data");
    }
  }

  const data: OpenLibraryRatingResponse = await response.json();

  return data.summary;
};
