import React from 'react'
import styles from "../cssmodules/navbar.module.css";


function NavBar() {
  return (
    <section className={styles.navbar}>    
        <a href='/' className={styles.navbaritem}>Home</a>
        <a href='/Products' className={styles.navbaritem}>Products</a>
        <a href='/Shopping Cart' className={styles.navbaritem}>Shopping Cart</a>
    </section>
  )
}

export default NavBar