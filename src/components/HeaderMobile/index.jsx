import React from 'react'
import busca from '../../assets/header/icon-busca.svg'
import menu from '../../assets/header/icon-menu.svg'
import bag from '../../assets/header/icon-shoppingbag.svg'
import logo from '../../assets/header/logo.svg'
import { HeaderMobileContainerStyled } from './style'

const HeaderMobile = () => {
  return (
    <HeaderMobileContainerStyled>
      <div className="wrapper-header-mobile">
        <figure className="container-header-mobile">
          <img src={menu} alt="" />
          <img src={logo} alt="" />
        </figure>
        <figure className="container-header-mobile container-header-mobile-bag">
          <img src={busca} alt="" />
          <img src={bag} alt="" />
        </figure>
      </div>
    </HeaderMobileContainerStyled>
  )
}

export default HeaderMobile
