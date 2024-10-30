import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CommunityPage from './component/community-page/CommunityPage';
import MainPage from './component/main-page/MainPage';
import MentoList from './component/mento-list/MentoList';
import CommunityWrite from './component/community-write/CommunityWrite';
import NavBar from './component/NavBar';
import Header from './component/Header';
import Search from './component/Search';
import Category from './component/Category';
import Footer from './component/Footer';

function App() {
  <NavBar /> 
  return (
    <Router>
      <Header />
      <Search />
      <Category />
      <Footer />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} /> {/* 메인 페이지 */}
          <Route path="/community-page" element={<CommunityPage />} /> {/* community 페이지 */}
          <Route path="/mento-list" element={<MentoList />} /> {/* mento-list 페이지 */}
          <Route path="/community-write" element={<CommunityWrite />} /> { }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
