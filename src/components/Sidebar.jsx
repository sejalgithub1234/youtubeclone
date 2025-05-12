import React from 'react';
import {
  MdHome,
  MdOutlineSubscriptions,
  MdHistory,
  MdPlaylistPlay,
  MdThumbUp,
} from 'react-icons/md';
import { FaYoutube, FaRegCompass } from 'react-icons/fa';
import { PiVideoFill } from 'react-icons/pi';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>
          <MdHome size={22} style={styles.icon} />
          Home
        </li>
        <li style={styles.menuItem}>
          <FaRegCompass size={22} style={styles.icon} />
          Shorts
        </li>
        <li style={styles.menuItem}>
          <MdOutlineSubscriptions size={22} style={styles.icon} />
          Subscriptions
        </li>
      </ul>

      <hr style={styles.divider} />

      <ul style={styles.menu}>
        <li style={styles.menuItem}>
          <MdHistory size={22} style={styles.icon} />
          History
        </li>
        <li style={styles.menuItem}>
          <MdPlaylistPlay size={22} style={styles.icon} />
          Playlists
        </li>
        <li style={styles.menuItem}>
          <MdThumbUp size={22} style={styles.icon} />
          Liked Videos
        </li>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '240px',
    background: '#202020',
    color: '#fff',
    height: '100vh',
    padding: '1rem 0.5rem',
    boxSizing: 'border-box',
  },
  menu: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.75rem 1rem',
    cursor: 'pointer',
    fontSize: '0.95rem',
    transition: 'background 0.2s',
  },
  icon: {
    marginRight: '1rem',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #444',
    margin: '1rem 0',
  },
};

export default Sidebar;
