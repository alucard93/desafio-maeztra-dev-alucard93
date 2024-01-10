import styled from 'styled-components'

export const InfoCardContainerStyled = styled.section`
  width: 100%;
  max-width: 1598px;
  margin: 0 auto;
  margin-top: 64px;
  margin-bottom: 80px;

  display: flex;

  justify-content: center;
  align-items: center;

  .container-infocard-texts {
    padding-right: 64px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .infocard-texts {
    color: #000;
    font-family: Titillium Web;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .infocard-paragraph {
    color: var(--color-2-900, #000);
    font-family: Titillium Web;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: inline-block;
    max-width: 422px;
  }

  .container-infocard-img {
    width: 100%;
    max-width: 1114px;
  }

  .infocard-img {
    max-width: 100%;
    object-fit: contain;
    display: block;
  }
`
