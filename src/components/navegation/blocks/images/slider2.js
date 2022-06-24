import React from 'react';
import BannerDesktop2 from './slider-layout-img/slide2-desktop.png';
import BannerMobile2 from './slider-layout-img/slide2-desktop.png';

const Slider2 = () => {
  return (
    <picture>
        <source media="(min-width: 40em)" srcSet={BannerDesktop2} />
        <img src={BannerMobile2} alt="image" />
    </picture>
  )
}

export default Slider2;