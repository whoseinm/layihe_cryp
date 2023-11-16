// components/MyComponent.js
import React from 'react';
import './Balance.css';
import CustomPieChart from "../diagram/CustomPieChart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';


const Balance = () => {
  return (
    <div>
      <>
        <div className='title'>
          <span>Balance</span>
          <span style={{ fontSize: "25px", color: "#11C9BE", }}><FontAwesomeIcon icon={faArrowUp} style={{ fontSize: "18px", }} /> 0.53% </span>
        </div>

        <div className='price'>
          <span style={{ fontSize: "40px", }}>USD 12.243,55</span>
          <div className='income-expense'>
            <div className='part1'>
              <span style={{ color: '#5D6588', fontWeight: "lighter", fontSize: "25px", }}> <FontAwesomeIcon icon={faArrowDown} style={{ fontSize: "15px", margin: "0px 10px", color: "#11C9BE" }} /> Income</span>
              <br />
              <span style={{ fontWeight: "bold", }}>USD 12.243,55</span>
            </div>
            <div className='part2'>
              <span style={{ color: '#5D6588', fontWeight: "lighter", fontSize: "25px", }}> <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: "15px", margin: "0px 10px", color: "#FA2256" }} /> Expense</span>
              <br />
              <span style={{ fontWeight: "bold", }}>USD 3.132,23</span>
            </div>
          </div>


        </div>

        <div className='wallet'>
          <div className='title'>
            <span>Wallet</span>
            <span style={{ fontSize: "25px", color: "#5D6588", fontWeight: "lighter", }}>3 currencies</span>
          </div>

          <div className='currencies'>
            <div className="part1">
              <CustomPieChart />
            </div>
            <div className="part2"></div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Balance;
