import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';


const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
          {props.tabs.map((tab, i) => {
            return (
              <Tab
                selectTabHandler={props.selectTabHandler}
                selectedTab={props.selectedTab}
                tab={tab}
                key={i}
              />
            )
          })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectTabHandler: PropTypes.func,
  selectTab: PropTypes.string
}

export default Tabs;
