import styled from 'styled-components'

export const ShowcaseContainerStyled = styled.div`
  width: 100%;

  height: 674px;

  .title-showcase {
    color: var(--color-2-500, #353535);
    text-align: center;
    font-family: Titillium Web;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 24px;
  }

  .slick-track {
    display: flex;
    justify-content: center;
  }

  .slick-slide {
    width: 324px !important;
  }

  .container-showcase {
    max-width: 308px;
  }
  .container-img-showcase {
    max-width: 308px;
    height: 381px;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
  }

  .img-showcase {
    display: block;
    max-width: 100%;
    object-fit: contain;
  }

  .wrapper-showcase-info {
    padding: 0 27px;
    padding-top: 8px;
  }

  .container-btn-showcase-color {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 132px;
    margin-bottom: 8px;
  }

  .btn-showcase-color-1,
  .btn-showcase-color-2,
  .btn-showcase-color-3,
  .btn-showcase-color-4 {
    width: 27px;
    height: 27px;
    border-radius: 4px;
  }

  .btn-showcase-color-1 {
    background-color: #deac71;
  }

  .btn-showcase-color-2 {
    background-color: #d37164;
  }
  .btn-showcase-color-3 {
    background-color: #6497d3;
  }

  .btn-showcase-color-4 {
    background-color: #3c3b79;
  }

  .text-price-showcase {
    margin: 0;
    color: #353535;
    font-family: Titillium Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 2px;
  }

  .text-name-showcase {
    color: #000;
    font-family: Titillium Web;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 8px;
  }

  .text-description-showcase {
    color: #000;
    font-family: Titillium Web;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
    margin-bottom: 8px;

    height: 56px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
  }

  .btn-description-showcase {
    all: unset;
    width: 100%;
    max-width: 254px;
    height: 35px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #fff;
    text-align: center;
    font-family: Titillium Web;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: #faa500;
  }

  .slick-initialized {
    max-width: 1598px;
    margin: 0 auto;
  }
  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 0;
  }

  .slick-next {
    content: '';
    display: inline-block;
    background: url(src/assets/icons/icon-prev.svg) no-repeat;
    height: 32px;
    width: 19.5px;
    transform: rotate(180deg);
    right: 10.5px;
  }

  .slick-next::before {
    display: none;
  }

  .slick-prev {
    content: '';
    position: absolute;
    display: inline-block;
    background: url(src/assets/icons/icon-prev.svg) no-repeat;
    height: 32px;
    width: 19.5px;
    z-index: 4;
    left: 1.5px;
  }

  .slick-prev::before {
    display: none;
  }

  @media (max-width: 1024px) {
    .title-showcase {
      color: var(--color-2-500, #353535);
      text-align: center;
      font-family: Titillium Web;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`
