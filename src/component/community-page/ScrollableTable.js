// ScrollableTable.js
import React, { useEffect } from 'react';
import './ScrollableTable.css';

function ScrollableTable({ posts, loadMorePosts }) {
  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      loadMorePosts();
    }
  };

  return (
    <div className="post-table-wrapper" onScroll={handleScroll}>
      <table>
        <thead>
          <tr>
            <th>주제</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>등록일</th>
            <th>조회수</th>
            <th>추천</th>
            <th>스크랩</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.category}</td>
              <td>{post.title}</td>
              <td>{post.author}</td>
              <td>{post.date}</td>
              <td>{post.views}</td>
              <td>{post.likes}</td>
              <td>{post.scrapes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScrollableTable;
