// src/Components/Shorts.jsx
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Shorts({ shorts }) {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  // ✅ Check scroll position
  const checkScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    setShowLeft(container.scrollLeft > 0);
    setShowRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth
    );
  };

  useEffect(() => {
    checkScroll();
    const container = scrollRef.current;
    if (container) container.addEventListener("scroll", checkScroll);
    return () => {
      if (container) container.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative mt-8 px-4">
      <h2 className="text-lg font-semibold mb-4">Shorts</h2>

      {/* ✅ Shorts Container */}
      <div className="relative">
        {/* ✅ Left Arrow */}
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* ✅ Shorts Scrollable Row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth flex-wrap"
        >
          {shorts.map((short, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[220px] lg:w-[240px]"
            >
              {/* ✅ Thumbnail */}
              <div className="relative aspect-[9/16] rounded-xl overflow-hidden">
                <img
                  src={short.thumbnail}
                  alt={short.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-2 text-sm font-medium line-clamp-2">{short.title}</h3>
              <p className="text-xs text-gray-400">{short.channel}</p>
            </div>
          ))}
        </div>

        {/* ✅ Right Arrow */}
        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}
