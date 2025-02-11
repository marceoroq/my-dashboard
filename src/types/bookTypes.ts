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
  key: string;
  author_name: string[];
  title: string;
  cover_i: number;
  first_publish_year?: number;
  author_key?: string[];
  language?: string[];
  publish_place?: string[];
  type?: string;
  subject?: string[];
  ratings_average?: number;
  want_to_read_count?: number;
  currently_reading_count?: number;
  already_read_count?: number;
}

export interface OpenLibraryWorkResponse {
  title: string;
  covers: number[];
  key: string;
  authors: Author[];
  type: Key;
  subjects: string[];
  description: Type;
  latest_revision: number;
  revision: number;
  created: Type;
  last_modified: Type;
}

export interface WorkBook extends Omit<OpenLibraryWorkResponse, "authors" | "description"> {
  authors: string[];
  description: string;
}

interface Author {
  author: Key;
  type: Key;
}

interface Key {
  key: string;
}

export interface Type {
  type: string;
  value: string;
}

export interface OpenLibraryEditionsResponse {
  size: number;
  entries: Entry[];
}

export interface Entry {
  publishers?: string[];
  key: string;
  authors: Key[];
  title: string;
  number_of_pages?: number;
  languages?: Key[];
  publish_date?: string;
  publish_country?: string;
  latest_revision: number;
  revision: number;
  created: Type;
  last_modified: Type;
  notes?: Type;
  covers?: number[];
  ocaid?: string;
  publish_places?: string[];
  by_statement?: string;
  local_id?: string[];
  series?: string[];
  work_titles?: string[];
  ia_box_id?: string[];
  ia_loaded_id?: string[];
  lc_classifications?: string[];
  lccn?: string[];
}

export enum TypeEnum {
  TypeDatetime = "/type/datetime",
  TypeText = "/type/text",
}

export interface OpenLibraryAuthorResponse {
  name: string;
  photos: number[];
  bio: string;
  title: string;
  birth_date: string;
  created: Type;
  last_modified: Type;
}

export interface OpenLibraryRatingResponse {
  summary: RatingSummary;
}

export interface RatingSummary {
  average: number;
  count: number;
  sortable: number;
}
