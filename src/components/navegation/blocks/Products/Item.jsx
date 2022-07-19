import React from 'react'
import '../../../styles/productos.css';
import { Link } from 'react-router-dom'

const Item = ({productImage, nombre, precio, id, categoria}) => { 
    return (
        <div className='info-card'>
            <div className='datos-producto'>
                <img src={productImage} alt="Producto" />
                <span>{nombre}</span>
                <span>Cod SKU: {id}</span>
                <span>{Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio)}</span>
            </div>
            <div className='cantidad'>
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div>
            <Link to={'/item/' + id } className='details'>Ver Detalles</Link>
            <button className="addToCart">AGREGAR</button>
        </div>
    )
}

export default Item