import './index.css';
import NavBar from './components/header/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Cart from './components/navegation/cart';
import Home from './components/navegation/home';
import Contacto from './components/navegation/contacto';
import Categorias from './components/navegation/categorias';
import Urano from './components/navegation/categories/Urano';
import Neptuno from './components/navegation/categories/Neptuno';
import ItemDetailContainer from './components/navegation/blocks/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/categorias" element={<Categorias />} >
          <Route path=':categoria' element={<Urano />} />
          <Route path=':categoria' element={ <Neptuno />} />
        </Route>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
