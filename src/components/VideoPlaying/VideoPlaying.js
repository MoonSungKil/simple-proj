import React from "react";
import styles from "./VideoPlaying.module.css";

function VideoPlaying({ video }) {
  if (!video) {
    return <div className={styles.loader}></div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <iframe
          className={styles.videoIframe}
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title={video.snippet.title}
        />
        <div className={styles.videoTitle}>
          <h3>{video.snippet.title}</h3>
        </div>
        <div className={styles.videoDescription}>
          <h5>{video.snippet.description}</h5>
        </div>
      </div>
    </div>
  );
}

export default VideoPlaying;
