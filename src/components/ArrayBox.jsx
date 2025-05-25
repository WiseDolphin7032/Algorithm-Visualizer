import React, { useEffect, useState } from 'react';
import '../styles/arrayBox.css'

function ArrayBox( {inputArray, splits} ) {
    return(
        <div>
          <div className="array-level">
            {inputArray.map((item, _) => (
              <div className='array-box' key={item.id}>
                <p>{item.value}</p>
              </div>
            ))}
          </div>

          {splits.map((split, index) => (
            <div className='array-level' key={index}>
              {split.elements.map((value, i) => {
                let name = 'array-box';
                if (split.side === 'left') {
                  name += ' slide-left';
                }
                else if (split.side === 'right') {
                  name += ' slide-right';
                }
                console.log("Rendering split", index, split);
                return (
                  <div className={name} key={i}>
                    <p>{value.value ?? value}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>  
    );
}

export default ArrayBox