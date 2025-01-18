import Image from "next/image";

import { Book } from "../types/bookTypes";

export default function BookCard({ book }: { book: Book }) {
  const altText = `Cover of book ${book.title} by ${book.author_name}`;

  return (
    <div className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg w-fit h-64 shadow-md shadow-blue-gray-500/40">
      <div className="absolute text-white px-4 py-3 z-10 bg-black/75 bottom-0 w-full">
        <span className="block font-semibold text-xl">{book.title}</span>
        <span className="block opacity-75 ml-[0.1rem] text-xs ">{book.author_name}</span>
      </div>
      <div className="relative h-full bg-black">
        <Image
          className="relative w-40 "
          width={250}
          height={250}
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
          alt={altText}
        />
      </div>
    </div>
  );
}
