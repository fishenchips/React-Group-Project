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
  //for now useState is the dummy data above, but will later be useState([])
  const [cartItems, setCartItems] = useState([])

  //fucntion to add a product to the cart, and if it already exists, add another to its qty (in both cart and checkout)
  const onAdd = (item) => {
    const exists = cartItems.find( cartItem => cartItem.id === item.id)
    if(exists) {
      exists.qty += 1
    } else {
      // if it doesnt exist, add it to carItems array with a new property qty starting at 1.
      setCartItems([
        ...cartItems,
        {qty: 1,
          ...item} //skapar ett nytt objekt, också spreadar jag item så den lägger till allt tidigare men lägger även till en ny grej: qty
          //
        ]
      )
    }
    console.log(cartItems)
  }

  //function to remove a qty from a product in the cart/checkout
  const onRemove = (item) => {
    const exists = cartItems.find( cartItem => cartItem.id === item.id)
    if(exists.qty === 1) {
      //dont change anything ie leave qty at 1
      setCartItems(cartItems)
    } else {
      exists.qty -= 1        
    }
    console.log(cartItems)
  }


  //fuction to remove an item completely from the cart
  const deleteCartItem = (id) => {
    let updatedCart = cartItems.filter( (item) => item.id !== id)  

    //Send updatedCart to useState in order to show correct cartList
    setCartItems(updatedCart)
  }

  //fuction used when pressing button "clear cart" it empties it , ie useState back to empty Array
  const clearCart = () => {
    setCartItems([])
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={ <Products /> }></Route>
          <Route path="/products/:id" element={ <Product onAdd={onAdd} /> } ></Route>
{/*   sending props down to child component. Will be done for shoppingCart as well*/}
          <Route path="/checkout"  element={ <Checkout cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} deleteCartItem={deleteCartItem} clearCart={clearCart} />} ></Route>
        </Routes>


        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
