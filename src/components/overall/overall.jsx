import React, {PureComponent} from 'react';
import BarChartWithMinHeight from './BarChartWithMinHeight';
import './overall.css'


const overall = () => {
  return (
    <div className="growth">
        <div className="top">
            <span style={{fontSize: "30px",}}>Overall Growth</span>
            <span className='button'>1 min</span>
            <span className='button'>3 min</span>
            <span className='button'>30 min</span>
            <span className='button'>1 hour</span>
            <span className='button'>24 hour</span>
            <span className='button'>1 day</span>
            <span className='button'>1 week</span>
        </div>

        <div className="chart">
            <BarChartWithMinHeight />
        </div>
        
    </div>

    
  );
};

export default overall;