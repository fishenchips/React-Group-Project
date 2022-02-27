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

      <Header />
      <Products />
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={ <Product /> } ></Route>

        </Routes>


        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;