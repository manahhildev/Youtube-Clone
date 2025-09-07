// src/Components/VideoPage.jsx
import { useParams, Link } from "react-router-dom";
import { ThumbsUp, ThumbsDown, Share2, Download, Bell } from "lucide-react";

export default function VideoPage({ videos }) {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id);

  if (!video)
    return <h2 className="text-center mt-10 text-white">Video not found</h2>;

  return (
    <div className="flex flex-col md:flex-row p-4 gap-6 bg-[#0f0f0f] text-white">
      {/* Main Video Section */}
      <div className="flex-1">
        {/* YouTube Iframe */}
        <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Details */}
        <h2 className="text-lg font-bold mt-3">{video.title}</h2>
        <p className="text-gray-400">{video.channel}</p>
        <p className="text-sm text-gray-500">
          {video.views} views • {video.time}
        </p>

        {/* Buttons Section */}
        <div className="flex items-center gap-3 mt-4 flex-wrap">
          <button className="flex items-center gap-2 bg-[#272727] hover:bg-[#3a3a3a] px-4 py-2 rounded-full text-sm">
            <ThumbsUp size={18} /> Like
          </button>
          <button className="flex items-center gap-2 bg-[#272727] hover:bg-[#3a3a3a] px-4 py-2 rounded-full text-sm">
            <ThumbsDown size={18} /> Dislike
          </button>
          <button className="flex items-center gap-2 bg-[#272727] hover:bg-[#3a3a3a] px-4 py-2 rounded-full text-sm">
            <Share2 size={18} /> Share
          </button>
          <button className="flex items-center gap-2 bg-[#272727] hover:bg-[#3a3a3a] px-4 py-2 rounded-full text-sm">
            <Download size={18} /> Download
          </button>
          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-sm font-semibold">
            🔴 Subscribe
          </button>
        </div>

        {/* Comments Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Comments</h3>
          <div className="flex items-start gap-3 mb-4">
            <img
              src="https://ui-avatars.com/api/?name=User&background=random"
              alt="user"
              className="w-9 h-9 rounded-full"
            />
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 bg-transparent border-b border-gray-600 focus:outline-none py-1"
            />
          </div>

          {/* Example Comments */}
          <div className="flex items-start gap-3 mb-4">
            <img
              src="https://ui-avatars.com/api/?name=Ali"
              alt="Ali"
              className="w-9 h-9 rounded-full"
            />
            <div>
              <p className="font-semibold">Zara noor</p>
              <p className="text-gray-400 text-sm">
                Amazing Drama  👌
              </p>
            </div>
          </div>
           <div className="flex items-start gap-3 mb-4">
            <img
              src="https://ui-avatars.com/api/?name=Ali"
              alt="Ali"
              className="w-9 h-9 rounded-full"
            />
            <div>
              <p className="font-semibold">Sara Hashmi</p>
              <p className="text-gray-400 text-sm">
                Drama getting intersting Day by day 👌
              </p>
            </div>
          </div>
           <div className="flex items-start gap-3 mb-4">
            <img
              src="https://ui-avatars.com/api/?name=Ali"
              alt="Ali"
              className="w-9 h-9 rounded-full"
            />
            <div>
              <p className="font-semibold">Zubair Taha</p>
              <p className="text-gray-400 text-sm">
                love The way you explain things !
              </p>
            </div>
          </div>
           <div className="flex items-start gap-3 mb-4">
            <img
              src="https://ui-avatars.com/api/?name=Ali"
              alt="Ali"
              className="w-9 h-9 rounded-full"
            />
            <div>
              <p className="font-semibold">Ali Khan</p>
              <p className="text-gray-400 text-sm">
                Wah! Bohat informative video thi 👌
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <img
              src="https://ui-avatars.com/api/?name=Ayesha"
              alt="Ayesha"
              className="w-9 h-9 rounded-full"
            />
            <div>
              <p className="font-semibold">Ayesha</p>
              <p className="text-gray-400 text-sm">
                Zabardast explanation! Keep it up 👍
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Videos */}
      <div className="w-full md:w-80 flex flex-col gap-4">
        {videos
          .filter((v) => v.id !== video.id)
          .map((v) => (
            <Link
              key={v.id}
              to={`/video/${v.id}`}
              className="flex gap-2 hover:bg-[#272727] p-2 rounded-lg"
            >
              <img
                src={v.img}
                alt={v.title}
                className="w-40 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{v.title}</h3>
                <p className="text-xs text-gray-400">{v.channel}</p>
                <p className="text-xs text-gray-500">
                  {v.views} • {v.time}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
