// App.js

import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import CustomPieChart from "../diagram/CustomPieChart";
import Balance from './components/balance/Balans';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">

          <div className='header'>
            <Navbar />
          </div>

          <div className='content'>
            <div className='balance-part'>
              <Balance />
              <CustomPieChart />
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default App;
