import React from 'react';
import Mento from './Mento';
import Category from '../Category';


function MentoList() {
  return (
    <div className = "mento-list">
      <Category />
        <Mento />
    </div>
  );
}

export default MentoList;
