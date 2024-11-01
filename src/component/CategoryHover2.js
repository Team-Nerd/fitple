import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

function CategoryHover2() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="Hover">
      <div 
        className={`HoverText2 ${isHovered ? 'hovered' : ''}`} 
        onMouseEnter={() => setIsHovered(true)}  
        onMouseLeave={() => setIsHovered(false)}
        style={{ position: 'absolute', top: '190px', left: '650px', width: '150px', height: '32px' }}
      >
        멘토
        {isHovered && (
          <div className="hover-box2">
            <div className = "category-mento-apply"> 멘토 신청 <span className="arrow">›</span></div>
            <div>
              <Link to="/mento-list" className="category-mento-list" style={{ textDecoration: 'none', color: 'inherit' }}>
                멘토 목록 <span className="arrow">›</span>
              </Link>
            </div>
            <div>
              <Link to="/menti-manage" className="category-menti-manage" style={{ textDecoration: 'none', color: 'inherit' }}>
                멘티 관리 <span className="arrow">›</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryHover2;