import React from 'react';
import Register from './Register';
import MentoProfile from './MentoProfile';
import Category from '../Category';


function MentoApplication() {
  return (
    <div className = "mento-application">
      <Category />
        <Register />
        <MentoProfile />
    </div>
  );
}

export default MentoApplication;