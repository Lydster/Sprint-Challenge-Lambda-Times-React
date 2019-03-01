import React from 'react';
import Tab from './Tab';
import styles from 'styled-components'

const StyledTabs = styles.div`
  display: flex;

`

const Tabs = props => {
  console.log(props)
  return (
    <div className="tabs">
      <div className="topics">
        <span>TRENDING TOPICS:</span>
          <StyledTabs>
          {props.tabs.map((tab, idx) => {
            return <Tab tab={tab} key={idx} selected={props.selected} changeSelected={props.changeSelected}/>
          })}
          </StyledTabs>
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
