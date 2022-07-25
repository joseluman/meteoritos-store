import { useState, useContext }  from 'react'
import { ItemCount } from '../cartFunctions/ItemCount'
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';

const ItemDetail = ({ pdp }) => {
    const { addItem } = useContext(CartContext);
    const { isInCart } = useContext(CartContext);

    let [quantity, setQuantity] = useState(1);
    let [showCount, setShowCount] = useState(true)
    
    const addToCart = () => {
    
        const totalPrice = quantity * (pdp[0].precio)
        const itemToCart = {
            ...pdp,
            quantity: quantity,
            totalPrice: totalPrice,
        }

        isInCart(pdp[0].id) === false ?
            addItem(itemToCart)
            :
            alert('ya compraste esto intenta comprando algo más')
        setShowCount(false)

    }

  return ( 
  <>
    <h2 className='content-title'>Detalles del producto</h2>
    {
        pdp.map((e) => (
            <div className='item-detail' key={e.id}>
                <div className='photo-content'>
                    <img src={e.productImage} alt="Producto" />
                </div>
                <div className='datos-producto detail'>
                    <strong>{e.nombre}</strong>
                    <span className='valor-detalle'>{Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(e.precio)}</span>
                    <span className='descripcion'>Descripción: {e.descripcion}</span>
                    <strong>Stock Disponible: {e.stock - quantity}</strong>
                    <ItemCount stock={e.stock} initial={1} onAdd={addToCart} setCounter={setQuantity} />
                    <Link to='/cart'>
                        <button className="addToCart">FINALIZAR COMPRA</button>
                    </Link>
                    
                </div>
            </div>
            
        ))
    }
  </>
        
  )
}

export default ItemDetail