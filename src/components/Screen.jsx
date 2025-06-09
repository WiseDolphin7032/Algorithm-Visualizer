import { GiHamburgerMenu } from "react-icons/gi";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar.jsx";
import { Outlet, useLocation } from "react-router-dom";

function Screen() {
  const [showNav, setShowNav] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowNav(false);
  }, [location.pathname]);

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/': 
        return 'MergeSort Algorithm Visualizer'
      case '/BubbleSort':
        return 'BubbleSort Algorithm Visualizer'
      default: 
        return 'Algorithm Visualizer'
    }
  };

  return( 
    <div className="screen">
      <NavBar className={showNav ? "active" : ""} closeNav = {() => setShowNav(false)}></NavBar>
      <header className="header">
        <div className="menu">
          <GiHamburgerMenu
            className="panel-button" 
            onClick={() => {setShowNav(!showNav)}}>
          </GiHamburgerMenu>
        </div>
        
        <div className="title">
          <h1 className="text">{getPageTitle()}</h1>
        </div>
        
        <div className="settings">
          <HiAdjustmentsHorizontal 
          className="settings-button"
          onClick={() => {setShowSettings(!showSettings)}}>
          </HiAdjustmentsHorizontal>
        </div>
      </header>

      <main>
        <Outlet context={{ showSettings, setShowSettings }}/>
      </main>
    </div>

  );
}

export default Screen