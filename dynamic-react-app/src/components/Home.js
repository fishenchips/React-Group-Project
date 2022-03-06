import React from 'react'
import Main from './Main'
import Basket from './Basket'

function Home(props) {
const { cartItems,products, onAdd, onRemove } = props;

  return (
    <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
  )
}

export default Home