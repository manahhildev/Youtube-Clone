import React from "react";
import Header from "./Componenets/Header";
import Sidebar from "./Componenets/Sidebar";
import Content from "./Componenets/Content";

export default function Layout() {
  return (
    <div className="flex h-screen flex-col">
      {/* Top Header */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (left side) */}
        <aside className="hidden md:block w-60 shrink-0 overflow-y-auto border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-900">
          <Sidebar />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-neutral-950">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4">
            <Content />
          </div>
        </main>
      </div>
    </div>
  );
}
