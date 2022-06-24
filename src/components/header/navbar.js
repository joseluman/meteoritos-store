import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/react.png';
import ShoppingBagIcon from '../assets/shopping-cart.png'
import '../styles/navbar.css';
const NavBar = () => {
    return (
            <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={Logo} alt="logo" /></Link>
                        <div className='icons-mobile'>
                            <Link className="nav-link cart-mobile" to="/cart"><img src={ShoppingBagIcon} alt="cart" /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon light"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item item-1">
                                    <Link className="nav-link" to="/">Inicio</Link>
                                </li>
                                <li className="nav-item item-2">
                                    <Link className="nav-link" to="/tienda">Tienda</Link>
                                </li>
                                <li className="nav-item item-3">
                                    <Link className="nav-link" to="/contacto">Contacto</Link>
                                </li>
                                <li className="nav-item hiden-mobile">
                                    <Link className="nav-link" to="/cart"><img src={ShoppingBagIcon} alt="cart" /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
            </nav>
    );
}

export default NavBar; 