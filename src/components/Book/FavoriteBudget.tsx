"use client";

import Icon from "@/components/Icon";
import { Book } from "@/types/bookTypes";
import { useBook } from "@/context/BookContext";

export function FavoriteBudget({ book }: { book: Book }) {
  const { isFavorite, toggleFavoriteBook } = useBook();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    event.preventDefault();
    toggleFavoriteBook(book);
  };

  return (
    <div
      className="absolute backdrop-blur-sm top-3 right-3 inline-flex items-center rounded-full bg-white/85 p-2 shadow-md hover:transform hover:scale-125 duration-300"
      onClick={handleClick}>
      {isFavorite(book.key) ? (
        <Icon
          name="heart"
          className="text-red-400"
        />
      ) : (
        <Icon
          name="outheart"
          className="text-red-400"
        />
      )}
    </div>
  );
}
