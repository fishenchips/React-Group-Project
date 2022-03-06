import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import styles from "../cssmodules/product.module.css"
import {motion} from "framer-motion";
import {headerSlide, imgSlide, asideSlide, infoSlide, pChild, button} from "../animations"


//?id=234967

function Product( { onAdd } ) {
    const params = useParams();
    const [product, setProduct] = useState({}) //start with empty object

    const fetchData = async() => {
        try {
            const response = await fetch("https://codexplained.se/sportstuff.php?id=" + params.id) //hardcoded for now
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

    console.log("product", product)
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
        <Link to="/checkout">hello</Link>
        {params.id}
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
                <h3 className={styles.productPrice}>{product.price} SEK</h3>
                <motion.button    
                    className={styles.cartBtn}
                    whileHover="hover"
                    whileTap="press"
                    variants={button}
                    onClick={ ()=> onAdd(product)}          
                >
                    Add to cart
                </motion.button>
                <p>{product.storage} items in stock. </p>
            </motion.div>
        </div>
        <motion.div
            initial="start"
            animate="end"
            variants={infoSlide}
        >
            <motion.p
                initial={{
                    y: "30vw",
                    scale: 0.1,
                }}
                animate={{
                    y: 0,
                    scale: 1,
                }}
                transition={{
                    duration: 2
                }}
            >
                    {product.description}
            </motion.p>
            <motion.p
                initial="start"
                animate="end"
                variants={pChild}
            >
                Article number {product.id}
            </motion.p>
        </motion.div>
    </article>
  )
}

export default Product