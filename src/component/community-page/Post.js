import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
import ScrollableTable from './ScrollableTable';

const initialPosts = [
  { id: 1, category: '복전', title: '복수 학위 추천 하시나요?', author: '최지호', date: '24.09.23', views: 511, likes: 77, scrapes: 67 },
  { id: 2, category: '전과', title: '컴공 전과 컷 어느 정도임?', author: '박상준', date: '24.09.19', views: 492, likes: 73, scrapes: 60 },
  { id: 3, category: '졸업', title: '다들 대학원 가시나요?', author: '안효규', date: '24.09.12', views: 328, likes: 65, scrapes: 56 },
  { id: 4, category: '전과', title: '컴공으로 전과하고싶어요...', author: '임희원', date: '24.09.07', views: 309, likes: 54, scrapes: 53 },
  { id: 5, category: '복전', title: '복수 전공 질문', author: '윤성현', date: '24.09.01', views: 289, likes: 48, scrapes: 34 },
  { id: 6, category: '복전', title: '복수 전공 질문', author: '이동준', date: '24.08.28', views: 250, likes: 35, scrapes: 27 },
  { id: 7, category: '졸업', title: '전공 살려서 취직', author: '우연정', date: '24.08.23', views: 177, likes: 28, scrapes: 19 },
];

function Post() {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(1);

  // 새로운 게시물 불러오기
  const loadMorePosts = () => {
    const newPosts = initialPosts.map(post => ({
      ...post,
      id: post.id + posts.length,
      title: `${post.title} (page ${page + 1})`,
    }));
    setPosts(prevPosts => [...prevPosts, ...newPosts]);
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="post-container">
      <Link to="community-write" style={{textDecoration: 'none', color: 'inherit'}}>
        <button className="write-button">글쓰기
          <img className='write_icon' src="write-button-icon.png" alt="write_icon" />
        </button>
      </Link>
      <div className="community-page">
        <h2>전공별 커뮤니티</h2>
        <div className="communityCategory">
          카테고리: 인공지능공학과
        </div>
        <ScrollableTable posts={posts} loadMorePosts={loadMorePosts} />
      </div>
    </div>
  );
}

export default Post;

              // <Link to="/mento-list" className="category-mento-list" style={{ textDecoration: 'none', color: 'inherit' }}>
              //   멘토 목록 <span className="arrow">›</span>
              // </Link>