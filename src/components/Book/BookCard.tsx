import Link from "next/link";

import { Book } from "@/types/bookTypes";
import { formatStrings } from "@/utils/formatStrings";
import { FavoriteBudget, RatingBudget, BookCover } from "@/components/Book";

export function BookCard({ book }: { book: Book }) {
  const altText = `Cover of book ${book.title} by ${book.author_name}`;
  const url = `books/${formatStrings(book.title)}-${formatStrings(book.author_name)}-${book.key}`;

  return (
    <article className="rounded-xl w-52 bg-white px-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <Link href={url}>
        <div className="-translate-y-4 relative flex h-80 w-full justify-center overflow-hidden rounded-t-xl rounded-b-md shadow-lg">
          <FavoriteBudget bookId={book.key} />
          <BookCover
            cover={book.cover_i}
            altText={altText}
          />
          {book.ratings_average && <RatingBudget rating={book.ratings_average?.toFixed(1)} />}
        </div>

        <div className="px-2 -translate-y-2">
          <h2 className="flex items-center gap-1 text-slate-700 font-bold">
            <span className="flex-1 truncate antialiased tracking-normal font-sans text-md font-semibold leading-relaxed text-blue-gray-900">
              {book.title}
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
