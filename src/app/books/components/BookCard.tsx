import Image from "next/image";
import Link from "next/link";

import { Book } from "../types/bookTypes";
import Icon from "@/components/Icon";

export default function BookCard({ book }: { book: Book }) {
  const altText = `Cover of book ${book.title} by ${book.author_name}`;

  return (
    <article className="rounded-xl w-[clamp(12rem, 100%, 14rem)] bg-white px-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <Link href={`books/${book.key}`}>
        <div className="-translate-y-4 relative flex h-80 w-full justify-center overflow-hidden rounded-t-xl rounded-b-md shadow-lg">
          {/* TODO: place generic book cover image when cover_i is undefined or fetch image fails */}
          <Image
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
            width={200}
            height={320}
            alt={altText}
            className="w-full h-full object-cover"
          />
          {book.ratings_average && (
            <div className="absolute backdrop-blur-sm bottom-3 right-3 inline-flex items-center rounded-lg bg-black/25 p-2 shadow-md">
              <Icon
                name="star"
                className="text-yellow-400"
              />
              <span className="ml-1 font-semibold text-sm text-white">
                {book.ratings_average?.toFixed(1)}
              </span>
            </div>
          )}
        </div>

        <div className="px-2 -translate-y-2">
          <h2 className="flex items-center gap-1 text-slate-700 font-bold">
            <span className="flex-1 truncate antialiased tracking-normal font-sans text-md font-semibold leading-relaxed text-blue-gray-900">
              {book.title_suggest}
            </span>
          </h2>

          <p className="flex items-center gap-1 text-xs mb-1 text-slate-400">
            by {book.author_name.join(" - ")}
          </p>
        </div>
      </Link>
    </article>
  );
}
