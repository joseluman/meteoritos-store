import React from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper";
import { Pagination } from "swiper";

const SliderLayout = props => {
  return <>
    <Swiper
      loop={true}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation, Pagination]}
      className='slider-layout'
    >
        {
          props.images.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} alt="Slides" />
              </SwiperSlide> 
          ))
        }
    </Swiper>
  </>
}

SliderLayout.propTypes = {
  images: PropTypes.array.isRequired
}

export default SliderLayout;