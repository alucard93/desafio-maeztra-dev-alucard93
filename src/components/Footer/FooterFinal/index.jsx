import React from 'react'
import { FooterFinalContainerStyled } from './style'
import facebook from '../../../assets/footer/facebook.svg'
import linkedin from '../../../assets/footer/linkedin.svg'
import instagram from '../../../assets/footer/instagram.svg'
import youtube from '../../../assets/footer/youtube.svg'
import visa from '../../../assets/footer/visa.svg'
import mastercard from '../../../assets/footer/mastercard.svg'
import vtex from '../../../assets/footer/vtex.svg'
import maeztra from '../../../assets/footer/maeztra.svg'

const FooterFinal = () => {
  return (
    <FooterFinalContainerStyled>
      <div className="container-footer-final">
        <div className="container-img-footer-final">
          <img src={facebook} alt="icone facebook" />
          <img src={linkedin} alt="icone linkedin" />
          <img src={instagram} alt="icone instagram" />
          <img src={youtube} alt="icone youtube" />
        </div>
        <div className="container-img-footer-final">
          <img src={visa} alt="icone visa" />
          <img src={mastercard} alt="icone mastercard" />
          <img src={visa} alt="icone visa" />
          <img src={mastercard} alt="icone mastercard" />
        </div>
        <div className="container-img-footer-final">
          <img src={vtex} alt="logo vtex" />
          <img src={maeztra} alt="logo maeztra" />
        </div>
      </div>
    </FooterFinalContainerStyled>
  )
}

export default FooterFinal
