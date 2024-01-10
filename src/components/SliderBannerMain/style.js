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
    background: url(src/assets/icons/icon-prev.svg) no-repeat;
    height: 32px;
    width: 19.5px;
    transform: rotate(180deg);
    right: 161.5px;
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
    left: 161.5px;
  }

  .slick-prev::before {
    display: none;
  }
  .slick-dots li:not(.slick-active) {
    background: url('data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58065 0 0 3.58065 0 8C0 12.4194 3.58065 16 8 16C12.4194 16 16 12.4194 16 8C16 3.58065 12.4194 0 8 0ZM8 14.4516C4.43548 14.4516 1.54839 11.5645 1.54839 8C1.54839 4.43548 4.43548 1.54839 8 1.54839C11.5645 1.54839 14.4516 4.43548 14.4516 8C14.4516 11.5645 11.5645 14.4516 8 14.4516Z" fill="%23FAA500"/></svg>')
      no-repeat;
    height: 16px;
    width: 16px;
    z-index: 4;
  }

  .slick-active {
    content: '';
    background: url('data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58065 0 0 3.58065 0 8C0 12.4194 3.58065 16 8 16C12.4194 16 16 12.4194 16 8C16 3.58065 12.4194 0 8 0Z" fill="%23FAA500"/></svg>')
      no-repeat;
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
`
