import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import styles from "../cssmodules/product.module.css"

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
        <h2 className={styles.productTitle}>{product.title}</h2>
        <div className={styles.productWrapper}>
            <div className={styles.imgDiv}>
                <img className={styles.img} src={product.url}/>
            </div>
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