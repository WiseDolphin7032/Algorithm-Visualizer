import React, { useEffect, useRef, useState } from 'react';
import '../styles/arrayBox.css'

function ArrayBox( {inputArray, splits} ) {
    const spacing = 35;

    return(
        <div>
          <div className="array-level">
            {inputArray.map((item, i) => (
              <div 
              className='array-box' 
              key={item.id} 
              style={{left: `${item.position * spacing}px`}}
              >
                <p>{item.value}</p>
              </div>
            ))}
          </div>

          {splits.map((split, index) => (
            <div className='array-level' key={index}>
              {split.left.elements.map((value, i) => (
                
                <div className='array-box slide-left' key={`l${i}`}>
                  <p>{value.value ?? value}</p>
                </div>
              ))}
              {split.right.elements.map((value, i) => (
                <div className='array-box slide-right' key={`r${i}`}>
                  <p>{value.value ?? value}</p>
                </div>
              ))}
            </div>
          ))}
        </div>  
    );
}

export default ArrayBox