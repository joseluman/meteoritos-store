import React from 'react'
import '../../../styles/productos.css';

const Item = ({productImage, nombre, precio, id}) => { 
    return (
        <div className='info-card'>
            <div className='datos-producto'>
                <img src={productImage} alt="Producto" />
                <span>{nombre}</span>
                <span>Cod SKU: {id}</span>
                <span>$ {precio}</span>
            </div>
            <div className='cantidad'>
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div>
            <a href="#" className='details'>Ver Detalles</a>
            <button className="addToCart">AGREGAR</button>
        </div>
    )
}

export default Item