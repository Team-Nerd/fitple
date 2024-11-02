import React from 'react';
import Profile from './Profile';
import Recommendation from './Recommendation';
import './MainPage.css'
import { Link } from 'react-router-dom';
import Category from '../Category';

function MainPage() {
  return (
    <div className = "main-page">
      {/* <Link to="community-page" className = "ai-deperment-link" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className = "ai-depertment-button"></div>
      </Link> */}
      <Category />
      <Profile />
      <Recommendation />
  </div>
  );
}

export default MainPage;
