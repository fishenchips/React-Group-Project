import React from 'react';
import NavBar from './NavBar';



export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Sports Equipment</h1>
        </a>


      </div>

      <NavBar />
     
    </header>
  );
}
