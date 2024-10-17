import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";
import { fetchVideos } from "../utils/videosAPI";

function Home() {
  const [selected, setSelected] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos(`search?part=snippet&q=${selected}`).then((data) => {
      setVideos(data.items);
      console.log(data.items);
    });
  }, [selected]);

  return (
    <div className="grid grid-cols-[auto_1fr]">
      <Sidebar selected={selected} setSelected={setSelected} />
      <Videos videos={videos} />
    </div>
  );
}

export default Home;
