// Sidebar.js

import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../../imgs/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faRotate, faWallet, faChartColumn, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
      <FontAwesomeIcon
        icon={isMenuOpen ? faTimes : faBars} // Use faTimes when the menu is open, faBars when it's closed
        style={{ color: "#fff", fontSize: 35 ,}}
        onClick={toggleMenu}
      />
      {isMenuOpen && (
        <>
          <button className="sidebar-btn">
            <FontAwesomeIcon icon={faBorderAll} style={{ color: "#ffffff" }} />
          </button>
          <button className="sidebar-btn">
            <FontAwesomeIcon icon={faRotate} style={{ color: "#ffffff" }} />
          </button>
          <button className="sidebar-btn">
            <FontAwesomeIcon icon={faWallet} style={{ color: "#ffffff" }} />
          </button>
          <button className="sidebar-btn">
            <FontAwesomeIcon icon={faChartColumn} style={{ color: "#f8f9fc" }} />
          </button>
        </>
      )}
    </div>
  );
};

export default Sidebar;
