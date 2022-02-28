import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Footer from './components/Footer';
import Product from './pages/Product';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={ <Product /> } ></Route>
          <Route path="/checkout" element={ <Checkout />} ></Route>

        </Routes>


        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
