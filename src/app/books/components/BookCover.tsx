"use client";

import { useState } from "react";

import Image from "next/image";
import defaultBookCover from "@/assets/images/default-book-cover.png";

export default function BookCover({ cover, altText }) {
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
