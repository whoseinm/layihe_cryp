// Sidebar.js

import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../../imgs/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faRotate, faWallet, faChartColumn } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
      <img src={logo} width={60} height={60} alt="Logo" />
      <button className="menu-btn" onClick={toggleMenu}>
        Menu
      </button>
      <button className={`sidebar-btn ${isMenuOpen ? 'hide' : ''}`}>
        <FontAwesomeIcon icon={faBorderAll} style={{ color: "#ffffff" }} />
      </button>
      <button className={`sidebar-btn ${isMenuOpen ? 'hide' : ''}`}>
        <FontAwesomeIcon icon={faRotate} style={{ color: "#ffffff" }} />
      </button>
      <button className={`sidebar-btn ${isMenuOpen ? 'hide' : ''}`}>
        <FontAwesomeIcon icon={faWallet} style={{ color: "#ffffff" }} />
      </button>
      <button className={`sidebar-btn ${isMenuOpen ? 'hide' : ''}`}>
        <FontAwesomeIcon icon={faChartColumn} style={{ color: "#f8f9fc" }} />
      </button>
    </div>
  );
};

export default Sidebar;
