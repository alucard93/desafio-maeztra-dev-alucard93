import styled from 'styled-components'

export const HeaderMobileContainerStyled = styled.header`
  width: 100%;
  height: 88px;
  background: #fff;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;

  .wrapper-header-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 20px;
    padding-right: 21px;
  }

  .container-header-mobile {
    display: flex;
    gap: 15px;
  }

  .container-header-mobile-bag {
    gap: 35px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`
