"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebarStatus = () => {
    setIsSidebarOpen((prevStatus) => !prevStatus);
  };

  return (
    <div className="min-h-screen bg-blue-200/25">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        onCloseClick={closeSidebar}
      />
      <div
        className={`flex flex-col p-4 xl:ml-80 min-h-screen transition-all ${
          isSidebarOpen && "lg:ml-80"
        }`}>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          toggleSidebarStatus={toggleSidebarStatus}
        />
        {children}
      </div>
    </div>
  );
}
