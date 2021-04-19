import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import VideoList from "../VideoList/VideoList";
import VideoPlaying from "../VideoPlaying/VideoPlaying";
import styles from "./MiniYoutube.module.css";
import axios from "axios";

function MiniYoutube() {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(videos[0]);

  useEffect(() => {
    searchSubmitHandler("React Js");
  }, []);

  useEffect(() => {
    setVideo(videos[0]);
  }, [videos]);

  const searchSubmitHandler = async (term) => {
    const response = await axios(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          part: "snippet",
          key: "AIzaSyDAZE9Qa5Wh6_Hfbd9NZv5F9n7isa36FbE",
          type: "video",
          maxResults: 5,
          q: term,
        },
      }
    );
    setVideos(response.data.items);
    setVideo(videos[0]);
  };

  return (
    <div>
      <SearchBar searchSubmitHandler={searchSubmitHandler} />
      <div className={styles.gridLayout}>
        <div className={styles.firstGrid}>
          <VideoPlaying video={video} />
        </div>
        <div className={styles.secondGrid}>
          <VideoList setVideoHandler={setVideo} videos={videos} />
        </div>
      </div>
    </div>
  );
}

export default MiniYoutube;
