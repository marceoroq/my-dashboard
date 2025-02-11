"use client";

import Image from "next/image";
import { useState } from "react";

import defaultBookCover from "@/assets/images/default-book-cover.png";

interface BookCover {
  cover: number;
  altText: string;
}

export function BookCover({ cover, altText }: BookCover) {
  const [imageSrc, setImageSrc] = useState(
    cover ? `https://covers.openlibrary.org/b/id/${cover}-L.jpg` : defaultBookCover
  );

  const handleError = () => {
    setImageSrc(defaultBookCover);
  };

  return cover ? (
    <Image
      src={imageSrc}
      width={200}
      height={320}
      alt={altText}
      className="w-full h-full object-cover"
      onError={handleError}
    />
  ) : (
    <Image
      src={defaultBookCover}
      alt="book cover"
      className="w-full h-full object-cover"
    />
  );
}
