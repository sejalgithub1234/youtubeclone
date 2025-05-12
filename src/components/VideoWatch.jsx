// components/VideoWatch.jsx
import React from 'react';
import './Watch.css'

const VideoWatch = () => {
  return (
    <div className="video-watch">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>Video Title</h2>
      <p>Channel Name • 1M views • 1 day ago</p>
    </div>
  );
};

export default VideoWatch;
