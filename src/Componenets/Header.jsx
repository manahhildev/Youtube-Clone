import React, { useState } from "react";
import { Menu, Search, Mic, Bell, Video, User, ArrowLeft } from "lucide-react";

export default function Header() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 text-white flex items-center justify-between px-4 py-2 shadow-md">
        {/* Left - Logo (hidden in mobile search) */}
        {!showMobileSearch && (
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full hover:bg-zinc-800">
              <Menu size={22} />
            </button>

            {/* ✅ Custom YouTube Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="20"
              viewBox="0 0 90 20"
              className="h-6 sm:h-7"
            >
              <path
                fill="#FF0000"
                d="M19.6 3.2c-.2-1-.8-1.8-1.7-2-1.5-.4-7.9-.4-7.9-.4s-6.4 0-7.9.4c-.9.2-1.5 1-1.7 2-.4 1.6-.4 5-.4 5s0 3.4.4 5c.2 1 .8 1.8 1.7 2 1.5.4 7.9.4 7.9.4s6.4 0 7.9-.4c.9-.2 1.5-1 1.7-2 .4-1.6.4-5 .4-5s0-3.4-.4-5z"
              />
              <polygon fill="#fff" points="8,6.5 14,10 8,13.5" />
              <text
                x="24"
                y="14"
                fontFamily="Arial, sans-serif"
                fontSize="12"
                fontWeight="bold"
                fill="#FFFFFF"
              >
                YouTube
              </text>
            </svg>
          </div>
        )}

        {/* Desktop Search */}
        <div className="flex-1 max-w-2xl px-4 hidden sm:flex">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 text-sm text-white rounded-l-full outline-none bg-zinc-800"
            />
            <button className="px-4 bg-zinc-800 rounded-r-full hover:bg-zinc-700">
              <Search size={20} />
            </button>
          </div>
          <button className="ml-2 p-2 rounded-full hover:bg-zinc-800">
            <Mic size={20} />
          </button>
        </div>

        {/* Right - Icons */}
        {!showMobileSearch && (
          <div className="flex items-center space-x-4">
            {/* Mobile Search Button */}
            <button
              className="p-2 rounded-full hover:bg-zinc-800 sm:hidden"
              onClick={() => setShowMobileSearch(true)}
            >
              <Search size={22} />
            </button>

            <button className="p-2 rounded-full hover:bg-zinc-800">
              <Video size={22} />
            </button>
            <button className="p-2 rounded-full hover:bg-zinc-800 relative">
              <Bell size={22} />
              <span className="absolute top-1 right-1 bg-red-600 text-[10px] px-1 rounded-full">
                3
              </span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
              <User size={20} />
            </div>
          </div>
        )}

        {/* ✅ Mobile Search Overlay */}
        {showMobileSearch && (
          <div className="absolute inset-0 bg-zinc-900 flex items-center px-3 py-3 space-x-3 shadow-md mt-5">
            {/* Back Button */}
            <button
              onClick={() => setShowMobileSearch(false)}
              className="p-2 rounded-full hover:bg-zinc-800"
            >
              <ArrowLeft size={22} />
            </button>

            {/* Search Bar */}
            <div className="flex-1 flex items-center bg-zinc-800 rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 text-sm text-white bg-transparent outline-none"
              />
              <button className="px-4 py-2 hover:bg-zinc-700">
                <Search size={20} />
              </button>
            </div>

            {/* Mic Icon */}
            <button className="p-2 rounded-full hover:bg-zinc-800 flex items-center justify-center">
              <Mic size={20} />
            </button>
          </div>
        )}
      </header>

      {/* 👇 Header ke neeche videos ke liye space */}
      <div className="pt-16 bg-[#0F0F0F]"></div>
    </>
  );
}
