// BarChartWithMinHeight.js

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts';
import './overall.css'

const data = [
  {
    name: '04',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '05',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '06',
    uv: 2000,
    pv: 1000,
    amt: 2290,
  },
  {
    name: '07',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '08',
    uv: 18,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '09',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '10',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '11',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    <g>
      <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
        {value.split(' ')[1]}
      </text>
    </g>
  );
};

const BarChartWithMinHeight = () => {
  return (
    <ResponsiveContainer width={1200} height={400} className="rechartResponsive">
      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
          <LabelList dataKey="name" content={renderCustomizedLabel} />
        </Bar>
        <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartWithMinHeight;
