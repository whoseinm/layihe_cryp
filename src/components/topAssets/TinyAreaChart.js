import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Page A', uv: 5000 },
  { name: 'Page B', uv: 2000 },
  { name: 'Page C', uv: 4000 },
  { name: 'Page D', uv: 3780 },
  { name: 'Page E', uv: 2890 },
  { name: 'Page F', uv: 1390 },
  { name: 'Page G', uv: 2490 },
];

const TinyAreaChart = () => {
  return (
    <ResponsiveContainer width={140} height={45}>
      <AreaChart data={data} margin={{ top: -10, right: 0, left: 0, bottom: 5 }}>
        <Area type="monotone" dataKey="uv" stroke="#DE2250" fill="#DE2250" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TinyAreaChart;
