import React, { useEffect, useRef, useState } from 'react';
import '../styles/ArrayBox.css';

function ArrayBox( {value}) {

    return(
        <div className="array-box"> 
            <p>{value}</p>
        </div>  
    );
}

export default ArrayBox