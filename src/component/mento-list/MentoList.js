import React from 'react';
import Header from '../Header';
import Search from '../Search';
import Footer from '../Footer';
import Category from '../Category';
import Mento from './Mento';

function MentoList() {
  return (
    <div className = "mento-list">
        <Header />
        <Search />
        <Footer />
        <Category />
        <Mento />
    </div>
  );
}

export default MentoList;
