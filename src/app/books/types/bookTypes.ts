export interface OpenLibraryResponse {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Book[];
  num_found: number;
  q: string;
  offset: null;
}

export interface Book {
  author_key: string[];
  author_name: string[];
  cover_i: number;
  first_publish_year: number;
  first_sentence: string[];
  format: string[];
  key: string;
  language: string[];
  number_of_pages_median: number;
  publish_place: string[];
  title: string;
  title_sort: string;
  title_suggest: string;
  type: string;
  subject: string[];
  ratings_average: number;
  want_to_read_count: number;
  currently_reading_count: number;
  already_read_count: number;
  subject_facet: string[];
}
