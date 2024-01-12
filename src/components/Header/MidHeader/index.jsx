import React from 'react'
import { MidHeaderContainerStyled } from './style'
import logo from '../../../assets/logo-maeztra-novo.png'
import user from '../../../assets/icons/icon-user.svg'
import heart from '../../../assets/icons/icon-heart.svg'
import shoppingbag from '../../../assets/icons/icon-shoppingbag.svg'

const MidHeader = () => {
  return (
    <MidHeaderContainerStyled>
      <section className="wrapper-mid-header">
        <figure className="container-img-mid-header-logo">
          <img
            title="logo"
            className="img-mid-header-logo"
            src={logo}
            alt="logo da empresa MAEZTRA"
          />
        </figure>

        <div className="container-input-button-mid-header">
          <input
            className="input-mid-header"
            placeholder="O Que Você Busca?"
            type="text"
          />
          <button className="button-mid-header">Buscar</button>
        </div>
        <div className="wrapper-user-mid-header">
          <div className="container-user-mid-header">
            <img src={user} alt="icone profile" />
            <p>Minha Conta</p>
          </div>
          <div className="container-user-mid-header">
            <img src={heart} alt="icone dos favoritos" />
            <p>Minha Conta</p>
          </div>
          <div className="container-user-mid-header">
            <img src={shoppingbag} alt="icone do carrinho" />
            <p>Meu Carrinho</p>
          </div>
        </div>
      </section>
    </MidHeaderContainerStyled>
  )
}

export default MidHeader
