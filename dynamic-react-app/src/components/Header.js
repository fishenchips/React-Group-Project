import React from 'react';
import NavBar from './NavBar';



export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        
          <h1 className='header1'>Sports Equipment</h1>
          <img src='/images/footballicon.png' width="100px" height="100px" alt=''></img>
        


      </div>

      <NavBar />
     
    </header>
  );
}
