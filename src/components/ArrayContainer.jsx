import React from "react";
import ArrayBox from "./ArrayBox.jsx";

function ArrayContainer({ array }) {
  return (
    <div className="array-container">
      {array.map((val, index) => (
        <ArrayBox 
          key={index} value={val}>
        </ArrayBox>
      ))}
    </div>
  );
}

export default ArrayContainer;
