import { useParams } from "react-router-dom";

export default function VideoPage({ videos }) {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id);

  if (!video) return <h2 className="text-center mt-10">Video not found</h2>;

  return (
    <div className="flex flex-col md:flex-row p-4 gap-6">
      {/* Main Video Section */}
      <div className="flex-1">
        {/* YouTube Iframe */}
        <div className="w-full h-[250px] md:h-[500px] bg-black rounded-lg overflow-hidden">
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
        <p className="text-gray-600">{video.channel}</p>
        <p className="text-sm text-gray-500">
          {video.views} views • {video.time}
        </p>
      </div>

      {/* Suggested Videos */}
      <div className="w-full md:w-80 flex flex-col gap-4">
        {videos
          .filter((v) => v.id !== video.id)
          .map((v) => (
            <a
              key={v.id}
              href={`/video/${v.id}`}
              className="flex gap-2 hover:bg-gray-100 p-2 rounded-lg"
            >
              <img
                src={v.img}
                alt={v.title}
                className="w-40 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{v.title}</h3>
                <p className="text-xs text-gray-600">{v.channel}</p>
                <p className="text-xs text-gray-500">
                  {v.views} • {v.time}
                </p>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}
