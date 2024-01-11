import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import imgBanner from '../../assets/Banner.png'
import imgBannerMobile from '../../assets/BannerMobile.png'
import { BannerMainContainerStyled } from './style'

const SliderBannerMain = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  const listMedia = [
    {
      type: 'image',
      url: imgBanner,
    },
    {
      type: 'image',
      url: imgBanner,
    },
    {
      type: 'image',
      url: imgBanner,
    },
    {
      type: 'image',
      url: imgBanner,
    },
    {
      type: 'image',
      url: imgBanner,
    },
  ]
  const listMediaMobile = [
    {
      type: 'image',
      url: imgBannerMobile,
    },
    {
      type: 'image',
      url: imgBannerMobile,
    },
    {
      type: 'image',
      url: imgBannerMobile,
    },
    {
      type: 'image',
      url: imgBannerMobile,
    },
    {
      type: 'image',
      url: imgBannerMobile,
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 6000,

    slidesToShow: 1,
    slidesToScroll: 1,
  }
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <BannerMainContainerStyled>
      <Slider {...settings}>
        {(isMobile ? listMediaMobile : listMedia).map((media, index) => (
          <figure className="container-img-banner-main" key={index}>
            <img className="img-banner-main" src={media.url} alt="" />
          </figure>
        ))}
      </Slider>
    </BannerMainContainerStyled>
  )
}
export default SliderBannerMain
