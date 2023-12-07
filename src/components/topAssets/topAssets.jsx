import React from 'react';
import './topAssets.css'
import AreaChartComponent from './TinyAreaChart';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

import Bitcoin from "../../imgs/Bitcoin.png";
import ETH from "../../imgs/ETH.png";
import Recieve from "../../imgs/recieve.png";
import Send from "../../imgs/send.png";
import USDT from "../../imgs/USDT.png";
import USD from "../../imgs/USD.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const data = [
  { name: 'Page A', uv: 5000 },
  { name: 'Page B', uv: 2000 },
  { name: 'Page C', uv: 4000 },
  { name: 'Page D', uv: 3780 },
  { name: 'Page E', uv: 2890 },
  { name: 'Page F', uv: 1390 },
  { name: 'Page G', uv: 2490 },
];

const topAssets = () => {
  return (

    <>
      <div className='leftSide'>
        <div className="AssetName">
          <span>
            Top Assets
          </span>
        </div>

        <div className="coins">
          <div className="coinName">
            <div className="imgPart">
              <img src={Bitcoin} width={25} height={25} style={{ borderRadius: "50%", objectFit: "contain", }} alt="" />
            </div>
            <div className="PriceAndName">
              <div className="Price">USD 53,260.20</div>
              <div className="Name">Bitcoin</div>
            </div>
            <div className="ChartAndPercent">
              <div className="TinyChart">
                <AreaChartComponent />
              </div>
              <div className="Percent">
                <span style={{ color: "#FA2256", display: "flex", marginLeft: "80px", fontWeight: "bold", }}><FontAwesomeIcon icon={faArrowDown} style={{ fontSize: "15px", color: "#FA2256" }} /> 1.80%</span>
              </div>
            </div>
          </div>

          <div className="coinName">
            <div className="imgPart">
              <img src={ETH} width={25} height={25} style={{ borderRadius: "50%", objectFit: "contain", }} alt="" />
            </div>
            <div className="PriceAndName">
              <div className="Price">USD 12,344.12</div>
              <div className="Name">Etherium</div>
            </div>
            <div className="ChartAndPercent">
              <div className="TinyChart">
                <ResponsiveContainer width={140} height={45}>
                  <AreaChart data={data} margin={{ top: -10, right: 0, left: 0, bottom: 5 }}>
                    <Area type="monotone" dataKey="uv" stroke="#11C9BE" fill="#11C9BE" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="Percent">
                <span style={{ color: "#11C9BE", display: "flex", marginLeft: "80px", fontWeight: "bold", }}><FontAwesomeIcon icon={faArrowUp} style={{ fontSize: "15px", color: "#11C9BE" }} /> 2.22%</span>
              </div>
            </div>
          </div>

          <div className="coinName">
            <div className="imgPart">
              <img src={Bitcoin} width={25} height={25} style={{ borderRadius: "50%", objectFit: "contain", }} alt="" />
            </div>
            <div className="PriceAndName">
              <div className="Price">USD 53,260.20</div>
              <div className="Name">Bitcoin</div>
            </div>
            <div className="ChartAndPercent">
              <div className="TinyChart">
                <AreaChartComponent />
              </div>
              <div className="Percent">
                <span style={{ color: "#FA2256", display: "flex", marginLeft: "80px", fontWeight: "bold", }}><FontAwesomeIcon icon={faArrowDown} style={{ fontSize: "15px", color: "#FA2256" }} /> 1.80%</span>
              </div>
            </div>
          </div>

          <div className="coinName">
            <div className="imgPart">
              <img src={ETH} width={25} height={25} style={{ borderRadius: "50%", objectFit: "contain", }} alt="" />
            </div>
            <div className="PriceAndName">
              <div className="Price">USD 12,344.12</div>
              <div className="Name">Etherium</div>
            </div>
            <div className="ChartAndPercent">
              <div className="TinyChart">
                <ResponsiveContainer width={140} height={45}>
                  <AreaChart data={data} margin={{ top: -10, right: 0, left: 0, bottom: 5 }}>
                    <Area type="monotone" dataKey="uv" stroke="#11C9BE" fill="#11C9BE" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="Percent">
                <span style={{ color: "#11C9BE", display: "flex", marginLeft: "80px", fontWeight: "bold", }}><FontAwesomeIcon icon={faArrowUp} style={{ fontSize: "15px", color: "#11C9BE" }} /> 2.22%</span>
              </div>
            </div>
          </div>

          <div className="coinName">
            <div className="imgPart">
              <img src={Bitcoin} width={25} height={25} style={{ borderRadius: "50%", objectFit: "contain", }} alt="" />
            </div>
            <div className="PriceAndName">
              <div className="Price">USD 53,260.20</div>
              <div className="Name">Bitcoin</div>
            </div>
            <div className="ChartAndPercent">
              <div className="TinyChart">
                <AreaChartComponent />
              </div>
              <div className="Percent">
                <span style={{ color: "#FA2256", display: "flex", marginLeft: "80px", fontWeight: "bold", }}><FontAwesomeIcon icon={faArrowDown} style={{ fontSize: "15px", color: "#FA2256" }} /> 1.80%</span>
              </div>
            </div>
          </div>

          <div className="coinName">
            <div className="imgPart">
              <img src={ETH} width={25} height={25} style={{ borderRadius: "50%", objectFit: "contain", }} alt="" />
            </div>
            <div className="PriceAndName">
              <div className="Price">USD 12,344.12</div>
              <div className="Name">Etherium</div>
            </div>
            <div className="ChartAndPercent">
              <div className="TinyChart">
                <ResponsiveContainer width={140} height={45}>
                  <AreaChart data={data} margin={{ top: -10, right: 0, left: 0, bottom: 5 }}>
                    <Area type="monotone" dataKey="uv" stroke="#11C9BE" fill="#11C9BE" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="Percent">
                <span style={{ color: "#11C9BE", display: "flex", marginLeft: "80px", fontWeight: "bold", }}><FontAwesomeIcon icon={faArrowUp} style={{ fontSize: "15px", color: "#11C9BE" }} /> 2.22%</span>
              </div>
            </div>
          </div>

          <div className="coinName">
            <div className="imgPart">
              <img src={Bitcoin} width={25} height={25} style={{ borderRadius: "50%", objectFit: "contain", }} alt="" />
            </div>
            <div className="PriceAndName">
              <div className="Price">USD 53,260.20</div>
              <div className="Name">Bitcoin</div>
            </div>
            <div className="ChartAndPercent">
              <div className="TinyChart">
                <AreaChartComponent />
              </div>
              <div className="Percent">
                <span style={{ color: "#FA2256", display: "flex", marginLeft: "80px", fontWeight: "bold", }}><FontAwesomeIcon icon={faArrowDown} style={{ fontSize: "15px", color: "#FA2256" }} /> 1.80%</span>
              </div>
            </div>
          </div>

          <div className="coinName">
            <div className="imgPart">
              <img src={ETH} width={25} height={25} style={{ borderRadius: "50%", objectFit: "contain", }} alt="" />
            </div>
            <div className="PriceAndName">
              <div className="Price">USD 12,344.12</div>
              <div className="Name">Etherium</div>
            </div>
            <div className="ChartAndPercent">
              <div className="TinyChart">
                <ResponsiveContainer width={140} height={45}>
                  <AreaChart data={data} margin={{ top: -10, right: 0, left: 0, bottom: 5 }}>
                    <Area type="monotone" dataKey="uv" stroke="#11C9BE" fill="#11C9BE" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="Percent">
                <span style={{ color: "#11C9BE", display: "flex", marginLeft: "80px", fontWeight: "bold", }}><FontAwesomeIcon icon={faArrowUp} style={{ fontSize: "15px", color: "#11C9BE" }} /> 2.22%</span>
              </div>
            </div>
          </div>

          <div className="coinName">
            <div className="imgPart">
              <img src={Bitcoin} width={25} height={25} style={{ borderRadius: "50%", objectFit: "contain", }} alt="" />
            </div>
            <div className="PriceAndName">
              <div className="Price">USD 53,260.20</div>
              <div className="Name">Bitcoin</div>
            </div>
            <div className="ChartAndPercent">
              <div className="TinyChart">
                <AreaChartComponent />
              </div>
              <div className="Percent">
                <span style={{ color: "#FA2256", display: "flex", marginLeft: "80px", fontWeight: "bold", }}><FontAwesomeIcon icon={faArrowDown} style={{ fontSize: "15px", color: "#FA2256" }} /> 1.80%</span>
              </div>
            </div>
          </div>

          <div className="coinName">
            <div className="imgPart">
              <img src={ETH} width={25} height={25} style={{ borderRadius: "50%", objectFit: "contain", }} alt="" />
            </div>
            <div className="PriceAndName">
              <div className="Price">USD 12,344.12</div>
              <div className="Name">Etherium</div>
            </div>
            <div className="ChartAndPercent">
              <div className="TinyChart">
                <ResponsiveContainer width={140} height={45}>
                  <AreaChart data={data} margin={{ top: -10, right: 0, left: 0, bottom: 5 }}>
                    <Area type="monotone" dataKey="uv" stroke="#11C9BE" fill="#11C9BE" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="Percent">
                <span style={{ color: "#11C9BE", display: "flex", marginLeft: "80px", fontWeight: "bold", }}><FontAwesomeIcon icon={faArrowUp} style={{ fontSize: "15px", color: "#11C9BE" }} /> 2.22%</span>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className='rightSide'>
      <div className="AssetName">
          <span>
            Transaction
          </span>
        </div>

        <div className="transactions">
          <div className="transactionName">
            <div className="imgPart">
              <img src={Send} width={40} height={40} style={{ borderRadius: "50%", objectFit: "contain", }} alt="" />
            </div>
            <div className="TransacitonAndName">
              <div className="Date">May, 6th 2021</div>
              <div className="Name">Receive</div>
            </div>
            <div className="CoinAndId">
              <div className="Coin">
                <span style={{color:"#11C9BE", marginLeft: 20,}}>0.442111 </span>BTC
              </div>
              <div className="Id">
                <span>ID: 21naSAN214532</span>
              </div>
            </div>
          </div>

          <div className="transactionName">
            <div className="imgPart">
              <img src={Recieve} width={40} height={40} style={{ borderRadius: "50%", objectFit: "contain", }} alt="" />
            </div>
            <div className="TransacitonAndName">
              <div className="Date">May, 6th 2021</div>
              <div className="Name">Send</div>
            </div>
            <div className="CoinAndId">
              <div className="Coin">
                <span style={{color:"#FA2256", marginLeft: 20,}}>0.442111 </span>BTC
              </div>
              <div className="Id">
                <span>ID: 21naSAN214532</span>
              </div>
            </div>
          </div>

          <div className="transactionName">
            <div className="imgPart">
              <img src={Send} width={40} height={40} style={{ borderRadius: "50%", objectFit: "contain", }} alt="" />
            </div>
            <div className="TransacitonAndName">
              <div className="Date">May, 6th 2021</div>
              <div className="Name">Receive</div>
            </div>
            <div className="CoinAndId">
              <div className="Coin">
                <span style={{color:"#11C9BE", marginLeft: 20,}}>0.442111 </span>BTC
              </div>
              <div className="Id">
                <span>ID: 21naSAN214532</span>
              </div>
            </div>
          </div>

          <div className="transactionName">
            <div className="imgPart">
              <img src={Recieve} width={40} height={40} style={{ borderRadius: "50%", objectFit: "contain", }} alt="" />
            </div>
            <div className="TransacitonAndName">
              <div className="Date">May, 6th 2021</div>
              <div className="Name">Send</div>
            </div>
            <div className="CoinAndId">
              <div className="Coin">
                <span style={{color:"#FA2256", marginLeft: 20,}}>0.442111 </span>BTC
              </div>
              <div className="Id">
                <span>ID: 21naSAN214532</span>
              </div>
            </div>
          </div>

          <div className="transactionName">
            <div className="imgPart">
              <img src={Send} width={40} height={40} style={{ borderRadius: "50%", objectFit: "contain", }} alt="" />
            </div>
            <div className="TransacitonAndName">
              <div className="Date">May, 6th 2021</div>
              <div className="Name">Receive</div>
            </div>
            <div className="CoinAndId">
              <div className="Coin">
                <span style={{color:"#11C9BE", marginLeft: 20,}}>0.442111 </span>BTC
              </div>
              <div className="Id">
                <span>ID: 21naSAN214532</span>
              </div>
            </div>
          </div>

          <div className="transactionName">
            <div className="imgPart">
              <img src={Recieve} width={40} height={40} style={{ borderRadius: "50%", objectFit: "contain", }} alt="" />
            </div>
            <div className="TransacitonAndName">
              <div className="Date">May, 6th 2021</div>
              <div className="Name">Send</div>
            </div>
            <div className="CoinAndId">
              <div className="Coin">
                <span style={{color:"#FA2256", marginLeft: 20,}}>0.442111 </span>BTC
              </div>
              <div className="Id">
                <span>ID: 21naSAN214532</span>
              </div>
            </div>
          </div>

          <div className="transactionName">
            <div className="imgPart">
              <img src={Send} width={40} height={40} style={{ borderRadius: "50%", objectFit: "contain", }} alt="" />
            </div>
            <div className="TransacitonAndName">
              <div className="Date">May, 6th 2021</div>
              <div className="Name">Receive</div>
            </div>
            <div className="CoinAndId">
              <div className="Coin">
                <span style={{color:"#11C9BE", marginLeft: 20,}}>0.442111 </span>BTC
              </div>
              <div className="Id">
                <span>ID: 21naSAN214532</span>
              </div>
            </div>
          </div>

          <div className="transactionName">
            <div className="imgPart">
              <img src={Recieve} width={40} height={40} style={{ borderRadius: "50%", objectFit: "contain", }} alt="" />
            </div>
            <div className="TransacitonAndName">
              <div className="Date">May, 6th 2021</div>
              <div className="Name">Send</div>
            </div>
            <div className="CoinAndId">
              <div className="Coin">
                <span style={{color:"#FA2256", marginLeft: 20,}}>0.442111 </span>BTC
              </div>
              <div className="Id">
                <span>ID: 21naSAN214532</span>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </>

  );
};

export default topAssets;