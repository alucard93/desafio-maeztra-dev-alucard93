import React from 'react'
import { DisclouseContainerStyled } from './style'

const DisclouseMobile = () => {
  return (
    <DisclouseContainerStyled>
      <div className="container-disclouse-list-item">
        <details className="disclouse-list">
          <summary className="disclouse-title">Informações</summary>
          <ul>
            <li className="disclouse-item">
              <a className="disclouse-link" href="">
                Quem Somos
              </a>
            </li>
            <li className="disclouse-item">
              <a className="disclouse-link" href="">
                Prazo de Envio
              </a>
            </li>
            <li className="disclouse-item">
              <a className="disclouse-link" href="">
                Trocas e Devoluções
              </a>
            </li>
            <li className="disclouse-item">
              <a className="disclouse-link" href="">
                Promoções e Cupons
              </a>
            </li>
          </ul>
        </details>

        <details className="disclouse-list">
          <summary className="disclouse-title">Minha Conta</summary>
          <ul>
            <li className="disclouse-item">
              <a className="disclouse-link" href="">
                Minha Conta
              </a>
            </li>
            <li className="disclouse-item">
              <a className="disclouse-link" href="">
                Meus Pedidos
              </a>
            </li>
            <li className="disclouse-item">
              <a className="disclouse-link" href="">
                Cadastre-se
              </a>
            </li>
          </ul>
        </details>

        <details className="disclouse-list">
          <summary className="disclouse-title">Onde nos Encontrar</summary>
          <ul>
            <li className="disclouse-item">
              <a className="disclouse-link" href="">
                Lojas
              </a>
            </li>
            <li className="disclouse-item">
              <a className="disclouse-link" href="">
                Endereço
              </a>
            </li>
          </ul>
        </details>
      </div>
    </DisclouseContainerStyled>
  )
}

export default DisclouseMobile
