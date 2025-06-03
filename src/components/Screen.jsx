import { GiHamburgerMenu } from "react-icons/gi";
import React, {useState, useEffect, useRef} from "react";
import NavBar from "./NavBar.jsx";
import ArrayContainer from "./ArrayContainer.jsx";
import mergeSort from "../logic/mergeSort.js";
function Screen() {
  const [showNav, setShowNav] = useState(false);
  const [array, setArray] = useState([3, 6, 9, 4, 1, 2, 5, 7, 8, 0]);
  const [resetArray, setResetArray] = useState([]); 
  const [sortedArray, setSortedArray] = useState([]);

  
  const [runSort, setRunSort] = useState(false);
  const [stopAnimation, setStopAnimation] = useState(false);
  const animationRef = useRef();

  useEffect(() => {
    if (runSort && animationRef.current) {
      const run = async () => {
        animationRef.current.innerHTML = "";
        setResetArray([...array]);
        const test = await mergeSort(array, 0, array.length - 1, animationRef.current);
        const returnedArray = Array.from(test.querySelectorAll('.array-box p')).map(el => parseInt(el.textContent));
        setSortedArray(returnedArray);

        setRunSort(false); 
      };

      if ((resetArray.length === 0 && sortedArray.length === 0) || !equalArrays(resetArray, sortedArray)) {
        run();
      }
      
    }
  }, [runSort])


  function equalArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const resetSorted = [...arr1].sort((a, b) => a - b);
    for (let i = 0; i < resetSorted.length; i++) {
      if (resetSorted[i] !== arr2[i]) return false;
    }
    return true;
  }

  return( 
    <div className="screen">
      <NavBar className={showNav ? "active" : ""} closeNav = {() => setShowNav(false)} onArrayChange={(arr) => setArray(arr)}></NavBar>
      <header className="header">
        <div className="menu">
          <GiHamburgerMenu
            className="panel-button" 
            onClick={() => {setShowNav(!showNav)}}>
          </GiHamburgerMenu>
        </div>
        
        <div className="title">
          <h1 className="text">Shayaan's Algorithm Visualizer</h1>
        </div>
        
        <div className="placeholder">
          <p></p>
        </div>
      </header>

      <div className="animation-section" ref={animationRef}>
        {!runSort && <ArrayContainer array={array} />}
      </div>

      <div className="command-buttons">
        <button className="start-button" onClick={() => setRunSort(true)}>Start</button>
        <button className="stop-button">Stop</button>
        <button className="reset-button" onClick={() => {
          if (runSort) {
            document.querySelector('.command-buttons').innerHTML += "<p class='error'>Animation in Progress Please Wait.</p>";
            return;
          }

          setArray([...resetArray]);
          setSortedArray([]);
          setRunSort(false);
        }}
        >Reset</button>
      </div>
    </div>

  );
}

export default Screen