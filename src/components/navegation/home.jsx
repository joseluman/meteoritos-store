import React from 'react'
import SliderLayout from './blocks/Slider/slider-layout';
import SliderLayoutMobile from './blocks/Slider/slider-layout-mobile';
import { SliderImagesDesktop } from './blocks/images/slider-images-desktop'
import { SliderImagesMobile } from './blocks/images/slider-images-mobile'
import { FooterImages } from './blocks/images/footer-images';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import '../styles/slider-layout.css';
import ItemListContainer from './blocks/ItemListContainer';
import { ItemCount } from './blocks/cartFunctions/ItemCount';
import { Footer } from '../footer/Footer';

function Home() {
  return <>
    <SliderLayout images={SliderImagesDesktop} />
    <SliderLayoutMobile images={SliderImagesMobile} />
    <ItemListContainer greeting={"Productos Destacados"}/>
    <ItemCount stock={10} initial={1}/>
    <Footer images={FooterImages} />
  </> 
}

export default Home;