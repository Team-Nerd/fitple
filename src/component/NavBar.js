import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/"></Link></li>
        <li><Link to="/mento-list"></Link></li>
        <li><Link to="/community-page"></Link></li>
        <li><Link to="/community-write"></Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
