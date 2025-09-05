// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Componenets/Home";
import VideoPage from "./Componenets/Videopage";
import Header from "./Componenets/Header";
import Sidebar from "./Componenets/Sidebar";

// ✅ Saari videos ek hi jagah rakhi
const suggestedVideos = [
  {
    id: "SRItEhTyU2o",
    title: "Rasme Wafa Drama |Episode 1| Ary Digital",
    channel: "Ary Digital",
    views: "12K",
    time: "2 days ago",
    img: "https://i.ytimg.com/vi/SRItEhTyU2o/maxresdefault.jpg",
  },
  {
    id: "UUu_d2Bqjyg",
    title: "Tailwind Basics | Learn Tailwind In 3 Hours",
    channel: "Coding Journey",
    views: "8K",
    time: "5 days ago",
    img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2152651580/settings_images/a415f77-addc-558f-c62e-76470d70ecc_Tailwind_CSS_Course.jpg",
  },
  { id: "dQw4w9WgXcQ", title: "Ary News Headlines 12 PM | Latest Pakistani News", channel: "Ary News", views: "20K", time: "1 week ago", img: "https://s1.dmcdn.net/v/WXfXk1cUYa6DlvVKg/x720" },
  { id: "kqS-KnU6f8Q", title: "Kids Nursery Rhymes | Poems for Kids", channel: "Kids Hindi Rhyme", views: "15K", time: "3 days ago", img: "https://i.ytimg.com/vi/TPOMCOukWBc/hqdefault.jpg" },
  // ... baki videos same jaise pehle
  { id: "HPIjjFGYSJ4", title: "Python Basics | Course for Beginners", channel: "Code World", views: "25K", time: "4 days ago", img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210215160315/FREE-Python-Course-For-Beginners.png" },
  { id: "O6P86uwfdR0", title: "Cocomelon Nursery Rhymes for Kids", channel: "Cocomelon", views: "18K", time: "5 days ago", img: "https://cdn.shopify.com/s/files/1/2393/5817/files/AAAABaj9RFz_5B_KysI0S8vms1klJpFUku71gvrUj_S0caRi1aqYw6M1gsW11uSLureZ9b6AcSUPgL9CpB5oFXcp8jqw33eTkYKfQ7rx_480x480.jpg?v=1663253432" },
  { id: "f2mMO5nF8pI", title: "ReactJS Full Course for Beginners", channel: "Code Hub", views: "22K", time: "2 days ago", img: "https://i.ytimg.com/vi/w7ejDZ8SWv8/maxresdefault.jpg" },
  { id: "VfGW0Q7_Ek8", title: "Hum Tum - Episode 04 | Hum TV Drama", channel: "Hum TV", views: "30K", time: "1 week ago", img: "https://i.ytimg.com/vi/1TcYl34Rxao/hq720.jpg" },
  { id: "7Z6iWEmvsQI", title: "SAMAA News Headlines 11 AM | Live News", channel: "SAMAA TV", views: "10K", time: "6 days ago", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZzflAVICQjFluOKMWd0nrIheHrnLG93dHPA&ss" },
  { id: "m2qS0RZJ0QQ", title: "Coke Studio Pakistan | Season 15", channel: "Coke Studio Pakistan", views: "5K", time: "3 days ago", img: "https://i.ytimg.com/vi/RF0t8pS6xLo/hq720.jpg" },
  { id: "9f5U6kzN9D8", title: "Motu Patlu in Gold City | Full Movie", channel: "Wow Kidz", views: "12K", time: "2 days ago", img: "https://i.ytimg.com/vi/Ozpi9kcuqUQ/maxresdefault.jpg" },
  { id: "pB0wDSF3E8I", title: "Git & GitHub Tutorial for Beginners", channel: "Cooking Skills", views: "28K", time: "4 days ago", img: "https://img-c.udemycdn.com/course/750x422/3352204_9c9a_20.jpg" },
  { id: "pB0wDSF3E8I", title: "5 Amazing Potato Recipe by Food fusion", channel: "Food Fusion", views: "28K", time: "4 days ago", img: "https://i.ytimg.com/vi/auS412YhYYk/maxresdefault.jpg" },
  { id: "pB0wDSF3E8I", title: "Geo Headlines 8 PM | Latest Updates", channel: "Geo News", views: "28K", time: "4 days ago", img: "https://www.geo.tv/assets/uploads/updates/2025-09-05/l_video_thumb_image_1677450647.jpg" },
  { id: "pB0wDSF3E8I", title: "Kesi Teri Khudgharzi Episode 1 | Ary digital", channel: "Ary Digital", views: "28K", time: "4 days ago", img: "https://i.ytimg.com/vi/bCeO3EViVU0/hqdefault.jpg" }
];

// ✅ Example Shorts Data
const suggestedShorts = [
  { title: "Amazing trick shots!", url: "https://path_to_video.mp4", thumbnail: "https://i.ytimg.com/vi/QgLZMCSp5dI/hqdefault.jpg", channel: "CoolChannel" },
  { title: "Parwarish Drama Upcoming Ep 10s", url: "https://path_to_video2.mp4", thumbnail: "https://i.ytimg.com/vi/TWU-dlxDJpA/maxresdefault.jpg", channel: "CatLover" },
  { title: "Crispy Chicken Recipe by Food Fiusion", url: "https://path_to_video3.mp4", thumbnail: "https://i.ytimg.com/vi/gqj00Nl-YT0/hq720.jpg", channel: "Coding Journey" },
  { title: "To 4 Refreshing Iftar Drinks", url: "https://path_to_video2.mp4", thumbnail: "https://i.ytimg.com/vi/Ic2ppjCSZ6Q/hq720.jpg", channel: "CatLover" },
  { title: "Html Basics in 10 Minutes", url: "https://path_to_video2.mp4", thumbnail: "https://i.ytimg.com/vi/DzCsVWlPLEI/hqdefault.jpg", channel: "CatLover" },
  // { title: "Fitoor Drama Upcoming Episode 10", url: "https://path_to_video2.mp4", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsUYdPXX-BWVMdoRCS4-z630n-XIh5znsb3g&s", channel: "CatLover" },
  // { title: "Learn Javascript For Beginners", url: "https://path_to_video2.mp4", thumbnail: "https://i.ytimg.com/vi/XAMkViD_eQs/hq720.jpg", channel: "CatLover" },
  { title: "Tailwind Css Crash Course", url: "https://path_to_video2.mp4", thumbnail: "https://i.ytimg.com/vi/937RnJ38F40/hqdefault.jpg", channel: "CatLover" }
];

function App() {
  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white flex flex-col">
      {/* ✅ Fixed Top Header */}
      <Header />

      <div className="flex flex-1">
        {/* ✅ Sidebar (only md+ screens) */}
        <aside className="hidden md:block w-60 bg-[#181818] border-r border-zinc-800">
          <Sidebar />
        </aside>

        {/* ✅ Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home videos={suggestedVideos} shorts={suggestedShorts} />} />
            <Route path="/video/:id" element={<VideoPage videos={suggestedVideos} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
