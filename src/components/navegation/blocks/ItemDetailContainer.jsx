import { useEffect, useState } from 'react'
import ItemDetail from './Products/ItemDetail'
import products from './Products/product-detail.json'

const ItemDetailContainer = () => {
    const [detalles, setDetalles] = useState([])
    useEffect(() => {
        const details = new Promise (resolve => {
            resolve(products)
        })
        details.then(result => {
            setTimeout(() => {
                console.log(result, "productos")
                setDetalles(result)
            }, 2000) 
        })

    }, [])
  return (
    <ItemDetail pdp={detalles}/>
  )
}

export default ItemDetailContainer