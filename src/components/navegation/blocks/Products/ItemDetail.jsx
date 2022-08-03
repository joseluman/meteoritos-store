import { useState, useContext }  from 'react'
import { ItemCount } from '../cartFunctions/ItemCount'
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';

const ItemDetail = ({ item, id, productImage, nombre, descripcion, precio, stock }) => {
    const { addItem } = useContext(CartContext);
    const { isInCart } = useContext(CartContext);

    let [quantity, setQuantity] = useState(1);
    let [showCount, setShowCount] = useState(true)

    const addToCart = () => {
        const totalPrice = quantity * (item.precio)

        const itemToCart = {
            ...item,
            quantity: quantity,
            totalPrice: totalPrice,
        }

        isInCart(item.id) === false ?
            addItem(itemToCart)
            :
            alert('ya compraste esto intenta comprando algo más')
        setShowCount(false)

    }

  return ( 
  <>
    <h2 className='content-title'>Detalles del producto</h2>
    {

        <div className='item-detail'>
            <div className='photo-content'>
                <img src={productImage} alt="Producto" />
            </div>
            <div className='datos-producto detail'>
                <strong>{nombre}</strong>
                <span className='valor-detalle'>{Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio)}</span>
                <span className='descripcion'>Descripción: {descripcion}</span>
                <strong>Stock Disponible: {stock - quantity}</strong>
                <ItemCount stock={stock} initial={1} onAdd={addToCart} setCounter={setQuantity} />
                <Link to='/cart'>
                    <button className="addToCart">FINALIZAR COMPRA</button>
                </Link>
                
            </div>
        </div>
            
    }
  </>
        
  )
}

export default ItemDetail