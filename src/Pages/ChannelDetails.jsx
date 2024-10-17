import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { fetchVideos } from "../utils/videosAPI";
import ChannelCard from "../components/ChannelCard";
import Videos from "../components/Videos";

function ChannelDetails() {
  const [channel, setChannel] = useState({});
  const [videos, setVideos] = useState([]);
  const { channelId } = useParams();

  useEffect(() => {
    fetchVideos(`channels?part=snippet&id=${channelId}`).then((data) => {
      setChannel(data?.items[0]);
    });
    fetchVideos(`search?channelId=${channelId}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [channelId]);

  return (
    <div className="p-8">
      <ChannelCard channel={channel} />
      <Videos videos={videos} />
    </div>
  );
}

export default ChannelDetails;
