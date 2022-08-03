import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { collection, addDoc } from 'firebase/firestore';
import db from "../../firebase/config";

const Cart = () => {

    const { cart, emptyCart, priceToPay, deleteItem } = useContext(CartContext);
    const [orderId, setOderId] = useState();

    const pagarPedido = () => {
        const valorTotalOrden = Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(priceToPay())
        const order = {
            comprador: { nombre: "José Manuel", telefono: 954983762, email: "email.prueba@prueba.com" },
            items: [cart][0],
            totalCompra: valorTotalOrden
        }

        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({id}) => setOderId(id))
    }

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
              <div key={item.id}>
                    <div  className="miniCartContainer">
                    <div className="miniCart_right">
                            <img src={item.productImage} alt={item.nombre} />
                        </div>
                        <div className="miniCart_left">
                            <h5>{item.nombre}</h5>
                            <p>Cantidad: {item.quantity}</p>
                            <h6>Precio: {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(item.totalPrice)}</h6>
                        </div>
                        <div className="miniCart_trash" onClick={()=> deleteItem(item.id)}>🗑️</div>
                    </div>
                    
                       <hr></hr>
                </div>
            ))
            }
            <div>Precio total {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(priceToPay())}</div>
            <button onClick={emptyCart}>vaciar carrito</button>
            <button onClick={pagarPedido}>Pagar</button>
        </>
    );
}

export default Cart;