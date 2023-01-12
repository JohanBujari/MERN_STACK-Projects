import React, { useState } from "react";
const BoxList = (props) => {
  const { boxColor } = props;
  return (
    <div>
      {boxColor.map((color, index) => (
        <div
          key={index}
          style={{
            display: "inline-block",
            margin: "10px",
            height: "50px",
            width: "50px",
            backgroundColor: color,
          }}
        >
        
        </div>
      ))}
    </div>
  );
};

export default BoxList;
