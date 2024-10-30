import React, { useState } from 'react';
import './Post.css';
import ScrollableTable from './ScrollableTable';

function PostWrite() {
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
      <button className="write-button">글쓰기
        <img className='write_icon' src="write_icon.png" alt="write_icon" />
      </button>
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

export default PostWrite;
