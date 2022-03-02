import React from 'react'
import {Link} from "react-router-dom"

function EmptyCheckout() {
  return (
    <div>
        <h1>Checkout</h1>
        <p>Your shopping cart is empty, please go back to our <Link to="/products">products</Link> page.</p>
    </div>
  )
}

export default EmptyCheckout