import React from 'react';
import './CategorySubMenu.css';

function CategorySubMenu({ subMenus, isVisible }) {
  if (!isVisible || !subMenus) return null;

  return (
    <div className="sub-menu">
      {subMenus.map(({ name, url }) => (
        <a key={name} href={url} className="sub-menu-item" target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      ))}
    </div>
  );
}

export default CategorySubMenu;
