// src/components/Sidebar.jsx
import React, { useState, useEffect } from "react";
import {
  Home,
  PlaySquare,
  Folder,
  Clock,
  Flame,
  User,
} from "lucide-react";

export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { icon: <Home className="w-6 h-6" />, label: "Home" },
    { icon: <Flame className="w-6 h-6" />, label: "Trending" },
    { icon: <PlaySquare className="w-6 h-6" />, label: "Subscriptions" },
    { icon: <Folder className="w-6 h-6" />, label: "Library" },
    { icon: <Clock className="w-6 h-6" />, label: "History" },
    { icon: <User className="w-6 h-6" />, label: "Your channel" },
  ];

  // ✅ Subscriptions data
  const subscriptions = [
    { name: "The Food Fusion", img: "https://yt3.googleusercontent.com/7Hvk_Z6h_Om2VcWeGLKQwkusBHTinjdtdl7Z-5OblV869TqWuMcY6CoNOi9YhB7EBUKdozqwcxM=s900-c-k-c0x00ffffff-no-rj" },
    { name: "Apna Collage", img: "https://yt3.googleusercontent.com/FEcjRtez5od8UowDo6tTt9WlE-MrIFEmcwPMTORmK9Swk6KCklOmA3xfIG9WuLWfNYfNThQE=s900-c-k-c0x00ffffff-no-rj" },
    { name: "React Js", img: "https://uploads.teachablecdn.com/attachments/SWtZL7dtR3SYRScauf7w_+1920x1357.jpg" },
    { name: "The Coding Journey", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDLxuyA42d4e8_6v7t8StlZiByZaPmNlUQg&s" },
    { name: "Ary Digital", img: "https://play-lh.googleusercontent.com/n9P9QTU4pPUtKAsD8Eun6mlxxwpFt4WRLhF29XziXjRrS_vcYv7xMhaVoMvdUDvluac" },
    { name: "Hum TV", img: "https://yt3.googleusercontent.com/ozZfTXiDhcWiZAymmOj2cQFhZbcBTK0K6TnbguD3XsLmNY0SaEuK3Jfj3QwkZx7SmAJSicca-Q=s900-c-k-c0x00ffffff-no-rj" },
  ];

  return (
    <aside
      className={`bg-[#0f0f0f] text-white h-screen sticky top-0 p-2 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900 ${
        isMobile ? "w-20" : "w-60"
      }`}
    >
      {/* Menu Section */}
      <nav className="flex flex-col gap-2 mt-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg cursor-pointer"
          >
            {item.icon}
            {!isMobile && <span className="text-sm">{item.label}</span>}
          </div>
        ))}
      </nav>

      {/* Divider */}
      {!isMobile && <hr className="my-3 border-zinc-700" />}

      {/* Subscriptions Section */}
      {!isMobile && (
        <div className="mt-2">
          <h3 className="text-xs font-semibold text-zinc-400 px-3 mb-2">
            Subscriptions
          </h3>
          {subscriptions.map((sub, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-3 py-2 hover:bg-[#272727] rounded-lg cursor-pointer"
            >
              <img
                src={sub.img}
                alt={sub.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-sm">{sub.name}</span>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
