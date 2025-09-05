// src/Components/VideoCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function VideoCard({ id, title, channel, views, time, img }) {
  return (
    <Link to={`/video/${id}`} className="block">
      <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-3">
          <h3 className="font-semibold text-gray-800 line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-600">{channel}</p>
          <p className="text-xs text-gray-500">{views} • {time}</p>
        </div>
      </div>
    </Link>
  );
}
