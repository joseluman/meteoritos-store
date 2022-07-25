import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom"
 
const Cart = () => {

    const { cart, emptyCart, priceToPay, deleteItem } = useContext(CartContext)

    return (
        <>  <br></br>
            <h2 className="content">Resumen del carrito </h2>
            <br></br>
            {
                cart.length === 0 ? 
                <div>
                No hay productos en tu carrito 
                <Link to={`/`} className='go-shop'>Ir a comprar</Link>
                </div>
                
                :
            cart.map((item) => (
              <div key={item[0].id}>
                    <div  className="miniCartContainer">
                    <div className="miniCart_right">
                            <img src={item[0].productImage} alt={item[0].nombre} />
                        </div>
                        <div className="miniCart_left">
                            <h5>{item.nombre}</h5>
                            <p>Cantidad: {item.quantity}</p>
                            <h6>Precio: {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(item.totalPrice)}</h6>
                        </div>
                        <div className="miniCart_trash" onClick={()=> deleteItem(item[0].id)}>🗑️</div>
                    </div>
                    
                       <hr></hr>
                </div>
            ))
            }
            <div>Precio total {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(priceToPay())}</div>
            <button onClick={emptyCart}>vaciar carrito</button>
        </>
    );
}

export default Cart;