import React from 'react';
import Header from '../Header';
import Search from '../Search';
import Footer from '../Footer';
import Profile from './Profile';
import Recommendation from './Recommendation';
import Category from '../Category';

function MainPage() {
  return (
    <div className = "main-page">
        <Header />
        <Search />
        <Category />
        <Footer />
        <Profile />
        <Recommendation />
  </div>
  );
}

export default MainPage;
