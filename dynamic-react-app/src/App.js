import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Footer from './components/Footer';
import Product from './Pages/Product';

function App() {
  return (
    <div className="App">
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