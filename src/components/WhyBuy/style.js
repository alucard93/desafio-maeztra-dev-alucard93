import styled from 'styled-components'

export const WhyBuyContainerStyled = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 21px;
  margin-top: 28px;
  margin-bottom: 74px;

  .text-why-buy {
    color: #353535;
    text-align: center;
    font-family: Titillium Web;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .wrapper-img-paragraph-why-buy {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    overflow: scroll;
  }

  .container-img-paragraph-why-buy {
    display: flex;
    gap: 22px;
    width: 100%;
    max-width: 308px;
    height: 64px;
    border-radius: 4px;
    background: #efefef;
    padding: 16px 27px 14px 27px;
  }

  .strong-why-buy {
    color: #353535;
    font-family: Titillium Web;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .paragraph-why-buy {
    color: #000;
    font-family: Titillium Web;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    .wrapper-img-paragraph-why-buy {
      justify-content: flex-start;
      overflow: scroll;
      padding: 0 31px;
    }

    .wrapper-img-paragraph-why-buy::-webkit-scrollbar {
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    margin-bottom: 0px;
    .wrapper-img-paragraph-why-buy {
      overflow: scroll;
      justify-content: flex-start;
      padding-left: 31px;
      padding-right: 31px;
      scroll-snap-type: x proximity;
    }

    .wrapper-img-paragraph-why-buy::-webkit-scrollbar {
      width: 0;
    }

    .container-img-paragraph-why-buy {
      min-width: 298px;
    }

    .paragraph-why-buy {
      white-space: nowrap;
    }
  }
`
