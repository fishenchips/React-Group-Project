import React, {useState, useEffect} from 'react'

function Products() {
  const [product, setProduct] = useState([]) //start with empty object

    const fetchData = async() => {
        try {
            const response = await fetch("https://codexplained.se/sportstuff.php") 
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
    <div>Products</div>
  )
}

export default Products