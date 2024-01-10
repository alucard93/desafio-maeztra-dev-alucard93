import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import imgBanner from '../../assets/Banner.png'
import { BannerMainContainerStyled } from './style'

const SliderBannerMain = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    // speed: 5000,
    // autoplaySpeed: 5000,

    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <BannerMainContainerStyled>
      <Slider {...settings}>
        {listMedia.map((media, index) => (
          <figure className="container-img-banner-main" key={index}>
            <img className="img-banner-main" src={media.url} alt="" />
          </figure>
        ))}
      </Slider>
    </BannerMainContainerStyled>
  )
}

export default SliderBannerMain
