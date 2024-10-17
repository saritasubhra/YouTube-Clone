import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
/* eslint-disable react/prop-types */
function Videos({ videos }) {
  if (!videos) return;
  videos = videos.filter((video) => !video.id?.playlistId);
  return (
    <aside className="p-8 grid grid-cols-3 gap-x-4 gap-y-8">
      {videos.map((video, i) => (
        <span key={i}>
          {video.id?.videoId && <VideoCard video={video} />}
          {video.id?.channelId && <ChannelCard channel={video} />}
        </span>
      ))}
    </aside>
  );
}

export default Videos;
