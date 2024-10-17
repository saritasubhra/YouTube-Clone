/* eslint-disable react/prop-types */

function ChannelCard({ channel }) {
  return (
    <div className="text-center">
      <span className="flex justify-center items-center">
        <img
          src={channel?.snippet?.thumbnails?.medium?.url}
          className="rounded-full h-44 w-44"
        />
      </span>
      <div>
        <h1 className="text-4xl font-bold">{channel?.snippet?.title}</h1>
        <p className="text-gray-500">
          <span>{channel?.snippet?.customUrl}</span>
          {" . "}
          <span>
            {channel?.statistics?.subscriberCount / 1000}K subscribers
          </span>
          {" . "}
          <span>{channel?.statistics?.videoCount} videos</span>
        </p>
      </div>
    </div>
  );
}

export default ChannelCard;
