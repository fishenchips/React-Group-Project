import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './Pages/Products';
import Basket from './components/Basket';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
      <Header />    
    
        <Routes>
            <Route path='/products' element={<Products />} />
            <Route path='/products' element={<Basket/>} />

        </Routes>
        </BrowserRouter>

        <Footer />
     
    </div>
  );
}

export default App;