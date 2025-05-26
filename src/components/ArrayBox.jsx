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