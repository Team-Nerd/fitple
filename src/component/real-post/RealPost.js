import React from 'react';
import './RealPost.css';
import Category from '../Category';


function RealPost() {
  return (
    <div className="real-post-container">
      <Category />
        <img className = "real-post-img" src = '/real-post.png'></img>
    </div>
  );
}

export default RealPost;