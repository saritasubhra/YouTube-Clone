import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVideos } from "../utils/videosAPI";
import Videos from "../components/Videos";

function VideoDetails() {
  const [videoDetails, setVideoDetails] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { videoId } = useParams();
  useEffect(() => {
    fetchVideos(`videos?part=snippet,statistics&id=${videoId}`).then((data) => {
      setVideoDetails(data.items[0]);
      console.log(data.items[0]);
    });
    fetchVideos(
      `search?part=snippet&relatedToVideoId=${videoId}&type=video`
    ).then((data) => {
      setRelatedVideos(data.items);
      console.log(data.items);
    });
  }, [videoId]);

  return (
    <div>
      <Videos videos={relatedVideos} />
    </div>
  );
}

export default VideoDetails;
