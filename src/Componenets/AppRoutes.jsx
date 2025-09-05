import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import Subscriptions from "./pages/Subscriptions";
import Library from "./pages/Library";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/library" element={<Library />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
