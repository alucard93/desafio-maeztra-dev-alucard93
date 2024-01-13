import styled from 'styled-components'

export const BannerMainContainerStyled = styled.div`
  width: 100%;
  max-width: 100%;

  .container-img-banner-main {
    display: flex;
    width: 100%;
    max-width: 100%;
  }

  .img-banner-main {
    display: block;
    object-fit: contain;
    max-width: 100%;
  }

  .slick-current {
    display: none;
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

    right: 161.5px;
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
    left: 161.5px;
  }

  .slick-prev::before {
    display: none;
  }
  .slick-dots li:not(.slick-active) {
    background: url('src/assets/_icon-elipsevazio.svg') no-repeat;
    height: 16px;
    width: 16px;
    z-index: 4;
  }

  .slick-active {
    content: '';
    background: url('src/assets/_icon-elipsecheia.svg') no-repeat;
    height: 16px;
    width: 16px;
    z-index: 4;
  }

  .slick-dots li.slick-active button:before {
    display: none;
  }

  .slick-dots li button:before {
    display: none;
  }

  .slick-dots {
    bottom: 28px;
  }

  @media (max-width: 1024px) {
    .img-banner-main {
      margin: 0 auto;
    }
    .slick-prev {
      left: 20px;
    }
    .slick-next {
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }

    .slick-active {
      content: '';
      background: url('data:image/svg+xml,<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 0C1.79032 0 0 1.79032 0 4C0 6.20968 1.79032 8 4 8C6.20968 8 8 6.20968 8 4C8 1.79032 6.20968 0 4 0Z" fill="%23FAA500"/></svg>')
        no-repeat;
      height: 8px;
      width: 8px;
      z-index: 4;
    }

    .slick-dots li:not(.slick-active) {
      background: url('data:image/svg+xml,<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 0C1.79032 0 0 1.79032 0 4C0 6.20968 1.79032 8 4 8C6.20968 8 8 6.20968 8 4C8 1.79032 6.20968 0 4 0ZM4 7.22581C2.21774 7.22581 0.774194 5.78226 0.774194 4C0.774194 2.21774 2.21774 0.774194 4 0.774194C5.78226 0.774194 7.22581 2.21774 7.22581 4C7.22581 5.78226 5.78226 7.22581 4 7.22581Z" fill="%23FAA500"/></svg>')
        no-repeat;
      height: 8px;
      width: 8px;
    }

    .slick-dots {
      bottom: 16px;
    }
  }
`
