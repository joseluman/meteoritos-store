import React from 'react'
import SliderLayout from './blocks/slider-layout';
import SliderLayoutMobile from './blocks/slider-layout-mobile';
import { SliderImagesDesktop } from './blocks/images/slider-images-desktop'
import { SliderImagesMobile } from './blocks/images/slider-images-mobile'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import '../styles/slider-layout.css';


function Home() {
  return <>
    <SliderLayout images={SliderImagesDesktop} />
    <SliderLayoutMobile images={SliderImagesMobile} />
    <div className='content-title'>Inicio</div>
  </> 
}

export default Home;