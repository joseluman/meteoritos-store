import { useEffect, useState } from 'react'
import ItemList from './Products/ItemList'
import products from './Products/products.json'

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        const promesa = new Promise (resolve => {
            resolve(products)
        })
        promesa.then(result => {
            setTimeout(() => {
                setProductos(result)
            }, 2000) 
        })

    }, [])
  return (
    <div>
        <div className='content-title'>{greeting}</div>
        <ItemList items={productos} />
    </div>

    
  )
}

export default ItemListContainer