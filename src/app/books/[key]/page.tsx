import { Metadata } from "next";
import Image from "next/image";
import { getAuthor, getBook, getRanking } from "../services/bookService";
import { truncateText } from "../../../utils/truncateText";
import Icon from "../../../components/Icon";

type Props = {
  params: Promise<{ key: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const key = (await params).key;
  const workData = await getBook(key);

  return {
    title: workData.title,
    description: `${workData.title} book page`,
  };
}

export default async function BookDetailPage({ params }: Props) {
  const key = (await params).key;
  const [workData, ratingData] = await Promise.all([getBook(key), getRanking(key)]);
  const authorData = await getAuthor(workData.authors[0]);

  return (
    <>
      <div className="flex-col md:flex-row bg-white items-start font-sans shadow-lg rounded-xl p-10 flex gap-6 max-w-4xl mx-auto">
        <Image
          src={`https://covers.openlibrary.org/b/id/${workData.covers[0]}-L.jpg`}
          width={256}
          height={240}
          alt="book cover"
          className="w-1/3 rounded-lg"
        />

        <div className="flex flex-col justify-between flex-grow">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{workData.title}</h2>
            <p className="text-gray-600 mt-2">By {authorData.name}</p>
            <p className="text-gray-500 text-sm">{workData.subjects.join(" - ")}</p>

            <div className="flex mt-3">
              <div className={`flex ${ratingData.average ? "text-orange-500" : "text-gray-500"}`}>
                <Icon name="star" />
              </div>
              <span className="ml-1 text-gray-500">
                {ratingData.average ? (
                  <>
                    <span className="font-semibold">{ratingData.average.toFixed(1)}</span> (
                    {ratingData.count} reviews)
                  </>
                ) : (
                  "No Ranked"
                )}
              </span>
            </div>

            <p className="text-gray-600 mt-4">
              {truncateText(workData.description, 80)}
              <span className="text-orange-500 cursor-pointer"> View more</span>
            </p>
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
                className="w-6 h-6 text-orange-500">
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
}
