import { Link } from "react-router-dom";

{/* Thumbnail with duration overlay */}
<Link to={`/video/${video.id}`}>
  <div className="relative">
    <img
      src={video.thumbnail}
      alt={video.title}
      className="rounded-lg w-full object-cover"
    />
    <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-xs px-1 rounded text-white">
      {video.duration}
    </span>
  </div>
</Link>
