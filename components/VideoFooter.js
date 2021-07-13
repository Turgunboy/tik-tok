import { MusicNote } from "@material-ui/icons";
import React from "react";
import * as FiIcon from "react-icons/fi";
import "./VideoFooter.css";

function VidepFooter({ desc, song, channel }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>{channel}</h3>
        <h5>{desc}</h5>
        <div className="songs">
          <MusicNote /> <p>{song}</p>
        </div>
      </div>
      <div>
        <FiIcon.FiDisc className="videoFooter_logo" />
      </div>
    </div>
  );
}

export default VidepFooter;
