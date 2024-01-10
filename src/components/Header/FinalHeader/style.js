import styled from 'styled-components'

export const FinalHeaderContainerStyled = styled.div`
  width: 100%;
  height: 48px;
  margin-top: 7px;
  background: var(--color-5-500, #fff);

  .wrapper-container-final-header {
    width: 100%;
    height: 100%;
    max-width: 1598px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container-final-header-list {
    display: flex;
    width: 100%;

    gap: 15px;
    padding-left: 162px;
  }

  .item-final-header {
    list-style-type: none;
    width: 100%;
    max-width: 147px;
    text-align: center;
  }

  .container-first-item-final-header {
    display: flex;
    gap: 8px;
  }

  .container-first-item-final-header .item-final-header {
    color: var(--color-1500-faa-500, #faa500);
    text-align: center;
    font-family: Titillium Web;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px; /* 150% */
  }

  .item-final-header {
    color: var(--color-2-500, #353535);
    text-align: center;
    font-family: Titillium Web;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px; /* 150% */
  }
`
