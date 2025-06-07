import React, { useEffect, useRef, useState } from 'react';

function ArrayBox( {value}) {

    return(
        <div className="array-box"> 
            <p>{value}</p>
        </div>  
    );
}

export default ArrayBox