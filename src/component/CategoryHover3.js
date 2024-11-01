import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

function CategoryHover3() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="Hover">
      <div 
        className={`HoverText3 ${isHovered ? 'hovered' : ''}`} 
        onMouseEnter={() => setIsHovered(true)}  
        onMouseLeave={() => setIsHovered(false)}
        style={{ position: 'absolute', top: '190px', left: '1000px', width: '190px', height: '32px' }}
      >
        멘티
        {isHovered && (
          <div className="hover-box3">
            <div> 나의 멘토 <span className="arrow">›</span></div>
            <div> 찜해둔 멘토 <span className="arrow">›</span></div>
            <div>
              <Link to="/mento-chat" className="category-mento-chat" style={{ textDecoration: 'none', color: 'inherit' }}>
                멘토 멘티 채팅방 <span className="arrow">›</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryHover3;