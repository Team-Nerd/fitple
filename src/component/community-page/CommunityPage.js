import React from 'react';
import Header from '../Header';
import Search from '../Search';
import Footer from '../Footer';
import Category from '../Category';
import Post from './Post';

function CommunityPage() {
  return (
    <div className = "app-container">
        <Header />
        <Search />
        <Category />
        <Footer />
        <Post />
    </div>
  );
}

export default CommunityPage;