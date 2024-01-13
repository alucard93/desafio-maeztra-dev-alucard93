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
    background: url('data:image/svg+xml,<svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9047 17.2436L4.6633 31.4849C3.97646 32.1717 2.86291 32.1717 2.17613 31.4849L0.515117 29.8238C-0.170556 29.1382 -0.171875 28.0269 0.512186 27.3396L11.7987 16L0.512186 4.66039C-0.171875 3.9731 -0.170556 2.86182 0.515117 2.17615L2.17613 0.515134C2.86298 -0.171711 3.97653 -0.171711 4.6633 0.515134L18.9046 14.7564C19.5914 15.4432 19.5914 16.5567 18.9047 17.2436Z" fill="black"/></svg>')
      no-repeat;
    height: 32px;
    width: 19.5px;

    right: 10.5px;
  }

  .slick-next::before {
    display: none;
  }

  .slick-prev {
    content: '';
    position: absolute;
    display: inline-block;
    background: url('data:image/svg+xml,<svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.514971 14.7561L14.7568 0.514971C15.4434 -0.171657 16.5573 -0.171657 17.2439 0.514971L18.9052 2.17621C19.5911 2.86211 19.5918 3.97302 18.9081 4.66038L7.62087 15.9996L18.9074 27.3396C19.5918 28.027 19.5903 29.1379 18.9044 29.8238L17.2432 31.485C16.5566 32.1717 15.4427 32.1717 14.7561 31.485L0.514971 17.2432C-0.171657 16.5566 -0.171657 15.4427 0.514971 14.7561Z" fill="black"/></svg>')
      no-repeat;
    height: 32px;
    width: 19.5px;
    z-index: 4;
    left: 1.5px;
  }

  .slick-prev::before {
    display: none;
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    padding: 0 31px;
    .slick-track {
      gap: 15px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1919px) {
    padding: 0 31px;
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

  @media (min-width: 361px) and (max-width: 1919px) {
    .slick-track {
      gap: 15px;
    }
  }
`
