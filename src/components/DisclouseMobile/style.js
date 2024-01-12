import styled from 'styled-components'

export const DisclouseContainerStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container-disclouse-list-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 17px;
    width: 100%;

    margin-bottom: 56px;
  }

  .disclouse-list {
    display: flex;
    flex-direction: column;
    gap: 23px;
  }

  .disclouse-title {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding-left: 31px;
    width: 100%;
    color: #353535;
    font-family: Titillium Web;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 112.5% */
  }

  .disclouse-title::after {
    content: url('data:image/svg+xml,<svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.8 4.944V3.024H3.504V0.335999H5.424V3.024H8.16V4.944H5.424V7.664H3.504V4.944H0.8Z" fill="%23353535"/></svg>');
    display: flex;
    justify-content: end;
    padding-right: 35px;
    white-space: nowrap;
  }

  .disclouse-list--1 {
    width: 100%;
    max-width: 307px;
    margin-right: 141px;
  }

  .disclouse-list--2,
  .disclouse-list--3 {
    width: 100%;
    max-width: 146px;
  }

  .disclouse-list--3 {
    margin-left: 71px;
  }

  .disclouse-item {
    padding-left: 40px;
    list-style-type: none;
  }

  .disclouse-item:first-child {
    padding-top: 16px;
  }

  .disclouse-title .disclouse-link {
    color: #353535;
    font-family: Titillium Web;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
  }

  .disclouse-link {
    text-decoration: none;
    color: #000;
    font-family: Titillium Web;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 150% */
  }

  @media (min-width: 1024px) {
    .container-disclouse-list-item {
      display: none;
    }
  }
`
