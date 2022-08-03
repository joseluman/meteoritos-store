import { useEffect, useState } from 'react'
import ItemDetail from './Products/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import  db from '../../../firebase/config';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { itemId } = useParams();

    useEffect(() => {
        const docRef = doc(db, "items", itemId)
        getDoc(docRef)
            .then((resp) => {
                setItem({ id: resp.id, ...resp.data()})
            })
    }, [itemId]);

    return (
        <ItemDetail
        item={item}
        id={item.id}
        productImage={item.productImage}
        nombre={item.nombre}
        descripcion={item.descripcion}
        precio={item.precio}
        stock={item.stock}/>
    )
}

export default ItemDetailContainer