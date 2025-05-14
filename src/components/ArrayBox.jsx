import { useEffect, useState } from 'react';
import '../styles/arrayBox.css'

function ArrayBox( {inputArray} ) {
    return(
        <>
            {inputArray.map((value, index) => (
                <div className='array-box' key={index}>
                    <p>{value}</p>
                </div>
            ))}
        </>
        
        
    );
}

export default ArrayBox