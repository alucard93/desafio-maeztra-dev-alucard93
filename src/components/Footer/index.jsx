  import React from 'react'
  import { FooterContainerStyled } from './style'
import FooterFinal from './FooterFinal'

  const Footer = () => {
    return (
      <FooterContainerStyled>
        <div className="container-footer-list-item">
          <ul className="footer-list footer-list--1">
            <li className="footer-item footer-title">
              <a className="footer-link" href="">
                Informações
              </a>
            </li>

            <li className="footer-item">
              <a className="footer-link" href="">
                Quem Somos
              </a>
            </li>

            <li className="footer-item">
              <a className="footer-link" href="">
                Prazo de Envio
              </a>
            </li>

            <li className="footer-item">
              <a className="footer-link" href="">
                Trocas e Devoluções
              </a>
            </li>

            <li className="footer-item">
              <a className="footer-link" href="">
                Promoções e Cupons
              </a>
            </li>
          </ul>

          <ul className="footer-list footer-list--2">
            <li className="footer-item footer-title">
              <a className="footer-link" href="">
                Minha Conta
              </a>
            </li>

            <li className="footer-item">
              <a className="footer-link" href="">
                Minha Conta
              </a>
            </li>

            <li className="footer-item">
              <a className="footer-link" href="">
                Meus Pedidos
              </a>
            </li>

            <li className="footer-item">
              <a className="footer-link" href="">
                Cadastre-se
              </a>
            </li>
          </ul>

          <ul className="footer-list footer-list--3">
            <li className="footer-item footer-title">
              <a className="footer-link" href="">
                Onde nos Encontrar
              </a>
            </li>

            <li className="footer-item">
              <a className="footer-link" href="">
                Lojas
              </a>
            </li>

            <li className="footer-item">
              <a className="footer-link" href="">
                Endereço
              </a>
            </li>
          </ul>
        </div>
        <FooterFinal/>
      </FooterContainerStyled>
    )
  }

  export default Footer
