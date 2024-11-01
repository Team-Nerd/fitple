import React from 'react';
import Menti from './Menti';
import Category from '../Category';


function MentiManage() {
  return (
    <div className = "menti-manage">
      <Category />
        <Menti />
    </div>
  );
}

export default MentiManage;