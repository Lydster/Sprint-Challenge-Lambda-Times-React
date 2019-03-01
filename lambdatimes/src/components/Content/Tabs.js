import React from 'react';
import Tab from './Tab';


const Tabs = props => {
  console.log(props)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        <div>
        {props.tabs.map((tab, idx) => {
          return <Tab tab={tab} key={idx} />
        })}
        </div>
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
