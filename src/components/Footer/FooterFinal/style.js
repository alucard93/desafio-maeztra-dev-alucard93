import styled from 'styled-components'

export const FooterFinalContainerStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85px;
  padding: 0 31px;
  background: #353535;

  .container-footer-final {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1598px;
    margin: 0 auto;
  }

  .container-img-footer-final {
    display: flex;
    gap: 22px;
  }

  .container-img-footer-final:nth-child(0n + 2) {
    margin-left: 139px;
  }

  @media (max-width: 1024px) {
    height: 233px;
    .container-footer-final {
      align-items: center;
      gap: 32px;
      flex-direction: column;
    }

    .container-img-footer-final:nth-child(0n + 2) {
      margin-left: 0;
    }

    .container-img-footer-final:last-child {
      margin-left: 10px;
    }
  }
`
