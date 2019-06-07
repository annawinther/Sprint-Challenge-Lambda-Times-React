import React from 'react';
import pt from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
 if (props.tab)
  return (
    <div
      onClick={(tab) => {
        props.selectTabHandler(props.tab)
      } 
        /* Replace this dummy click handler function with your selectTabHandler function from props 
        you'll need to pass the `tab` in as an argument to this handler. */
      }
      className={ props.selected === props.selectedTab  ? 'tab active-tab' : 'tab'}
      
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tabData: pt.arrayOf(pt.string),
  tab: pt.string,
  selectedTab: pt.string,
  className: pt.string,
}

export default Tab;
