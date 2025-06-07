import React from "react";
import ArrayBox from "./ArrayBox.jsx";

function ArrayContainer({ array }) {
  return (
    <div className="array-container" style={{position: "absolute", top: "60px", left: "50%", transform: "translateX(calc(-50% + 0px))"}}>
      {array.map((val, index) => (
        <ArrayBox 
          key={index} value={val}>
        </ArrayBox>
      ))}
    </div>
  );
}

export default ArrayContainer;
