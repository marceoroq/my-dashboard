"use client";

import Icon from "@/components/Icon";
import { useBook } from "@/context/BookContext";

export function FavoriteBudget({ bookId }: { bookId: string }) {
  const { isFavorite, toggleFavoriteBook } = useBook();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    event.preventDefault();
    toggleFavoriteBook(bookId);
  };

  return (
    <div
      className="absolute backdrop-blur-sm top-3 right-3 inline-flex items-center rounded-full bg-white/85 p-2 shadow-md hover:transform hover:scale-125 duration-300"
      onClick={handleClick}>
      {isFavorite(bookId) ? (
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
