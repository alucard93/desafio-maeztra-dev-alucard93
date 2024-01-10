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
            <li className="item-final-header">Novidades</li>
          </div>
          <li className="item-final-header">Vestidos</li>
          <li className="item-final-header">Roupas</li>
          <li className="item-final-header">Sapatos</li>
          <li className="item-final-header">Lingerie</li>
          <li className="item-final-header">Acessórios</li>
          <li className="item-final-header">OUTLET</li>
        </ul>
      </nav>
    </FinalHeaderContainerStyled>
  )
}

export default FinalHeader
