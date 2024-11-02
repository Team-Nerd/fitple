import React from 'react';
import Register from './Register';
import MentoProfile from './MentoProfile';
import { Link } from 'react-router-dom';
import Category from '../Category';


function MentoApplication() {
  return (
    <div className = "mento-application">
      <Category />
        <Register />
        <MentoProfile />
        <Link to="/mento-list" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="mento-apply-btn"></div>
        </Link>
    </div>
  );
}

export default MentoApplication;