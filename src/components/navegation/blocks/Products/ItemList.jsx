import Item from './Item'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper";
import { Pagination } from "swiper";

const ItemList = ({ productos }) => {
  console.log(productos)
  return (
    <Swiper
      loop={true}
      navigation={true}
      slidesPerView={4}
      modules={[Navigation, Pagination]}
      className='carrusel-productos'
    >
        {
          productos.map((e) => (
            <SwiperSlide key={e.id}>
              <Item {...e} />
            </SwiperSlide>
          ))
        }
    </Swiper>
    
  )
}

export default ItemList

