import { useEffect, useState } from 'react'
import ItemList from './Products/ItemList'
import { collection, getDocs, query, where } from 'firebase/firestore';
import db  from '../../../firebase/config'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {

    const { categoryId } = useParams()
    const [productos, setProductos] = useState([]);
    console.log(categoryId)
    useEffect(() => {
        const productsRef = collection(db, "items");

        getDocs(productsRef)
            .then((resp) => {
                const newItems = resp.docs.map((doc)=>{
                    return{
                        id: doc.id,
                        ...doc.data()
                    }
                });
                setProductos(newItems)
            })

    }, [categoryId]);


    return (
        <>
            <h1 className='content'> {categoryId ? `Estás en la categoría ${categoryId}` : 'Bienvenido a la tienda'}</h1>
            {categoryId ? (
                
                productos.filter((e) => e.categoria == categoryId).map((item) => ( 
                    <div className='info-card'>
                        <div className='datos-producto'>
                            <img src={item.productImage} alt="Producto" />
                            <span>{item.nombre}</span>
                            <span>{ item.categoria }</span>
                            <span><strong>Precio</strong> {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(item.precio)}</span>
                        </div>
                        <Link to={'/item/' + item.id } className="details">VER PRODUCTO</Link>
                    </div>
                ))
                ) : (
                    <ItemList productos={productos} />
                )}
            
        </>
    );
}

export default ItemListContainer;