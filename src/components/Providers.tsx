"use client";

import { SidebarProvider } from "@/context/SidebarContext";
import { BookProvider } from "@/context/BookContext";

import Main from "./Main";
import Sidebar from "./Sidebar/Sidebar";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <BookProvider>
        <Sidebar />
        <Main>{children}</Main>
      </BookProvider>
    </SidebarProvider>
  );
}
