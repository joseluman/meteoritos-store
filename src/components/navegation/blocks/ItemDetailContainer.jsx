import { useEffect, useState } from 'react'
import ItemDetail from './Products/ItemDetail'
import { useParams } from 'react-router-dom'
import fichaProducto from './Products/products.json'

const ItemDetailContainer = () => {
    const params = useParams()
    const idParametro = params.id
    const [detalles, setDetalles] = useState([])
    useEffect(() => {
        const detallitos = new Promise (resolve => {
            resolve(fichaProducto)
        })
        detallitos.then(result => {
            setTimeout(() => {
                setDetalles(result)
            }, 2000) 
        })

    }, [])
    const productoFicha = detalles.filter(e => e.id == idParametro)

    return (
        <ItemDetail pdp={productoFicha}/>
    )
}

export default ItemDetailContainer