import Image from "next/image";
import womenReading from "@/assets/images/women_reading.png";

export function EmptyFavoriteBooks() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={womenReading}
        alt="women reading a red book"
        className="w-56 h-full object-cover"
      />
      <span className="text-2xl">You do not have favorite books</span>
      <div className="flex flex-col items-center justify-center text-center mt-6">
        <p className="text-lg italic text-gray-600">
          &quot;Any book that helps you form a habit of reading, to make it a deep and continuing
          need, is good for you.&quot;
        </p>
        <span className="text-sm font-semibold text-gray-700 mt-2">— Maya Angelou</span>
      </div>
    </div>
  );
}
