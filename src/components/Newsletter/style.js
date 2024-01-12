import styled from 'styled-components'

export const NewsletterContainerStyled = styled.section`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  padding: 40px 0;

  .container-newsletter-text-input-btn {
    display: flex;
    justify-content: center;
    gap: 56px;
    width: 100%;
  }

  .newsletter-text {
    color: #000;
    font-family: Titillium Web;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .container-newsletter-input-btn {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 630px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #353535;
    background: #fff;
  }

  .newsletter-input {
    all: unset;
    padding-left: 24px;
    width: 100%;
    max-width: 444px;

    color: #353535;
    font-family: Titillium Web;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .newsletter-btn {
    all: unset;
    width: 100%;
    margin-top: -1px;
    margin-right: -1px;
    max-width: 131px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #faa500;
    background: #faa500;
    color: #fff;
    font-family: Titillium Web;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media (max-width: 1024px) {
    background: #fafafa;

    .container-newsletter-text-input-btn {
      flex-direction: column;
      gap: 8px;
    }

    .newsletter-text {
      text-align: center;
    }

    .container-newsletter-input-btn {
      padding: 0 31px;
      border: none;
      background-color: #fafafa;
      gap: 15px;
    }

    .newsletter-input {
      border-radius: 4px;
      border: 1px solid var(--color-2-500, #353535);
      background: var(--color-5-500, #fff);
      height: 26px;
    }

    .newsletter-btn {
      border-radius: 4px;
      border: 1px solid var(--color-1500-faa-500, #faa500);
      background: var(--color-1500-faa-500, #faa500);
      height: 26px;
      max-width: 79px;
    }
  }
`
