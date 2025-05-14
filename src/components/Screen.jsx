import { GiHamburgerMenu } from "react-icons/gi";
import React, {useState} from "react";
import NavBar from "./NavBar.jsx";
import ArrayBox from "./ArrayBox.jsx";
import MergeSort from "./MergeSort.jsx";

function Screen() {
  const [showNav, setShowNav] = useState(false);
  const [unsortedArray, setUnsortedArray] = useState([]);
  const [array, setArray] = useState([3,6,9,4,1,2,5,7,8,0]);
  const [runSort, setRunSort] = useState(false);

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

      <div className="animation-section">
        <div className="array-container">
          <ArrayBox inputArray={array}></ArrayBox>
        </div>
        {runSort && (<MergeSort inputArray={array} sortedArray={(arr) => setArray(arr)} runSort={runSort} 
          setRunSort={(state) => setRunSort(state)} setUnsortedArray={(unsorted) => setUnsortedArray(unsorted)}></MergeSort>)}
      </div>

      <div className="command-buttons">
        <button className="start-button" onClick={() => setRunSort(true)}>Start</button>
        <button className="stop-button">Stop</button>
        <button className="reset-button" onClick={() => {
          setArray(unsortedArray);
          setRunSort(false);
        }}>Reset</button>
      </div>
    </div>

  );
}

export default Screen