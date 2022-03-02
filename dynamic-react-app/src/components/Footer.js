import React from 'react';
import styles from "../cssmodules/footer.module.css";
import Clock from './Clock';

function Footer() {
  return (
    <div className={styles.footer}>
        <div>Shopping info</div> 
        <div>Contact us</div>
        <div>Payment Methods</div>
        <Clock />
    </div>
  )
}

export default Footer