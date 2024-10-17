import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import VideoDetails from "./Pages/VideoDetails";
import ChannelDetails from "./Pages/ChannelDetails";
import SearchFeed from "./Pages/SearchFeed";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<VideoDetails />} />
        <Route path="/channels/:channelId" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
