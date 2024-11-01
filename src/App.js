import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CommunityPage from './component/community-page/CommunityPage';
import MainPage from './component/main-page/MainPage';
import MentoList from './component/mento-list/MentoList';
import MentiManage from './component/menti-manage/MentiManage';
import MentoApplication from './component/mento-application/MentoApplication';
import MentoChat from './component/mento-chat/MentoChat';
import CommunityWrite from './component/community-write/CommunityWrite';
import CommunityPage2 from './component/community-page-2/CommunityPage2';
import RealPost from './component/real-post/RealPost';
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
          <Route path="/menti-manage" element={<MentiManage />} />
          <Route path="/mento-application" element={<MentoApplication />} />
          <Route path="/mento-chat" element={<MentoChat />} />
          <Route path="/community-page2" element={<CommunityPage2 />} />
          <Route path="/real-post-page" element={<RealPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
