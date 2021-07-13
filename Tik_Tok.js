import React from "react";
import Video from "./components/Videos";
import "./Tik_Tok.css";

function Tik_Tok() {
  return (
    <div className="tik_tok">
      <div className="container">
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default Tik_Tok;
