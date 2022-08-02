import './index.css';
import NavBar from './components/header/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Cart from './components/navegation/cart';
import Home from './components/navegation/home';
import Contacto from './components/navegation/contacto';
import ItemDetailContainer from './components/navegation/blocks/ItemDetailContainer';
import CartProvider from './components/context/CartContext';
import ItemListContainer from './components/navegation/blocks/ItemListContainer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/categorias/:categoryId" element={<ItemListContainer />} />
          <Route path="/contacto" element={<Contacto />}/>
          <Route path="/cart" element={<Cart />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
