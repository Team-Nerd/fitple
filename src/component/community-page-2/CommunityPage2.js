import React from 'react';
import { Link } from 'react-router-dom';
import './CommunityPage2.css';
import Category from '../Category';

function CommunityPage2() {
  return (
    <div className = "app-container">
      <Category />
        <img className = "community-page2-img" src = '/community-page2-image.png'></img>
        <Link to="/community-write" style={{textDecoration: 'none', color: 'inherit'}}>
          <div className='community-writing-btn'></div>
        </Link>
        <Link to="/real-post-page" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className = "real-post-btn"></div>
        </Link>
    </div>
  );
}

export default CommunityPage2;