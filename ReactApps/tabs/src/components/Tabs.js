import React from 'react';
import { useState } from 'react';

const Tabs = (props) => {
  const {tabs, defaultIndex, selectedIndex, setSelectedIndex} = props;

  function clickHandler(index) {
      setSelectedIndex(index);
  }

  return (
    <div>
      {tabs.map((tab, index) =>(
        <button key={`tab${index}`} onClick={clickHandler(index)}>
    {tabs.icon}
    {tabs.label}
      
      </button>
      ))
}
    
   {tabs.map((tab, index) =>( 
      <section key={`tabpanel${index}`} hidden={selectedIndex !== index}>
        {tabs.content}
      </section>
    ))}
  
  </div>
  )
};

export default Tabs;