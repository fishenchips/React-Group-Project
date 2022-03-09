import Header from './components/Header';
import Home from './components/Home';
import Main from './components/Main';
import Basket from './components/Basket';
import React, {useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Footer from './components/Footer';
import Product from './Pages/Product';
import Checkout from './Pages/Checkout';
import Products from './Pages/Products';


function App() {
  
  const [products,setProducts] = useState([]);
  //create state here because both checkout.js and cart.js needs this.
  //for now useState is the dummy data above, but will later be useState([])
  const [cartItems, setCartItems] = useState([])
  const [number, setNumber] = useState(1) // Hook to change input value

  const fetchData = async()=> {
    try{ 
     const response = await fetch('https://codexplained.se/sportstuff.php');
     const data = await response.json();
     console.log("data", data);
     setProducts(data);
    } catch(error) {
     console.log(error); 
    }
  }

  useEffect(()=>{
    fetchData();
  }, [])

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }

  //function to add a product to the cart, and if it already exists, add more to its qty (in both cart and checkout)
  const onAddPH = (item) => {
    const exists = cartItems.find( cartItem => cartItem.id === item.id)
    if(exists) {
        //cant add a value of 0
        if (number === 0) {
          alert("Please add a product")
        } else {
        exists.qty += parseInt(number)
        // need to update its state to show the new value for qty as well
        setCartItems([
          ...cartItems
        ])
      }
    } else {
      // if it doesnt exist, add it to carItems array with a new property qty (only if inputvalue > 0).
      if (number === 0) {
        alert("Please add a product")
      } else {
        setCartItems([
          ...cartItems,
          {qty: parseInt(number),
            ...item} //Since we are creating a new object, add all previous properties of item, plus qty.
          ]
        )
      }
    }
    console.log("cart item", cartItems)
  }

  //function to remove a qty from a product in the cart/checkout
  const onRemovePH = (item) => {
    const exists = cartItems.find( cartItem => cartItem.id === item.id)
    if(exists.qty === 1) {
      //dont change anything ie leave qty at 1
      setCartItems(cartItems)
    } else {
      exists.qty -= 1
      // same as onAdd, need to update state otherwise the change wont show
      setCartItems([
        ...cartItems
      ])        
    }
    console.log(cartItems)
  }

  //fuction to remove an item completely from the cart
  const deleteCartItem = (id) => {
    let updatedCart = cartItems.filter( (item) => item.id !== id )  

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

        <Header countCartItems={cartItems.length}></Header>

        <Routes>
          <Route path='/' element={<Home cartItems={cartItems} products={products} onAdd={onAdd} onRemove={onRemove}/>} />
          <Route path='/cart' element={<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>} />
          <Route path="/products" element={ <Products /> }></Route>
          <Route path="/products/:id" element={ <Product onAddPH={onAddPH} number={number} setNumber={setNumber} /> } ></Route>
          <Route path="/checkout"  element={ <Checkout cartItems={cartItems} setCartItems={setCartItems} onAddPH={onAddPH} onRemovePH={onRemovePH} deleteCartItem={deleteCartItem} clearCart={clearCart} number={number} setNumber={setNumber} />} ></Route>
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App;
