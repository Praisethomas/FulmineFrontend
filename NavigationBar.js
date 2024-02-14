// Example: NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Group27.png'; // Adjust the path accordingly
import './style.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className='nav-link'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className='nav-link'>About</Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/ServicePage" className='nav-link'>Our Services</Link>
        </li>  */}
        {/* Add more navigation links */}
      </ul>
    </nav>
  );
};

export default NavigationBar;

