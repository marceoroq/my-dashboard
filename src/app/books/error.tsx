"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: VoidFunction;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-full grow items-center justify-center">
      <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
        <div className="max-w-md mx-auto space-y-6">
          <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center font-sans">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                500
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-black md:text-4xl">
                Internal Server Error.
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                We are already working to solve the problem. {error.message}
              </p>
              <button
                className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
                onClick={() => reset()}>
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
