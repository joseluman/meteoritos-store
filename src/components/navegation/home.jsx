import React from 'react'
import SliderLayout from './blocks/Slider/slider-layout';
import SliderLayoutMobile from './blocks/Slider/slider-layout-mobile';
import { SliderImagesDesktop } from './blocks/images/slider-images-desktop'
import { SliderImagesMobile } from './blocks/images/slider-images-mobile'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import '../styles/slider-layout.css';
import ItemListContainer from './blocks/ItemListContainer';


function Home() {
  return <>
    <SliderLayout images={SliderImagesDesktop} />
    <SliderLayoutMobile images={SliderImagesMobile} />
    <ItemListContainer greeting={"Inicio"}/>
  </> 
}

export default Home;