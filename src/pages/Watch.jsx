// components/VideoWatch.jsx
//import React from 'react';
import React, { useState } from 'react';
//import VideoWatch from '../components/VideoWatch';
import Comments from '../components/Comments';
import Recommendations from '../components/Recommendations';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import FilterBar from '../components/FilterBar';
import VideoGrid from '../components/VideoGrid';


const VideoWatch = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div>
            <div>
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div style={{ display: 'flex' }}>
        {sidebarOpen && <Sidebar />}
        <div style={{ flex: 1, padding: '1rem' }}>
        </div>
      </div>
    </div>
    <div className="video-watch">
        <div style={{ width: '70%', margin: '0 auto' }}>
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
      <Comments />
        </div>
        <Recommendations />
    </div>
    </div>
  );
};

export default VideoWatch;
