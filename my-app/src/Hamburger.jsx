import React from 'react';
import Md1 from './mardown_loader'; // Adjust the import path according to your project structure

function hamburger() {
 return (
    <div>
      {/* <h1>Hamburger</h1> */}
      <Md1 fileName="Hamburger.md" />
    </div>
 );
}

export default hamburger;
