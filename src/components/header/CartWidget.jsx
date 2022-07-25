import React from 'react'
import ShoppingBagIcon from '../assets/shopping-cart.png'
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  return (
    <Link to="/cart" className='cart-container'>
      <img src={ShoppingBagIcon} alt="Shopping Bag" />
      <span className="total-cart" style={{ visibility: totalQuantity() > 0 ? 'visible' : 'hidden' }}>{totalQuantity()}</span>
    </Link>
    
  )
}

export default CartWidget