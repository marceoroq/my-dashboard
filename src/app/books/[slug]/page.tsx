import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import Icon from "@/components/Icon";
import { Book } from "@/types/bookTypes";
import { truncateText, formatStrings } from "@/utils";
import {
  getBooks,
  getBook,
  getAuthor,
  getRanking,
} from "@/services/bookService";

import defaultBookCover from "@/assets/images/default-book-cover.png";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const books: Book[] = await getBooks(20);

  const bookSlugs = books.map((book) => ({
    slug: `${formatStrings(book.title)}-${formatStrings(book.author_name)}-${book.key}`,
  }));

  return bookSlugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const key: string = slug.split("-").at(-1)!;

  try {
    const workData = await getBook(key);
    return {
      title: workData.title,
      description: `${workData.title} book page`,
    };
  } catch {
    return {
      title: "Book details page",
      description: "Page where we can find details about particular book",
    };
  }
}

export default async function BookDetailPage({ params }: Props) {
  const slug = (await params).slug;
  const key = slug.split("-").at(-1)!;

  try {
    const [workData, ratingData] = await Promise.all([
      getBook(key),
      getRanking(key),
    ]);

    const authorData = await getAuthor(workData.authors[0]);
    return (
      <>
        <div className="flex flex-col md:flex-row items-start gap-6 mt-4 p-10 max-w-4xl mx-auto bg-white font-sans shadow-lg rounded-xl">
          {Number(workData.covers?.[0]) > 0 ? (
            <Image
              src={`https://covers.openlibrary.org/b/id/${workData.covers[0]}-L.jpg`}
              width={256}
              height={240}
              alt="book cover"
              className="w-1/3 rounded-lg"
            />
          ) : (
            <Image
              src={defaultBookCover}
              alt="book cover"
              className="w-1/3 rounded-lg"
            />
          )}

          <div className="flex flex-col justify-between flex-grow">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {workData.title}
              </h2>
              <p className="text-gray-600 mt-2">By {authorData.name}</p>
              {workData.subjects && (
                <p className="text-gray-500 text-sm">
                  {workData.subjects.join(" - ")}
                </p>
              )}

              <div className="flex mt-3">
                <div
                  className={`flex ${ratingData.average ? "text-orange-500" : "text-gray-500"}`}
                >
                  <Icon name="star" />
                </div>
                <span className="ml-1 text-gray-500">
                  {ratingData.average ? (
                    <>
                      <span className="font-semibold">
                        {ratingData.average.toFixed(1)}
                      </span>
                      ({ratingData.count} reviews)
                    </>
                  ) : (
                    "No Ranked"
                  )}
                </span>
              </div>
              {workData.description && (
                <p className="text-gray-600 mt-4">
                  {truncateText(workData.description, 80)}
                  <span className="text-orange-500 cursor-pointer">
                    View more
                  </span>
                </p>
              )}
            </div>

            <div className="flex justify-between items-center mt-6">
              <button className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600">
                Read now
              </button>
              <div className="p-2 rounded-full bg-gray-100 shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-orange-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* <pre>{JSON.stringify(workData, null, 2)}</pre> */}
      </>
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.message === "Not Found") {
        notFound();
      } else {
        throw error;
      }
    } else {
      throw new Error("Unknown error ocurred");
    }
  }
}
