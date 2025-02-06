"use client";

import Main from "./Main";
import Sidebar from "./Sidebar/Sidebar";
import { SidebarProvider } from "@/context/SidebarContext";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <Sidebar />
      <Main>{children}</Main>
    </SidebarProvider>
  );
}
