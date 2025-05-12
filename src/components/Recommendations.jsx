// components/Recommendations.jsx
import React from 'react';

const Recommendations = () => {
  const videos = [
    { title: 'Recommended Video 1', id: 'abc123' },
    { title: 'Recommended Video 2', id: 'def456' },
    { title: 'Recommended Video 3', id: 'ghi789' },
  ];

  return (
    <div className="recommendations">
      <h3>Up Next</h3>
      {videos.map((video, index) => (
        <div key={index} className="recommendation">
          <iframe
            width="100%"
            height="150"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
