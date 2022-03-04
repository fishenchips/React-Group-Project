import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import React, {useState, useEffect } from 'react'


 function App() {
  const [products,setProducts] = useState([]);
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
  
  const [cartItems, setCartItems] = useState([]);
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
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}



export default App;
