import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

function VideoCard({ video }) {
  if (!video) return;
  const {
    id: { videoId },
    snippet: {
      channelId,
      channelTitle,
      title,
      thumbnails: { high },
    },
  } = video;
  return (
    <div>
      <Link to={`/videos/${videoId}`}>
        <img src={high.url} className="rounded-lg aspect-video object-cover" />
      </Link>
      <div className="pt-2.5">
        <Link to={`/videos/${videoId}`}>
          <p className="font-semibold">{title}</p>
        </Link>
        <Link to={`/channels/${channelId}`}>
          <p className="text-xs">{channelTitle}</p>
        </Link>
      </div>
    </div>
  );
}

export default VideoCard;
