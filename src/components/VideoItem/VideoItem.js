import React from "react";
import styles from "./VideoItem.module.css";

function VideoItem({ video, setVideoHandler }) {
  return (
    <div onClick={() => setVideoHandler(video)} className={styles.container}>
      <div className={styles.videoComponent}>
        <h3 className={styles.videoTitle}>{video.snippet.title}</h3>
        <div className={styles.videoImage}>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
