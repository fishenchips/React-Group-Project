//Phillips code copied
 import React from 'react';
 import styles from "../cssmodules/footer.module.css";
 import Clock from './clock';


 function Footer() {
   return (
     <div className={styles.footer}>
         <div>Shopping info</div> 
         <div>Contact us</div>
         <div>Payment Methods</div>
         <div><Clock /></div>
     </div>
   )
 } 

 export default Footer