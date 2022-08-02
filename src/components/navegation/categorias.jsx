import { Link, Outlet } from 'react-router-dom'

function Categorías() {
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
      <Outlet/>
    </>
  )
}

export default Categorías