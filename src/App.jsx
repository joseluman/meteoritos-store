import './index.css';
import NavBar from './components/header/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Cart from './components/navegation/cart';
import Home from './components/navegation/home';
import Contacto from './components/navegation/contacto';
import Tienda from './components/navegation/tienda';

function App() {
  return (
    <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tienda" element={<Tienda />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
