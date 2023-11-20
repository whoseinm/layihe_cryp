// components/MyComponent.js
import React, { PureComponent } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip, Sector } from 'recharts';
import './Balance.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faRotate } from '@fortawesome/free-solid-svg-icons';

import Bitcoin from "../../imgs/Bitcoin.png";
import ETH from "../../imgs/ETH.png";
import USDT from "../../imgs/USDT.png";
import USD from "../../imgs/USD.png";

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

class Balance extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={"#30E0A1"}
        />
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#FFFFFF">
          <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: "15px", margin: "0px 10px", color: "#11C9BE" }} />2.31%
        </text>
      </g>
    );
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div>
        <>
          <div className='title'>
            <span>Balance</span>
            <span style={{ fontSize: "25px", color: "#11C9BE", }}><FontAwesomeIcon icon={faArrowUp} style={{ fontSize: "18px", }} /> 0.53% </span>
          </div>

          <div className='price'>
            <span style={{ fontSize: "40px", marginLeft: "-5px",}}>USD 12.243,55</span>
            <div className='income-expense'>
              <div className='part1'>
                <span style={{ color: '#5D6588', fontWeight: "lighter", fontSize: "25px", }}> <FontAwesomeIcon icon={faArrowDown} style={{ fontSize: "15px", color: "#11C9BE" }} /> Income</span>
                <br />
                <span style={{ fontWeight: "bold", }}>USD 12.243,55</span>
              </div>
              <div className='part2'>
                <span style={{ color: '#5D6588', fontWeight: "lighter", fontSize: "25px", }}> <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: "15px",  color: "#FA2256" }} /> Expense</span>
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
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Tooltip />
                    <Pie
                      activeIndex={activeIndex}
                      activeShape={this.renderActiveShape}
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                      onMouseEnter={this.onPieEnter}
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === activeIndex ? '#BD47FB' : '#BD47FB'} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="part2">
                <div className="part_of_part2">
                  <div className="img_part">
                    <img src={Bitcoin} alt="btc" />
                  </div>
                  <div className="text_part">
                    <div className="text_part1">BTC <span style={{ color: "#11C9BE", }}><FontAwesomeIcon icon={faArrowUp} style={{ fontSize: "15px", color: "#11C9BE" }} /> 2.36%</span> </div>
                    <div className="text_part2">Bitcoin</div>
                  </div>
                </div>
                <div className="part_of_part2">
                  <div className="img_part">
                    <img src={ETH} alt="" />
                  </div>
                  <div className="text_part">
                    <div className="text_part1">ETH <span style={{ color: "#11C9BE", }}><FontAwesomeIcon icon={faArrowUp} style={{ fontSize: "15px", color: "#11C9BE" }} /> 1.80%</span> </div>
                    <div className="text_part2">Bitcoin</div>
                  </div>
                </div>
                <div className="part_of_part2">
                  <div className="img_part">
                    <img src={USDT} alt="" />
                  </div>
                  <div className="text_part">
                    <div className="text_part1">USDT <span style={{ color: "#11C9BE", }}><FontAwesomeIcon icon={faArrowUp} style={{ fontSize: "15px", color: "#11C9BE" }} /> 1.64%</span> </div>
                    <div className="text_part2">Tether</div>
                  </div>
                </div>
              </div>


            </div>

            <div className="part3">
                <div className="title">
                  <span>Exchange</span>
                  <FontAwesomeIcon icon={faRotate} style={{color: "#ffffff",}} />
                </div>

                <form>
                <div className="exchange">
                  <div className="ex_part1">
                    <input type="number" className='inp1' placeholder='1000'/>
                    <select name="currency" className="inp2">
                      <option value="USD">USD</option>
                      <option value="AZN">AZN</option>
                      <option value="TRY">TRY</option>
                    </select>
                  </div>
                  <div className="ex_part2">
                  <input type="number" className='inp1' placeholder='0.074153'/>
                    <select name="currency" className="inp2">
                      <option value="BTC">BTC</option>
                      <option value="ETH">ETH</option>
                      <option value="USDT">USDT</option>
                    </select>
                  </div>

                  <div className="submitBtn">
                    <button type='submit'>Exchange</button>
                  </div>
                </div>
                </form>


              </div>
          </div>
        </>
      </div>
    );
  }
}

export default Balance;
