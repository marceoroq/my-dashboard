import { Metadata } from "next";
import { getBook } from "../services/bookService";

type Props = {
  params: Promise<{ key: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const key = (await params).key;

  const workData = await getBook(key);

  return {
    title: workData.title,
  };
}

export default async function BookPage({ params }: Props) {
  const key = (await params).key;
  const workData = await getBook(key);

  return (
    <h1>
      {workData.title}
      <pre className="text-sm">{JSON.stringify(workData, null, 2)}</pre>
    </h1>
  );
}
