import Icon from "@/components/Icon";

export function RatingBudget({ rating }: { rating: string }) {
  return (
    <div className="absolute backdrop-blur-sm bottom-3 right-3 inline-flex items-center rounded-lg bg-black/25 p-2 shadow-md">
      <Icon
        name="star"
        className="text-yellow-400"
      />
      <span className="ml-1 font-semibold text-sm text-white">{rating}</span>
    </div>
  );
}
