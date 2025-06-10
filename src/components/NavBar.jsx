import '../styles/navbar.css'
import { AiOutlineClose } from 'react-icons/ai';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar( {className, closeNav} ) {
  return(
    <div className={`sidenav ${className}`}>
      <ul>
        <li>
          <Link to="/">Merge-Sort</Link>
        </li>
        <li>
          <Link to="/BubbleSort">Bubble-Sort</Link>
        </li>
        <li>
          <Link to="/SelectionSort">Selection Sort</Link>
        </li>
        <li>
          <Link to="/">DFS</Link>
        </li>
      </ul>
      <AiOutlineClose className='close-icon' onClick={closeNav}></AiOutlineClose>
    </div>
  );
}

export default NavBar