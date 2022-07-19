import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Categorias from './blocks/Products/products.json'
import { useParams } from 'react-router-dom'
import ItemList from './blocks/Products/ItemList'

function Categorías() {
  const paramCategoria = useParams(),
        pathCategoria = paramCategoria.categoria;
  
    const [cat, setCat] = useState([])
    useEffect(() => {
        const detallitos = new Promise (resolve => {
            resolve(Categorias)
        })
        detallitos.then(result => {
            setTimeout(() => {
              setCat(result)
            }, 2000) 
        })

    }, [])
  
    const productosCategorias = cat.filter(e => e.categoria == pathCategoria)

  return (
    <>
      <div className='content'>Categorías</div>
      <div className='conteiner-categorias'>
        <h2>Filtrar por categorías</h2>
        <div>
          <Link className='url-categoria' to='Neptuno'>Neptuno</Link>
          <Link className='url-categoria' to='Urano'>Urano</Link>
        </div>
      </div>
      <ItemList items={productosCategorias} />
      <Outlet/>
    </>
  )
}

export default Categorías