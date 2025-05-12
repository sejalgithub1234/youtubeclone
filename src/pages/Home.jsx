import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import FilterBar from '../components/FilterBar';
import VideoGrid from '../components/VideoGrid';
import LoginPrompts from '../components/LoginPrompt';

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const loginEmail = sessionStorage.getItem('login_email');
  //const loginEmail = ""
  console.log(loginEmail)

  return (
    <div>
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div style={{ display: 'flex' }}>
        {sidebarOpen && <Sidebar />}
        <div style={{ flex: 1, padding: '1rem' }}>
          {loginEmail && <FilterBar />}
          {loginEmail && <VideoGrid />}
          {!loginEmail && <LoginPrompts/>}
        </div>
      </div>
    </div>
  );
};

export default Home;
