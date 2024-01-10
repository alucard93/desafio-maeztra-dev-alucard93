import styled from 'styled-components'

export const MidHeaderContainerStyled = styled.div`
  width: 100%;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.08);

  .wrapper-mid-header {
    width: 100%;
    max-width: 1598px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 88px;
    background: #fff;
  }

  .container-img-mid-header-logo {
    width: 100%;
    max-width: 147px;
    height: 18px;
    margin-right: 93px;
  }

  .img-mid-header-logo {
    max-width: 100%;
    object-fit: contain;
  }

  .container-input-button-mid-header {
    width: 100%;
    max-width: 791px;
    height: 40px;
    border-radius: 10px;

    background: #efefef;

    display: flex;
    justify-content: space-between;

    margin-right: 147px;
  }

  .input-mid-header {
    all: unset;
    padding-left: 24px;
    color: #353535;
    font-family: Titillium Web;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }

  .button-mid-header {
    all: unset;

    color: var(--color-5-500, #fff);
    text-align: center;
    font-family: Titillium Web;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px; /* 150% */
    cursor: pointer;
    background-color: #faa500;

    width: 100%;
    max-width: 119px;
    height: 40px;
    border-radius: 8px;
  }

  .wrapper-user-mid-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 422px;
  }

  .container-user-mid-header {
    display: flex;
    gap: 8px;
  }
`
