import Navbar from "./Navbar";

import { useSidebar } from "@/context/SidebarContext";

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSidebarOpen } = useSidebar();
  return (
    <div
      className={`flex flex-col p-4 xl:ml-80 min-h-screen transition-all ${
        isSidebarOpen && "lg:ml-80"
      }`}>
      <Navbar />
      {children}
    </div>
  );
}
