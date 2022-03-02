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
import Products from './pages/Products';


function App() {

  //Dummy data
  const defaultCart = [{
    id: 234967,
    title: "Tennis racket",
    description: "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n        recusandae alias error harum maxime adipisci amet laborum.",
    price: 5500,
    storage: 77,
    url: "https://cdn.pixabay.com/photo/2020/04/10/10/44/activity-5025174_1280.jpg"
  },
  {
    id: 5456463,
    title: "Rollerblades",
    description: "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n        recusandae alias error harum maxime adipisci amet laborum.",
    price: 3500,
    storage: 24,
    url: "https://cdn.pixabay.com/photo/2016/12/17/09/01/sport-1913035_1280.png"
  }
  ]


  //create state here because both checkout.js and cart.js needs this.
  const [cartItems, setCartItems] = useState(defaultCart)

  const addToCart = (newItem) => {
    setCartItems([
      ...cartItems,
      newItem
    ])
  }

  const updateCartItem = (updatedItem) => {
    
    //only updated to one product with the correct id.
    let updatedCart = cartItems.map( (product) => (
      product.id === updatedItem.id
        ? updatedItem
        : product
    ))

    setCartItems(updatedCart)
  }

  const deleteCartItem = (id) => {
    let updatedCart = cartItems.filter( (item) => item.id !== id)
        //using test as well and sending it down below. Like todo={todo} is sent down from TodoList -> Todo
    
    console.log(updatedCart)

    setCartItems(updatedCart)
  }

  const clearCart = () => {
    setCartItems([])
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={ <Products /> }></Route>
          <Route path="/:id" element={ <Product /> } ></Route>
          <Route path="/checkout"  element={ <Checkout cartItems={cartItems} updateCartItem={updateCartItem} deleteCartItem={deleteCartItem} clearCart={clearCart} />} ></Route>
        </Routes>


        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
