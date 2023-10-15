import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import imgPlayButton from "../images/icons/icons8-circled-play-64.png";
const Player = () => {
  const { id } = useParams();
  const getSRCVideo = (id) => {
    return `https://embed.smashystream.com/playere.php?tmdb=${id}`;
  };
  return (
    <div>
      <div className="video-wrapper position-relative">
        <iframe
          style={{ zIndex: 999 }}
          className="iframe"
          src={getSRCVideo(id)}
        ></iframe>
      </div>
    </div>
  );
};

export default Player;
