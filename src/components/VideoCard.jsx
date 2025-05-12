import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (
    <div style={styles.card}>
      <Link to="/watch" style={styles.thumbnailContainer}>
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          style={styles.thumbnail}
        />
      </Link>
      <div style={styles.info}>
        <div style={styles.avatar}>
          <span style={styles.avatarText}>{video.avtartext}</span>
        </div>
        <div>
          <h4 style={styles.title}>{video.title}</h4>
          <p style={styles.meta}>{video.uploader}</p>
          <p style={styles.meta}>{video.views} views</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '100%',
    maxWidth: '320px',
    margin: '1rem',
    cursor: 'pointer',
  },
  thumbnailContainer: {
    width: '100%',
    aspectRatio: '16 / 9',
    overflow: 'hidden',
    borderRadius: '8px',
    textDecoration: 'none', // Ensures no default link styling
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  info: {
    display: 'flex',
    marginTop: '0.75rem',
  },
  avatar: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
    marginRight: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#000',
  },
  avatarText: {
    color: '#000',
  },
  title: {
    fontSize: '1rem',
    fontWeight: '500',
    margin: '0 0 0.25rem 0',
    color: '#000',
  },
  meta: {
    fontSize: '0.85rem',
    color: '#606060',
    margin: 0,
  },
};

export default VideoCard;
