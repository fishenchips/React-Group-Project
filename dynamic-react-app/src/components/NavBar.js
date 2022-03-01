import React from 'react'
import styles from "../cssmodules/navbar.module.css";
import {FaShoppingCart} from "react-icons/fa";
import {Link} from 'react-router-dom'
 


function NavBar() {
  return (
    <nav>

      <ul className={styles.navbar}>    
         
         <Link to="/" className={styles.navbaritem}>Home</Link>
         <Link to="/products" className={styles.navbaritem} > Products </Link>
         <Link to="/cart" className={styles.navbaritem}> <FaShoppingCart /> </Link>
         
        
      </ul>
    </nav>
  )
}

export default NavBar