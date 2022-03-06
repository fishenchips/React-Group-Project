import React from 'react'
import NavBar from './NavBar'
import styles from "../cssmodules/header.module.css";



function Header() {
  return (
    <section className='header'>
        <section className={styles.logo}>
            <img src='/images/footballicon.png' alt=''></img>
        </section>
        <section className='nav-bar'>
            {<NavBar />}
            
        </section>
    </section>
  )
}

export default Header