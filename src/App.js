import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CommunityPage from './component/community-page/CommunityPage';
import MainPage from './component/main-page/MainPage';
import MentoList from './component/mento-list/MentoList';
import NavBar from './component/NavBar';

function App() {
  <NavBar /> 
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} /> {/* 메인 페이지 */}
          <Route path="/community-page" element={<CommunityPage />} /> {/* community 페이지 */}
          <Route path="/mento-list" element={<MentoList />} /> {/* mento-list 페이지 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
