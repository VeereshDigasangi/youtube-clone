import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_LIST_API } from "../util/constants";
import VideoCard from "./VideoCard";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  async function getVideos() {
    const data = await fetch(YOUTUBE_VIDEO_LIST_API);
    const json = await data.json();
    setVideos(json.items);
  }

  return (
    videos.length && (
      <div className="flex flex-wrap">
        {videos.map((video) => (
          <VideoCard key={video.id} info={video} />
        ))}
      </div>
    )
  );
};

export default VideoContainer;
