// src/pages/Home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Shorts from "../Componenets/Shorts";

export default function Home({ videos, shorts }) {
  const categories = [
    "All",
    "Music",
    "Gaming",
    "Live",
    "News",
    "Sports",
    "Learning",
    "Fashion",
    "Comedy",
    "Entertainment",
    "Technology",
    "Lifestyle",
    "Travel",
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [showAllCategories, setShowAllCategories] = useState(false);

  // ✅ Mobile pe 4 categories dikhani hain, phir "See All" button
  const visibleCategories =
    window.innerWidth < 640 && !showAllCategories
      ? categories.slice(0, 4)
      : categories;

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white flex">
      <div className="flex-1">
        {/* ✅ Categories Bar */}
        <div className="flex gap-3 overflow-x-auto px-4 py-3 bg-[#181818] sticky top-0 z-10 scrollbar-hide w-full flex-wrap">
          {visibleCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`sm:px-4 px-2 py-1 rounded-full sm:text-sm text-xs whitespace-nowrap transition ${
                activeCategory === cat
                  ? "bg-white text-black"
                  : "bg-[#272727] text-white hover:bg-white hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}

          {/* ✅ See All Button (only mobile) */}
          {window.innerWidth < 640 && !showAllCategories && (
            <button
              onClick={() => setShowAllCategories(true)}
              className="px-4 py-1 rounded-full text-sm whitespace-nowrap bg-[#272727] text-white hover:bg-white hover:text-black"
            >
              See All
            </button>
          )}
        </div>

        {/* ✅ Videos Grid */}
        <div
          className="
            p-4 sm:p-6 grid gap-6
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
          "
        >
          {videos.map((video) => (
            <Link
              key={video.id}
              to={`/video/${video.id}`}
              className="rounded-lg overflow-hidden block max-w-full md:max-w-[500px]"
            >
              {/* ✅ Thumbnail */}
              <div className="relative w-full aspect-video">
                <img
                  src={video.img}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* ✅ Video Info */}
              <div className="flex mt-3 gap-3">
                <img
                  src={`https://ui-avatars.com/api/?name=${video.channel}&background=random`}
                  alt={video.channel}
                  className="w-9 h-9 rounded-full flex-shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-400">{video.channel}</p>
                  <p className="text-xs text-gray-500">
                    {video.views} views • {video.time}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ✅ Shorts Section */}
        <Shorts shorts={shorts} />
      </div>
    </div>
  );
}
