/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect } from 'react'
import styles from "../cssmodules/products.module.css";

function Products() {
    const [products,setProducts] = useState([]);
    const fetchData = async()=> {
       try{ 
        const response = await fetch('https://codexplained.se/sportstuff.php');
        const data = await response.json();
        console.log(data);
        setProducts(data);
       } catch(error) {
        console.log(error); 
       }
    }

    useEffect(()=>{
        fetchData();
    }, [])
  return (
    <div className={styles.container}>
        <h1>Products</h1>
        <div>
         {
             products.map((product)=>(
                 <><section className={styles.card} key={product.id}>
                        <img src={product.url} alt={product.description} width='30%' height='30%'></img>
                        <h1>{product.title}</h1>
                        <h3>{product.price}SEK</h3>                        
                        <p>{product.description}</p>
                        <button className={styles.addtocartbutton}>Add to Cart</button>              
                    </section></>
                

             ))
         }
         </div>
    </div>
  )
}

export default Products