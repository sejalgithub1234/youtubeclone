import React from 'react';
import { FaBars, FaSearch, FaVideo, FaBell, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate(); // Create a navigation function
  const loginEmail = sessionStorage.getItem('login_email');

  return (
    <header style={styles.header}>
      <div style={styles.leftSection}>
        <button onClick={toggleSidebar} style={styles.iconButton}>
          <FaBars size={20} />
        </button>
        <h1 style={styles.logo}>YouTube Clone</h1>
      </div>

      <div style={styles.searchSection}>
        <input type="text" placeholder="Search" style={styles.searchInput} />
        <button style={styles.searchButton}>
          <FaSearch />
        </button>
      </div>

      <div style={styles.rightSection}>
        <FaVideo style={styles.icon} />
        <FaBell style={styles.icon} />
        {!loginEmail && <FaUserCircle style={styles.icon} onClick={() => navigate('/login')} />}
        {loginEmail && <h3>Hello, {loginEmail}</h3>}
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    background: '#202020',
    color: '#fff',
    justifyContent: 'space-between',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginLeft: '1rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  iconButton: {
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
  },
  searchSection: {
    display: 'flex',
    flex: 1,
    maxWidth: '600px',
    margin: '0 1rem',
  },
  searchInput: {
    flex: 1,
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderTopLeftRadius: '2px',
    borderBottomLeftRadius: '2px',
  },
  searchButton: {
    padding: '0.5rem 1rem',
    background: '#303030',
    border: '1px solid #ccc',
    borderLeft: 'none',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px',
    color: '#fff',
    cursor: 'pointer',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  icon: {
    cursor: 'pointer',
  },
};

export default Header;
