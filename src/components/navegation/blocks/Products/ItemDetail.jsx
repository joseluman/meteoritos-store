import React from 'react'

const ItemDetail = ({pdp}) => {
  return ( 
  <>
    <h2 className='content-title'>Detalles del producto</h2>
    {
        pdp.map((e) => (
            
            <div className='item-detail'>
                <div className='photo-content'>
                    <img src={e.productImage} alt="Producto" />
                </div>
                <div className='datos-producto detail'>
                    <strong>{e.nombre}</strong>
                    <span className='valor-detalle'>$ {e.precio}</span>
                    <span className='descripcion'>Descripción: {e.descripcion}</span>
                    <strong>Stock Disponible: {e.stock}</strong>
                    <button className="addToCart">COMPRAR</button>
                </div>
            </div>
            
        ))
    }
  </>
        
  )
}

export default ItemDetail