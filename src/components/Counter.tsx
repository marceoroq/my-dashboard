"use client";

import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState<number>(10);

  const handleCounterUpdate = (value: number) => {
    setCounter((prevValue) => prevValue + value);
  };

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex gap-2">
        <button
          className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
          onClick={() => handleCounterUpdate(-1)}>
          -1
        </button>
        <button
          className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
          onClick={() => handleCounterUpdate(1)}>
          +1
        </button>
      </div>
    </>
  );
}
