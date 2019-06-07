import React from 'react';
import Tab from './Tab';
import pt from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {props.tabs.map((tab, index) => {
              return (
              <Tab 
              key={index}
              selectTabHandler={props.selectTabHandler}
              selectedTab={props.selectedTab}
              tab={tab}
              />
              )
            }
              
            )}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.PropType = {
  tabs: pt.arrayOf(pt.string),
  tab: pt.string,
  selectedTab: pt.string,
  selectTabHandler:pt.func,

}

export default Tabs;
