import React from 'react'
import { FinalHeaderContainerStyled } from './style'
import dress from '../../../assets/icons/icon-dress.svg'
const FinalHeader = () => {
  return (
    <FinalHeaderContainerStyled>
      <nav className="wrapper-container-final-header">
        <ul className="container-final-header-list">
          <div className="container-first-item-final-header">
            <img src={dress} alt="" />
            <li className="item-final-header">
              <a href="">Novidades</a>
            </li>
          </div>
          <li className="item-final-header">
            <a href="">Vestidos</a>
          </li>
          <li className="item-final-header">
            <a href="">Roupas</a>
          </li>
          <li className="item-final-header">
            <a href="">Sapatos</a>
          </li>
          <li className="item-final-header">
            <a href="">Lingerie</a>
          </li>
          <li className="item-final-header">
            <a href="">Acessórios</a>
          </li>
          <li className="item-final-header">
            <a href="">OUTLET</a>
          </li>
        </ul>
      </nav>
    </FinalHeaderContainerStyled>
  )
}

export default FinalHeader
