import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './admin/Header';
import Sidebar from './admin/Sidebar';
import Home from './admin/Dashboard';


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  useEffect(() => {
    document.title = "ADMIN MOVIX"; // Judul baru halaman
  }, []);

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Home />
    </div>
  );
}

export default App;
