import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

function Navbar() {
  return (
    <div className="container">
      <div>
        <h1>Math Magicians</h1>
      </div>
      <div className="navbar">
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-item">
          <span className="nav-item">|</span>
          <Link to="/calculator">Calculator</Link>
        </div>
        <div className="nav-item">
          <span className="nav-item">|</span>
          <Link to="/quote">Quote</Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
