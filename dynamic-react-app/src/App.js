import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Footer from './components/Footer';
import Product from './Pages/Product';
import Header from './components/Header';


function App() {
  return (
    <div className="App">

      <Header />
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