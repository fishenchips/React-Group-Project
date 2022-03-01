import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Footer from './components/Footer';
import Product from './pages/Product';
import Checkout from './pages/Checkout';

function App() {
  //create state here because both checkout.js and cart.js needs this.
  const [cartItems, setCartItems] = useState([])

  const updateCartItem = (updatedItem) => {
    
    //only updated to one product with the correct id.
    const updatedCart = cartItems.map( (product) => (
      product.id === updatedItem.id
        ? updatedItem
        : product
    ))

    setCartItems(updatedCart)
  }

  const deleteCartItem = (id) => {

    console.log("ID", id)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={ <Product /> } ></Route>
          <Route /* cartItems={cartItems} */ updateCartItem={updateCartItem} deleteCartItem={deleteCartItem} path="/checkout" element={ <Checkout />} ></Route>

        </Routes>


        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
