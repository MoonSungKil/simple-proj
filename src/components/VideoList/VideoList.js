import React from "react";
import styles from "./VideoList.module.css";
import VideoItem from "../VideoItem/VideoItem";

function VideoList({ videos, setVideoHandler }) {
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        setVideoHandler={setVideoHandler}
      />
    );
  });
  return <div className={styles.videoListContainer}>{renderedVideos}</div>;
}

export default VideoList;
