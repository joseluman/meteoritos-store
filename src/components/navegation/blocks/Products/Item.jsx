import React from 'react'
import '../../../styles/productos.css';
import { Link } from 'react-router-dom'

const Item = ({productImage, nombre, precio, id, categoria}) => { 
    return (
        <div className='info-card'>
            <div className='datos-producto'>
                <img src={productImage} alt="Producto" />
                <span>{nombre}</span>
                <span>{ categoria }</span>
                <span><strong>Precio</strong> {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio)}</span>
            </div>
            <Link to={'/item/' + id } className="details">VER PRODUCTO</Link>
        </div>
    )
}

export default Item