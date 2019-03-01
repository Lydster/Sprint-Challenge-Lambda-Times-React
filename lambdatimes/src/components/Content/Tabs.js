import React from 'react';
import Tab from './Tab';
import styles from 'styled-components'
import PropTypes from 'prop-types'

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

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired
}

// Make sure to use PropTypes to validate your types!
export default Tabs;
