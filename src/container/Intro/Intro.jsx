import React, { useEffect, useRef } from "react";
import "./Intro.css";

const Intro = () => {
  let player;
  const videoRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    function onYouTubeIframeAPIReady() {
      player = new window.YT.Player("player", {
        height: "100%",
        width: "100%",
        videoId: "V_u74rcZ4u8",
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    }

    function onPlayerReady(event) {
      event.target.playVideo();
    }

    function onPlayerStateChange(event) {
      if (event.data === window.YT.PlayerState.ENDED) {
        player.playVideo();
      }
    }

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

    const videoOptions = {
      threshold: 0.5,
    };

    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (player.getPlayerState() !== window.YT.PlayerState.PLAYING) {
            player.playVideo();
          }
        } else {
          if (player.getPlayerState() === window.YT.PlayerState.PLAYING) {
            player.pauseVideo();
          }
        }
      });
    }, videoOptions);

    videoObserver.observe(videoRef.current);

    return () => {
      if (player) {
        player.destroy();
      }
      videoObserver.disconnect();
    };
  }, []);

  const handleFullScreen = () => {
    const videoContainer = document.getElementById("player");
    videoContainer.requestFullscreen();
  };

  return (
    <div className="app__video" ref={videoRef}>
      <div id="player" className="video-container"></div>
      <button onClick={handleFullScreen}>Fullscreen</button>
    </div>
  );
};

export default Intro;
