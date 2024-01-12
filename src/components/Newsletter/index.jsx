import React from 'react'
import { NewsletterContainerStyled } from './style'

const Newsletter = () => {
  return (
    <NewsletterContainerStyled>
      <div className="container-newsletter-text-input-btn">
        <h3 className="newsletter-text">Recebe Nossa Newsletter</h3>
        <div className="container-newsletter-input-btn">
          <input
            className="newsletter-input"
            placeholder="Digite seu e-mail"
            type="text"
          />
          <button className="newsletter-btn">Enviar</button>
        </div>
      </div>
    </NewsletterContainerStyled>
  )
}

export default Newsletter
