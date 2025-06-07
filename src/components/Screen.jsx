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
  const [sorted, setSorted] = useState(false);
  const [showAnimationText, setShowAnimationText] = useState(false);
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
        setSorted(true); 
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
          <h1 className="text">MergeSort Algorithm Visualizer</h1>
        </div>
        
        <div className="placeholder">
          <p></p>
        </div>
      </header>

      <div className="animation-section" ref={animationRef}>
        {!sorted && !runSort && <ArrayContainer array={array} />}
      </div>

      <div className="command-buttons">
        <p className="animation-in-progress-text" 
          style={{opacity: showAnimationText ? 1 : 0, transition: 'opacity 0.3s'}}>Animation in Progress Please Wait.</p>
        <div className="buttons">
          <button className="start-button" onClick={() => setRunSort(true)}>Start</button>
          <button className="reset-button" onClick={() => {
            if (runSort && !sorted) {
              setShowAnimationText(true);
              setTimeout(() => setShowAnimationText(false), 2000);
              return;
            }
            else if (resetArray.length === 0) {
              return;
            }
            else {
              setArray([...resetArray]);
              setSortedArray([]);
              setSorted(false);
              setRunSort(false);
              animationRef.current.innerHTML = "";
            }
            
            
            
          }}
          >Reset</button>
        </div>
      </div>
    </div>

  );
}

export default Screen