import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

function Navbar() {
  return (
    <div className="container" data-testid="navbar">
      <div>
        <h1>Math Magicians</h1>
      </div>
      <div className="navbar">
        <div className="nav-item" data-testid="li">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-item" data-testid="li">
          <span className="nav-item">|</span>
          <Link to="/calculator">Calculator</Link>
        </div>
        <div className="nav-item" data-testid="li">
          <span className="nav-item">|</span>
          <Link to="/quote">Quote</Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
