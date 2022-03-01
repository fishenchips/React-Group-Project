import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Footer from './components/Footer';
import Product from './Pages/Product';
import Header from './components/Header';
import Products from './Pages/Products';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
      <Header />    
    
        <Routes>
            <Route path='/products' element={<Products />} />
            <Route path="/product" element={ <Product /> } />

        </Routes>
        </BrowserRouter>

        <Footer />
     
    </div>
  );
}

export default App;