import Counter from "@/components/Counter";

export const metadata = {
  title: "Counter Page",
  description: "Counter page where we simulate the products shopping cart counter",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full grow font-sans">
      <span>Products in Shopping Cart</span>
      <Counter />
    </div>
  );
}
