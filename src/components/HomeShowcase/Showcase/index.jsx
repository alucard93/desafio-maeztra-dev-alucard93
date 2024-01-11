import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ShowcaseContainerStyled } from '../style'

const ShowCase = ({ showcasesData }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <ShowcaseContainerStyled>
      <h3 className="title-showcase">As Mais Pedidas</h3>
      <Slider {...settings}>
        {showcasesData.map((showcase, index) => (
          <div className="container-showcase" key={index}>
            <figure className="container-img-showcase">
              <img
                className="img-showcase"
                src={showcase.image}
                alt={showcase.altText}
              />
            </figure>
            <div className="wrapper-showcase-info">
              <div className="container-btn-showcase-color">
                {showcase.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`btn-showcase-color-${index + 1}`}
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>

              <p className="text-price-showcase">{showcase.price}</p>
              <p className="text-name-showcase">{showcase.name}</p>
              <p className="text-description-showcase">
                {showcase.description}
              </p>
              <button className="btn-description-showcase">Adicionar</button>
            </div>
          </div>
        ))}
      </Slider>
    </ShowcaseContainerStyled>
  )
}

export default ShowCase
