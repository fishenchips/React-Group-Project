import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Basket from './Basket';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Sports Equipment</h1>
        </a>
      </div>
      <div>   
            
          
        

        {/* <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '} */}
        {/* <a href="#/signin"> SignIn</a> */}
      </div>
    </header>
  );
}
