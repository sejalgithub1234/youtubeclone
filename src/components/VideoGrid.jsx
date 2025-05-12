import React from 'react';
import VideoCard from './VideoCard';
import cssimg from '../assets/css.jfif'; // Import the local image
import jsimg from '../assets/js1.jpeg';
import html from '../assets/html.jfif';
import langchain from '../assets/langchain.jpg';
import mongodb from '../assets/mongodb.png';
import modejs from '../assets/nodejs1.jfif';
import react from '../assets/react.png';

const sampleVideos = [
  {
    videoId: 'video01',
    title: 'CSS for Bignners',
    thumbnailUrl: cssimg, // Use local image
    uploader: 'Sejal Choubey',
    views: 15200,
    avtartext: "SJ"
  },
  {
    videoId: 'video02',
    title: 'Advanced JS Concepts',
    thumbnailUrl: jsimg, // Use local image
    uploader: 'JS for all',
    views: 24000,
    avtartext: "JS"
  },
  {
    videoId: 'video03',
    title: 'HTML Explained',
    thumbnailUrl: html, // Use local image
    uploader: 'My HTML',
    views: 108732,
    avtartext: "HTML"
  },
  {
    videoId: 'video03',
    title: 'Langchain?',
    thumbnailUrl: langchain, // Use local image
    uploader: 'Genovator',
    views: 320094,
    avtartext: "GN"
  },
  {
    videoId: 'video03',
    title: 'MongoDB Explained',
    thumbnailUrl: mongodb, // Use local image
    uploader: 'mg db',
    views: 23443645,
    avtartext: "MG"
  },
  {
    videoId: 'video03',
    title: 'node js keya hai?',
    thumbnailUrl: modejs, // Use local image
    uploader: 'Node Master',
    views: 17845700,
    avtartext: "NM"
  },
  {
    videoId: 'video03',
    title: 'React Hooks Explained',
    thumbnailUrl: react, // Use local image
    uploader: 'ReactMaster',
    views: 5446767,
    avtartext: "ST"
  }
];

const VideoGrid = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {sampleVideos.map((video) => (
        <VideoCard key={video.videoId} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;
