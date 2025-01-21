import Image from "next/image";
import Link from "next/link";

import { Book } from "../types/bookTypes";
import Icon from "@/components/Icon";

export default function BookCard({ book }: { book: Book }) {
  const altText = `Cover of book ${book.title} by ${book.author_name}`;

  return (
    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <Link href={`books/${book.key}`}>
        <div className="relative flex h-80 w-full justify-center overflow-hidden rounded rounded-r-xl">
          {/* TODO: place generic book cover image when cover_i is undefined or fetch image fails */}
          <Image
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            width={256}
            height={240}
            alt={altText}
            className="w-full h-full object-cover"
          />
          {book.ratings_average && (
            <div className="absolute bottom-3 right-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
              <Icon
                name="star"
                className="text-yellow-400"
              />
              <span className="ml-1 text-sm text-slate-700">
                {book.ratings_average?.toFixed(1)}
              </span>
            </div>
          )}
        </div>

        <div className="mt-2 px-2">
          <h2 className="flex items-center gap-1 text-slate-700 font-bold">
            <Icon
              name="bookmark"
              className="w-4 h-4"
              aria-hidden="true"
            />
            {book.title_suggest}
          </h2>

          <p className="flex items-center gap-1 mt-1 text-sm text-slate-400">
            <Icon
              name="outuser"
              className="w-4 h-4"
              aria-hidden="true"
            />
            {book.author_name}
          </p>
        </div>
      </Link>
    </article>
  );
}
