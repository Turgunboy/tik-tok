import React, { useRef, useState } from "react";
import "./Videos.css";
import videos1 from "../video/KATTA ODAMLAR Ozod Shukurulloyev lyrics versiyasi_290121103136.mp4";
import VideoFooter from "./VideoFooter";
import VideoSitebar from "./VideoSitebar";

function Videos() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video_player"
        ref={videoRef}
        onClick={onVideoPress}
        loop
        src={videos1}
      />
      <VideoFooter
        desc={"this is description"}
        channel={"@Turgunboy"}
        song="rahman ya rahman"
      />
      <VideoSitebar likes={999} messages={222} share={500} />
    </div>
  );
}

export default Videos;
