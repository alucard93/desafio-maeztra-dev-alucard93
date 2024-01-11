import styled from 'styled-components'

export const FooterContainerStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container-footer-list-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 952px;
    gap: 141px;
    margin-bottom: 40px;
  }

  .footer-list {
    display: flex;
    flex-direction: column;
    gap: 23px;
  }

  .footer-list--1 {
    width: 100%;
    max-width: 307px;
    margin-right: 141px;
  }

  .footer-list--2,
  .footer-list--3 {
    width: 100%;
    max-width: 146px;
  }

  .footer-list--3 {
    margin-left: 71px;
  }

  .footer-item {
    list-style-type: none;
  }

  .footer-title .footer-link {
    color: #353535;
    font-family: Titillium Web;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
  }

  .footer-link {
    text-decoration: none;
    color: #000;
    font-family: Titillium Web;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 150% */
  }

  @media (max-width: 1024px) {
    .container-footer-list-item {
      flex-direction: column;
    }
  }
`
