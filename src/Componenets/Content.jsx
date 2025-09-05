import Web from "../assets/Web.jpeg";
import Web2 from "../assets/Web2.jpeg";
import Drama from "../assets/Drama.jpg";
import Drama2 from "../assets/AryLogo.jpeg";
import News from "../assets/News.jpeg";
import News2 from "../assets/Arynews.jpg";
import Course from "../assets/Course3.jpg";
import Course2 from "../assets/Course33.jpeg";
import HumTum from "../assets/Hum_Tum.jpg";
import Drama3 from "../assets/Drama3.jpg";
import sama from "../assets/samaNews.jpg";
import samaLogo from "../assets/Sama.png";
import CokeLogo from "../assets/CokeStudio.webp";
import Coke from "../assets/CokeStudioVideo.jpg";
import HtmlChannel from "../assets/Course1.jpeg";
import Html from "../assets/Course.jpeg";
import ReactChannel from "../assets/React.jpg";
import React from "../assets/ChannelReact.png";
import Geo from "../assets/GeoDrama.jpg";
import GeoDrama from "../assets/GeoChannel.jpeg";
import GoodMorning from "../assets/GoodMorning.jpeg";
import Ary from "../assets/AryLogo.jpeg";
import Cooking from "../assets/Cooking.png";
import CookingChannel from "../assets/Food.png";

function Content() {
  const Contentss = [
    {
      Title: "React Course for beginners",
      Image: Web,
      ChannelImage: Web2,
      ChannelName: "The Coding Journey",
      views: "457K views",
      time: "1 Year ago",
    },
    {
      Title: "Sher Drama | Episode 26 Flashback",
      Image: Drama,
      ChannelImage: Drama2,
      ChannelName: "Ary Digital Tv",
      views: "890K views",
      time: "2 weeks ago",
    },
    {
      Title: "Ary News Live | Latest pakistani News 24/7",
      Image: News,
      ChannelImage: News2,
      ChannelName: "Ary News",
      views: "289K views",
      time: "1 month ago",
    },
    {
      Title: "Python Full Course | For Free (2024)",
      Image: Course,
      ChannelImage: Course2,
      ChannelName: "The Educational Hub",
      views: "757K views",
      time: "20 days ago",
    },
    {
      Title: "Hum Tum - Episode 1 [Ahad Raza Mir, Ramsha Khan]",
      Image: HumTum,
      ChannelImage: Drama3,
      ChannelName: "Hum Tv",
      views: "1780K views",
      time: "2 years ago",
    },
    {
      Title: "Sama News Live | Latest Headlines and Breaking News",
      Image: sama,
      ChannelImage: samaLogo,
      ChannelName: "Sama Tv",
      views: "841K views",
      time: "4 hours ago",
    },
    {
      Title: "Coke Studio Pakistan | Season 15 - YouTube",
      Image: Coke,
      ChannelImage: CokeLogo,
      ChannelName: "Coke Studio",
      views: "439K views",
      time: "3 months ago",
    },
    {
      Title: "Html Full Course for beginners | Complete Tutorial",
      Image: Html,
      ChannelImage: HtmlChannel,
      ChannelName: "Earn To Code",
      views: "957K views",
      time: "2 days ago",
    },
    {
      Title: "Reactjs Crash Course | Complete Tutorial",
      Image: ReactChannel,
      ChannelImage: React,
      ChannelName: "React",
      views: "257K views",
      time: "4 months ago",
    },
    {
      Title: "Humraaz OST | Ayeza Khan | Feroze Khan",
      Image: Geo,
      ChannelImage: GeoDrama,
      ChannelName: "Geo Tv",
      views: "657K views",
      time: "10 days ago",
    },
    {
      Title: "Good Morning Pakistan | Mayi Ri Drama Cast",
      Image: GoodMorning,
      ChannelImage: Ary,
      ChannelName: "Ary Digital",
      views: "957K views",
      time: "20 minutes ago",
    },
    {
      Title: "5 Amazing Quick Potato Recipes by Food Fusion",
      Image: Cooking,
      ChannelImage: CookingChannel,
      ChannelName: "Food Fusion",
      views: "157K views",
      time: "7 days ago",
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Contentss?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 text-white cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="w-full aspect-video overflow-hidden rounded-xl">
              <img
                src={item.Image}
                alt={item.Title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Channel & Info */}
            <div className="flex gap-x-3">
              <img
                src={item.ChannelImage}
                alt={item.ChannelName}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h1 className="text-sm font-semibold line-clamp-2">
                  {item.Title}
                </h1>
                <p className="text-xs text-gray-400">{item.ChannelName}</p>
                <p className="text-xs text-gray-400">
                  {item.views} • {item.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Content;
