import { useState } from 'react'
import '../../../styles/productos.css';


export const ItemCount = ({stock, initial, onAdd, setCounter}) => {
    const [count, setCount] = useState(initial);
    const aumentar = () => {
        if (count < stock) {
            setCount(count + 1)
            setCounter(count + 1);
        }
    }
    const disminuir = () => {
        if (count >= 1) {
            setCount(count - 1);
            setCounter(count - 1);
        }
    }
    
  return (
    <>
        <div className='cantidad'>
            <button onClick={disminuir}>-</button>
            <span>{count}</span>
            <button onClick={aumentar}>+</button>
        </div>
        <button onClick={onAdd} className="addToCart">AGREGAR</button>
    </>
  )
}
