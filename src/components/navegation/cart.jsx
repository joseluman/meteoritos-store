import { CartContext } from "../context/CartContext";
import { useContext, useState} from "react";
import { Link } from "react-router-dom"
import { collection, addDoc } from 'firebase/firestore';
import db from "../../firebase/config";
  
const Cart = () => {

    const { cart, emptyCart, priceToPay, deleteItem } = useContext(CartContext);
    const [orderId, setOderId] = useState();
    const [datos, setDatos] = useState({
        nombre: '',
        telefono: '',
        email: ''
    });
    
    const handleInput = (e) => { 
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    

    const pagarPedido = () => {
        if (datos.nombre === "" && datos.email === "" && datos.telefono === "") {
            return alert("complete sus datos")
        } else {
            const valorTotalOrden = Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(priceToPay())
            const order = {
                comprador: {
                    datos
                },
                items: [cart][0],
                totalCompra: valorTotalOrden
            }
    
            const orderCollection = collection(db, "orders");
            addDoc(orderCollection, order).then(({ id }) => alert("Gracias por comprar, su número de orden es " + id))  
        } 
    }

    return (
        <>
            
            <br></br>
            <h2 className="content">Resumen del carrito </h2>
            <br></br>
            <div className="form">
                <h2>Ingresa tus datos</h2>
                <form action="">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text"
                            name="nombre"
                            onChange={handleInput}
                        />
                        <label htmlFor="telefono">Teléfono</label>
                        <input type="number"
                            name="telefono"
                            onChange={handleInput}
                        />
                        <label htmlFor="email">Email</label>
                        <input type="email"
                            name="email"
                            id="email"
                            onChange={handleInput}
                        />
                    </form>      
                </div> 
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