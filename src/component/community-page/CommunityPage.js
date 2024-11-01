import React from 'react';
import { Link } from 'react-router-dom';
import './CommunityPage.css';
import Category from '../Category';


function CommunityPage() {
  return (
    <div className = "app-container">
      <Category />
        <img className = "community-page-img" src = '/community-page-image.png'></img>
        <Link to="/community-write" style={{textDecoration: 'none', color: 'inherit'}}>
          <div className='community-writing-btn'></div>
        </Link>
    </div>
  );
}

export default CommunityPage;