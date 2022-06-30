import { useState } from 'react'
import Swal from 'sweetalert2';
import piedraLunar from '../../../assets/asteroide.png';
import '../../../styles/productos.css';


export const ItemCount = ({stock, initial}) => {
    const [contador, setContador] = useState(initial);
    const aumentar = () => {
        setContador(contador + 1);
    }
    const disminuir = () => {
        setContador((cantidadCounter) => (cantidadCounter > 1 ? contador -1: contador));
    }
    const addToCart = () => {
        if(contador <= stock){
            Swal.fire({
                title: 'Producto añadido con éxito',
                icon: 'success',
                confirmButtonText: 'Seguir comprando'
            })
        }else{
            Swal.fire({
                title: '¡No se pudo agregar al carrito!',
                text: 'No hay suficiente stock :c',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }
  return (
    <div className='info-card'>
        <div className='datos-producto'>
            <img src={piedraLunar} alt="Producto" />
            <span>Piedra Lunar de Neptuno</span>
            <span>$ 300.000</span>
        </div>
        <div className='cantidad'>
            <button onClick={disminuir}>-</button>
            <span>{contador}</span>
            <button onClick={aumentar}>+</button>
        </div>
        <button onClick={addToCart} className="addToCart">AGREGAR</button>
    </div>
  )
}
