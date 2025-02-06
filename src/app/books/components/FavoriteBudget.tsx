"use client";

import { useState } from "react";

import Icon from "@/components/Icon";

export default function FavoriteBudget() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsFavorite((prevValue) => !prevValue);
  };

  return (
    <div
      className="absolute backdrop-blur-sm top-3 right-3 inline-flex items-center rounded-full bg-white/85 p-2 shadow-md hover:transform hover:scale-125 duration-300"
      onClick={handleClick}>
      {isFavorite ? (
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
