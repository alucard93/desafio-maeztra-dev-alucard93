import styled from 'styled-components'

export const PartnerBrandsContainerStyled = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 21px;
  margin-top: 28px;
  margin-bottom: 74px;

  .text-partner-brand {
    color: #353535;
    text-align: center;
    font-family: Titillium Web;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .wrapper-img-paragraph-partner-brand {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  .container-img-paragraph-partner-brand {
    width: 100%;
    max-width: 308px;
    height: 64px;
  }

  .img-partner-brand {
    display: block;
    object-fit: contain;
    max-width: 100%;
  }

  @media (max-width: 1024px) {
    .wrapper-img-paragraph-partner-brand {
      overflow: scroll;
      justify-content: flex-start;
      padding-left: 31px;
      gap: 16px;
    }

    .container-img-paragraph-partner-brand {
      min-width: 298px;
    }

    .container-img-paragraph-partner-brand:nth-child(0n + 3) {
      order: -1;
    }
  }
`
