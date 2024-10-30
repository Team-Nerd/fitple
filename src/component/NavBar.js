import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/mento-list">멘토 리스트</Link></li>
        <li><Link to="/community-page">커뮤니티 페이지</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
