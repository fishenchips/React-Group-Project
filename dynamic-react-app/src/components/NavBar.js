import React from 'react'
import styles from "../cssmodules/navbar.module.css";
import {FaShoppingCart} from "react-icons/fa";


function NavBar() {
  return (
    <section className={styles.navbar}>    
        <a href='/' className={styles.navbaritem}>Home</a>
        <a href='/Products' className={styles.navbaritem}>Products</a>
        <a href='/Shopping Cart' className={styles.navbaritem}><FaShoppingCart /></a>
       
    </section>
  )
}

export default NavBar