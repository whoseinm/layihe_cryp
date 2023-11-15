// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import profile from '../../imgs/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCaretDown, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setIsNotificationsOpen(false); // Close notifications when clicking on other parts
    };

    const toggleNotifications = () => {
        setIsNotificationsOpen(!isNotificationsOpen);
    };

    return (
        <div className="navbar-container">
            <div className="left-side">
                <span>Dashboard</span>
            </div>
            <div className="right-side">
                <div className="search-container">
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="search-icon"
                        style={{ marginRight: "10px", cursor: "pointer" }}
                    />
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="Search..."
                    />
                </div>
                <div className="notifications-container">
                    <FontAwesomeIcon
                        icon={faBell}
                        style={{ fontSize: 20, marginRight: 10, cursor: "pointer" }}
                        onClick={toggleNotifications}
                    />
                    {isNotificationsOpen && (
                        <div className="notifications-dropdown">
                            {/* Add your notification items here */}
                            <div className="notification-item">Notification 1</div>
                            <div className="notification-item">Notification 2</div>
                        </div>
                    )}
                </div>
                <span style={{ marginRight: "10px" }}>John Doe</span>
                <img className="profile-image" src={profile} style={{ objectFit: "cover" }} alt="Profile" />
                <div className="user-menu">
                    <div className="caret-down" onClick={toggleDropdown}>
                        <FontAwesomeIcon icon={faCaretDown} style={{ fontSize: 20 }} />
                    </div>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            <button onClick={() => console.log('Log Out Clicked')}>
                                <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: 10 }} />
                                Log Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
