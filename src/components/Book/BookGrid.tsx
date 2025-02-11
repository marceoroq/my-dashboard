import React from "react";

export function BookGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(208px,1fr))] justify-items-center mt-8 mx-auto gap-x-2 gap-y-8 max-w-screen-2xl font-sans">
      {children}
    </div>
  );
}
