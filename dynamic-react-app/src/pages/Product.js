import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import styles from "../cssmodules/product.module.css"
import {motion} from "framer-motion";

function Product() {
    const params = useParams();
    const [product, setProduct] = useState({}) //start with empty object

    const fetchData = async() => {
        try {
            const response = await fetch("https://codexplained.se/sportstuff.php?id=234967") //hardcoded for now
            const data = await response.json()

            console.log("does this work", data)
            setProduct(data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect( () => {
        fetchData();
    }, []) //empty array meaning useEffect() only runs at componentDidMount

  return (
    <article className={styles.productPage}>
        <motion.h2  
            className={styles.productTitle}
            initial={{
                y: "-10vh",
                scale: 0.1
            }}
            animate={{
                y: 0,
                scale: 1.7
            }}
            transition= {{
                duration: 2
            }}
        >
            {product.title}
        </motion.h2>
        <div className={styles.productWrapper}>
            <motion.div 
                className={styles.imgDiv}
                initial={{
                    x: "-35vw",
                    scale:0.1
                }}
                animate={{
                    x: 0,
                    scale: 1
                }}
                transition= {{
                    duration: 2
                }}

            >
                <img className={styles.img} src={product.url}/>
            </motion.div>
            <div className={styles.productAside}>
                <h3>{product.price} SEK</h3>
                <button className={styles.cartBtn}>add to cart</button>
                <p>{product.storage} items in stock. </p>
            </div>
        </div>
        <div>
            <p>{product.description}</p>
            <p>Article number {product.id}</p>
        </div>
    </article>
  )
}

export default Product