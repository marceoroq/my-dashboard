import { BookGrid, FavoriteBooks } from "@/components/Book";

export const metadata = {
  title: "Books Page",
  description: "Books Page",
};

// https://covers.openlibrary.org/b/id/8239781-L.jpg

export default async function FavoritesPage() {
  return (
    <section>
      <BookGrid>
        <FavoriteBooks />
      </BookGrid>
    </section>
  );
}
