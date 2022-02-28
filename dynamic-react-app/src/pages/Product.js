import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import styles from "../cssmodules/product.module.css"
import {motion} from "framer-motion";
import {FaShoppingCart} from "react-icons/fa";
import {headerSlide, imgSlide, asideSlide, infoSlide} from "../animations"

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
            initial="start"
            animate="end"
            variants={headerSlide}
        >
            {product.title}
        </motion.h2>
        <div className={styles.productWrapper}>
            <motion.div 
                className={styles.imgDiv}
                initial="start"
                animate="end"
                variants={imgSlide}
            >
                <img className={styles.img} src={product.url}/>
            </motion.div>
            <motion.div 
                className={styles.productAside}
                initial="start"
                animate="end"
                variants={asideSlide}
            >
                <h3>{product.price} SEK</h3>
                <button className={styles.cartBtn}> <FaShoppingCart /> </button>
                <p>{product.storage} items in stock. </p>
            </motion.div>
        </div>
        <motion.div
            initial="start"
            animate="end"
            variants={infoSlide}

        >
            <p>{product.description}</p>
            <p>Article number {product.id}</p>
        </motion.div>
    </article>
  )
}

export default Product