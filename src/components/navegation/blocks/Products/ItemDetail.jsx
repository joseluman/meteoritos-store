import { useState }  from 'react'
import { ItemCount } from '../cartFunctions/ItemCount'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const ItemDetail = ({ pdp }) => {
    let [quantity, setQuantity] = useState(1);

    const addToCart = () => {
        Swal.fire({
            title: 'Producto añadido con éxito',
            icon: 'success',
            confirmButtonText: 'Seguir comprando'
        })
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