import React from 'react'
import {Link} from 'react-router-dom'
import Basket from './Basket'
 


function NavBar() {
  return (
    <nav>

      <ul >    
         
         <Link to="/">Home</Link>
         <Link to="/products"> Products </Link>
         <Link to="/cart"> Cart </Link>
         
        
      </ul>
    </nav>
  )
}

export default NavBar