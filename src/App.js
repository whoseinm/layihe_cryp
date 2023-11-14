// App.js

import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <h1>Welcome to Your Crypto Dashboard</h1>
        {/* Add more content here */}
      </div>
    </div>
  );
}

export default App;
