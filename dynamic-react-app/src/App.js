import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>


      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
