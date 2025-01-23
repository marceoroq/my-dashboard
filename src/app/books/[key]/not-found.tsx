import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center grow font-sans">
      <h1 className="text-9xl font-extrabold text-[#151d2c]">404</h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">Book Not Found</div>
      <button className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-md font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        <Link href="/books">Go Books</Link>
      </button>
    </div>
  );
}
