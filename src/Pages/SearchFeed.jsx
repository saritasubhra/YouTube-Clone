import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVideos } from "../utils/videosAPI";
import Videos from "../components/Videos";

function SearchFeed() {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
      console.log(data.items);
    });
  }, [searchTerm]);
  return (
    <div>
      <Videos videos={videos} />
    </div>
  );
}

export default SearchFeed;
