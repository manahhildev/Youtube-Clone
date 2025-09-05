import { Link } from "react-router-dom";

export default function Categories({ videos }) {
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
  ];

  return (
    <div className="bg-[#0f0f0f] min-h-screen">
      {/* Categories Bar */}
      <div className="flex gap-3 overflow-x-auto px-4 py-3 bg-[#181818] sticky top-0 z-10">
        {categories.map((cat, i) => (
          <button
            key={i}
            className="px-4 py-1 rounded-full bg-[#272727] text-white text-sm hover:bg-white hover:text-black whitespace-nowrap"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Videos Grid */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <Link
            key={video.id}
            to={`/video/${video.id}`}
            className="bg-[#181818] rounded-lg hover:bg-[#272727] transition overflow-hidden"
          >
            {/* Thumbnail */}
            <img
              src={video.img}
              alt={video.title}
              className="w-full h-48 object-cover"
            />

            {/* Details */}
            <div className="p-3 text-white">
              <h3 className="font-semibold text-sm line-clamp-2">
                {video.title}
              </h3>
              <p className="text-xs text-gray-400">{video.channel}</p>
              <p className="text-xs text-gray-500">
                {video.views} views • {video.time}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
