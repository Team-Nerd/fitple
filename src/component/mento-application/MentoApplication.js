import React from 'react';
import Register from './Register';
import Profile from '../main-page/Profile';

function MentoApplication() {
  return (
    <div className = "mento-application">
        <Register />
        <Profile />
    </div>
  );
}

export default MentoApplication;