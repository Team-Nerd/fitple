import React from 'react';
import { Link } from 'react-router-dom';
import './CommunityWrite.css';
import Category from '../Category';


function CommunityWrite() {
  return (
    <div className="post-container">
      <Category />
      <img className = "major-community-title" src="/major-community.png"></img>
      <div className="title-and-buttons">
        {/* 제목 입력란 */}
        <input
          type="text"
          placeholder="제목을 입력해주세요."
          className="WriteTitle"
        />
        {/* 버튼 영역 */}
        <button className="save-button">임시저장</button>
        <Link to="/community-page2" style={{ textDecoration: 'none', color: 'inherit' }}>
          <button className="submit-button">게시글 작성</button>
        </Link>
      </div>  

      <div className="content-and-upload">
          {/* 글 작성 박스 */}
        <div className="content-box">
          <div className="content-assist">나눔고딕 24px B I</div>
          <div className="Postcontent">
            <textarea placeholder="글의 내용을 입력해주세요." />
          </div>
        </div>

          {/* 파일 업로드 박스 */}
        <div className="file-upload-box">
          <p>파일 첨부</p>
          <div className="upload-area">
            파일을 마우스로 끌어오세요.
            <span className="upload-icon">⬆️</span>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default CommunityWrite;