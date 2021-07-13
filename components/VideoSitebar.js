import { Favorite, FavoriteBorder, Message, Share } from "@material-ui/icons";
import React, { useState } from "react";
import "./VideoSitebar.css";

function VideoSitebar({ likes, messages, share }) {
  const [like, setlike] = useState(false);
  return (
    <div className="video_sitebar">
      <div className="sitebar_button">
        {like ? (
          <Favorite fontSize="large" onClick={(e) => setlike(false)} />
        ) : (
          <FavoriteBorder fontSize="large" onClick={(e) => setlike(true)} />
        )}

        <p>{like ? likes + 1 : likes}</p>
      </div>{" "}
      <div className="sitebar_button">
        <Message />
        <p>{messages}</p>
      </div>
      <div className="sitebar_button">
        <Share />
        <p>{share}</p>
      </div>
    </div>
  );
}

export default VideoSitebar;
